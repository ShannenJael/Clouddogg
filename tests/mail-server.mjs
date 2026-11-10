import { createServer } from "node:http";
import { SMTPServer } from "smtp-server";

// A loopback-only mailbox: end-to-end tests never contact a real mail server.
const messages = [];
let rejectDelivery = false;
const smtp = new SMTPServer({
  disabledCommands: ["STARTTLS"],
  onAuth(auth, session, callback) {
    if (auth.username !== "website@example.test" || auth.password !== "local-test-only") {
      callback(new Error("Invalid test credentials"));
      return;
    }
    callback(null, { user: auth.username });
  },
  onData(stream, session, callback) {
    let data = "";
    stream.on("data", chunk => { data += chunk.toString(); });
    stream.on("end", () => {
      if (rejectDelivery) {
        callback(new Error("Simulated delivery failure"));
        return;
      }
      messages.push({ data, recipients: session.envelope.rcptTo.map(({ address }) => address) });
      callback();
    });
  },
});
smtp.listen(3131, "127.0.0.1");
createServer((request, response) => {
  response.setHeader("Content-Type", "application/json");
  if (request.url === "/messages") {
    if (request.method === "DELETE") messages.length = 0;
    response.end(JSON.stringify(messages));
  } else if (request.url === "/fail" && request.method === "POST") {
    rejectDelivery = true;
    response.end("{}");
  } else if (request.url === "/reset" && request.method === "POST") {
    rejectDelivery = false;
    response.end("{}");
  } else {
    response.end('{"ready":true}');
  }
}).listen(3132, "127.0.0.1");
