import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BadgeCheck,
  Blocks,
  BrainCircuit,
  BriefcaseBusiness,
  CloudCog,
  CloudUpload,
  Cpu,
  DatabaseZap,
  Fingerprint,
  GraduationCap,
  Handshake,
  HeartPulse,
  LayoutTemplate,
  MessageSquareQuote,
  MonitorSmartphone,
  Rocket,
  Scale,
  School,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wrench,
} from "lucide-react";

export type Stat = {
  value: string;
  label: string;
};

export type LinkItem = {
  href: string;
  label: string;
};

export type Highlight = {
  title: string;
  description: string;
};

export type IconCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Service = IconCard & {
  slug: string;
  bullets: string[];
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Project = {
  icon: LucideIcon;
  category: string;
  title: string;
  summary: string;
  outcome: string;
  tags: string[];
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  intro: string;
  takeaways: string[];
  sections: Array<{
    title: string;
    body: string;
  }>;
};

export type Partner = {
  icon: LucideIcon;
  title: string;
  label: string;
  description: string;
  href: string;
  cta: string;
};

export const navLinks: LinkItem[] = [
  { href: "/services", label: "Services" },
  { href: "/training", label: "Training" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/portfolio", label: "Portfolio" },
];

export const heroStats: Stat[] = [
  { value: "10+ yrs", label: "Cloud delivery experience" },
  { value: "AI + Cloud", label: "Integrated delivery" },
  { value: "24/7", label: "Operational readiness" },
  { value: "Veteran-led", label: "Execution discipline" },
];

export const homeEntryPoints: Array<IconCard & { href: string; cta: string }> = [
  {
    icon: Rocket,
    title: "Modernize your platform",
    description:
      "Migrations, landing zones, automation, and cloud cost control for teams that need a cleaner operating model.",
    href: "/services",
    cta: "Explore services",
  },
  {
    icon: BrainCircuit,
    title: "Launch practical AI",
    description:
      "LLM integrations, workflow automation, and data pipelines designed to improve operations instead of generating noise.",
    href: "/portfolio",
    cta: "See project work",
  },
  {
    icon: GraduationCap,
    title: "Grow cloud talent",
    description:
      "Training and mentorship for veterans and military families moving from certification into real delivery experience.",
    href: "/training",
    cta: "View the program",
  },
];

export const services: Service[] = [
  {
    slug: "cloud-platform-engineering",
    icon: CloudCog,
    title: "Cloud platform engineering",
    description:
      "Design resilient landing zones, automate infrastructure, and create governance that scales without slowing delivery.",
    bullets: ["AWS, Azure, and GCP architecture", "Infrastructure as code and CI/CD", "Reliability, backup, and recovery planning"],
  },
  {
    slug: "ai-automation",
    icon: BrainCircuit,
    title: "AI and workflow automation",
    description:
      "Build AI-powered internal tools, copilots, and operational workflows that shorten decision cycles and reduce manual effort.",
    bullets: ["LLM integration and orchestration", "Retrieval and knowledge workflows", "Automation around support and operations"],
  },
  {
    slug: "security-compliance",
    icon: ShieldCheck,
    title: "Security and compliance",
    description:
      "Harden infrastructure with zero-trust controls, access reviews, and policies that keep regulated teams audit-ready.",
    bullets: ["Identity and access architecture", "Compliance mapping and guardrails", "Threat reduction and posture reviews"],
  },
  {
    slug: "data-analytics",
    icon: DatabaseZap,
    title: "Data and analytics foundations",
    description:
      "Turn scattered data into usable reporting and automation inputs through reliable pipelines, warehousing, and dashboards.",
    bullets: ["Operational reporting pipelines", "Executive dashboards and BI", "Event ingestion and observability"],
  },
  {
    slug: "product-development",
    icon: LayoutTemplate,
    title: "Product and application delivery",
    description:
      "Ship modern web experiences backed by scalable APIs and clean front-end systems that are easier to maintain.",
    bullets: ["Next.js and React delivery", "API and systems integration", "Design systems and UX refinement"],
  },
  {
    slug: "fractional-leadership",
    icon: BriefcaseBusiness,
    title: "Fractional cloud leadership",
    description:
      "Get senior technical guidance for roadmap decisions, vendor evaluation, and platform operations without hiring a full team first.",
    bullets: ["Architecture reviews", "Delivery planning and prioritization", "Team coaching and operating rhythm"],
  },
];

export const differentiators: IconCard[] = [
  {
    icon: Target,
    title: "Clear conversion paths",
    description:
      "Every page is structured around a practical next step, so visitors can move from curiosity to contact without friction.",
  },
  {
    icon: Fingerprint,
    title: "Mission-first execution",
    description:
      "CloudDogg brings veteran-led discipline to delivery, which matters when migrations and operational changes cannot drift.",
  },
  {
    icon: Sparkles,
    title: "Modern without the fluff",
    description:
      "The focus is usable systems, stronger UX, and automation that improves throughput instead of just sounding advanced.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Diagnose the current state",
    description:
      "We map technical constraints, business goals, and user friction so the work starts from reality instead of assumptions.",
  },
  {
    step: "02",
    title: "Design the operating model",
    description:
      "Architecture, workflows, UX, and governance are shaped into a delivery plan that teams can actually execute.",
  },
  {
    step: "03",
    title: "Ship and support",
    description:
      "Implementation is paired with enablement, documentation, and handoff so the outcome remains usable after launch.",
  },
];

export const portfolioProjects: Project[] = [
  {
    icon: HeartPulse,
    category: "Healthcare cloud migration",
    title: "HIPAA-ready multi-cloud modernization",
    summary:
      "Migrated a healthcare provider from aging on-prem systems into a more secure AWS and Azure operating model with stronger access controls and recovery planning.",
    outcome: "Reduced infrastructure cost by 40% while improving uptime confidence and compliance posture.",
    tags: ["AWS", "Azure", "HIPAA", "Terraform"],
  },
  {
    icon: Cpu,
    category: "AI service delivery",
    title: "Support automation with LLM tooling",
    summary:
      "Built an internal AI-assisted support workflow that routed questions, summarized context, and reduced repetitive ticket handling for customer teams.",
    outcome: "Lowered ticket volume by 65% and shortened response times for high-frequency requests.",
    tags: ["LLM", "Python", "Automation", "Knowledge Base"],
  },
  {
    icon: ShieldCheck,
    category: "Security architecture",
    title: "Zero-trust overhaul for a finance workflow",
    summary:
      "Reworked identity, access policy, and monitoring patterns for a financial services environment that had grown without clear guardrails.",
    outcome: "Reached a cleaner audit posture and removed several categories of critical exposure.",
    tags: ["Zero Trust", "IAM", "Monitoring", "SOC2"],
  },
  {
    icon: CloudUpload,
    category: "DevOps and release engineering",
    title: "Deployment pipeline modernization",
    summary:
      "Replaced a brittle manual release motion with automated pipelines, validation, and environment consistency across teams.",
    outcome: "Moved from monthly release pressure to frequent, predictable deployments with far fewer rollback events.",
    tags: ["CI/CD", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    icon: MonitorSmartphone,
    category: "SaaS product delivery",
    title: "Cloud-native platform for a logistics startup",
    summary:
      "Delivered a full-stack product foundation with account workflows, operational dashboards, and scalable backend services.",
    outcome: "Supported rapid customer growth without a full platform rewrite during early traction.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Cloud APIs"],
  },
  {
    icon: Blocks,
    category: "Analytics and decision support",
    title: "Real-time executive reporting layer",
    summary:
      "Built a unified reporting surface for operational and leadership teams pulling from multiple fragmented systems.",
    outcome: "Cut reporting lag dramatically and gave leaders faster access to usable performance signals.",
    tags: ["Warehousing", "Dashboards", "ETL", "Observability"],
  },
];

export const trainingOfferings: IconCard[] = [
  {
    icon: GraduationCap,
    title: "Certification-to-practice bridge",
    description:
      "The program starts with foundational certification and quickly moves into applied work so learning is retained through use.",
  },
  {
    icon: Users,
    title: "Mentorship with accountability",
    description:
      "Participants work with mentors who can translate cloud concepts into delivery habits, communication patterns, and team readiness.",
  },
  {
    icon: Wrench,
    title: "Real project exposure",
    description:
      "Training is reinforced through project-based work that looks closer to real delivery than passive coursework ever will.",
  },
  {
    icon: Handshake,
    title: "Career transition support",
    description:
      "Veterans and immediate family members get a clearer path into cloud work with guidance on positioning, confidence, and next steps.",
  },
];

export const trainingTimeline: ProcessStep[] = [
  {
    step: "01",
    title: "Earn the AWS CCP foundation",
    description:
      "Participants establish a baseline understanding of cloud concepts, AWS services, and vocabulary before entering the program.",
  },
  {
    step: "02",
    title: "Enter the mentorship track",
    description:
      "After certification, students join a guided environment built around repetition, feedback, and applied learning.",
  },
  {
    step: "03",
    title: "Work through live scenarios",
    description:
      "The program emphasizes project experience, teamwork, and troubleshooting so skills are retained under realistic conditions.",
  },
  {
    step: "04",
    title: "Prepare for the next role",
    description:
      "Career support helps participants move from study mode into positioning for cloud-adjacent and cloud-delivery roles.",
  },
];

export const values: IconCard[] = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "Systems should remain understandable, supportable, and resilient when the stakes are operational rather than theoretical.",
  },
  {
    icon: Sparkles,
    title: "Practical innovation",
    description:
      "We adopt modern tools when they create leverage, not simply because they are new or fashionable.",
  },
  {
    icon: Scale,
    title: "Integrity",
    description:
      "Technical guidance only works when trust is earned through clear tradeoffs, honest scope, and disciplined delivery.",
  },
  {
    icon: Users,
    title: "Human-centered UX",
    description:
      "A strong system is easier to use, easier to maintain, and easier to explain to the people who depend on it.",
  },
];

export const partners: Partner[] = [
  {
    icon: Sparkles,
    title: "Microsoft for Startups",
    label: "Founders Hub",
    description:
      "CloudDogg benefits from Microsoft startup resources that support product experimentation, platform growth, and service delivery.",
    href: "https://foundershub.startups.microsoft.com",
    cta: "Visit Founders Hub",
  },
  {
    icon: CloudUpload,
    title: "AWS for Startups",
    label: "Amazon Web Services",
    description:
      "AWS startup support helps accelerate prototyping, infrastructure planning, and reliable deployment patterns across customer work.",
    href: "https://aws.amazon.com/startups/",
    cta: "Explore AWS for Startups",
  },
  {
    icon: MessageSquareQuote,
    title: "Cazdin Creative",
    label: "Brand Strategy Partner",
    description:
      "Cazdin Creative brings purpose-led branding and identity work that complements CloudDogg's technical delivery and UX direction.",
    href: "https://cazdin.com",
    cta: "Visit Cazdin Creative",
  },
];

export const articles: Article[] = [
  {
    slug: "future-of-cloud-computing",
    category: "Cloud Strategy",
    title: "The Future of Cloud Computing",
    date: "July 1, 2023",
    readTime: "6 min read",
    excerpt:
      "Cloud strategy is shifting from raw infrastructure choices to reusable internal platforms, stronger governance, and AI-aware architecture.",
    intro:
      "The future of cloud computing is less about whether teams are in the cloud and more about whether they can operate it with clarity. The organizations that win will standardize the boring parts, create reliable self-service patterns, and reserve senior attention for the decisions that actually move the business.",
    takeaways: [
      "Reusable platform patterns are replacing one-off environment builds.",
      "AI workloads are forcing teams to rethink cost, latency, and data access design.",
      "Governance has to be embedded into delivery instead of layered on after launch.",
    ],
    sections: [
      {
        title: "Standardize the foundations",
        body:
          "Cloud environments become expensive and fragile when every project creates its own rules. The next phase of maturity is building landing zones, templates, and policy guardrails that teams can reuse without reopening the same architecture debates every sprint.",
      },
      {
        title: "Treat AI as an operating concern",
        body:
          "AI is not just another feature. It changes cost profiles, observability needs, and data handling patterns. Teams need infrastructure and product decisions that account for retrieval, evaluation, and human review before they scale experimentation.",
      },
      {
        title: "Improve developer flow without weakening control",
        body:
          "The strongest cloud programs balance speed and standards. Self-service infrastructure, clear access patterns, and automated checks let delivery teams move faster while keeping security and compliance visible from day one.",
      },
    ],
  },
  {
    slug: "optimize-cloud-costs",
    category: "Cost Management",
    title: "5 Ways to Optimize Your Cloud Costs",
    date: "June 15, 2023",
    readTime: "5 min read",
    excerpt:
      "Cloud cost control improves when teams treat spend as a design input, not a finance cleanup exercise after the invoice arrives.",
    intro:
      "Most cloud waste is not caused by one giant mistake. It comes from dozens of small defaults: oversized resources, idle services, unclear ownership, and workloads that were never revisited after launch. Cost optimization works best when it becomes part of the delivery habit.",
    takeaways: [
      "Assign ownership for services and environments before trying to fix spend.",
      "Rightsizing and cleanup usually beat complex savings strategies at the start.",
      "Observability and tagging are prerequisites for sustained FinOps discipline.",
    ],
    sections: [
      {
        title: "Make ownership visible",
        body:
          "If nobody clearly owns a workload, cloud cost conversations stall. Tagging, budget alerts, and environment conventions create accountability and make it easier to see which decisions are adding recurring overhead.",
      },
      {
        title: "Remove idle complexity",
        body:
          "Old snapshots, abandoned databases, forgotten development environments, and duplicated services quietly inflate bills. A regular cleanup motion often unlocks savings faster than more advanced pricing strategies.",
      },
      {
        title: "Design for realistic demand",
        body:
          "Teams often architect around peak assumptions that almost never happen. Autoscaling, better traffic analysis, and service-level priorities help align infrastructure with actual usage instead of fear-based provisioning.",
      },
    ],
  },
  {
    slug: "cloud-security-best-practices",
    category: "Security",
    title: "Cloud Security Best Practices",
    date: "June 1, 2023",
    readTime: "6 min read",
    excerpt:
      "Cloud security improves when access, visibility, and response patterns are designed into the platform instead of bolted on around incidents.",
    intro:
      "A secure cloud posture is the outcome of dozens of routine decisions. Strong defaults, reliable identity patterns, and useful monitoring create far more protection than an oversized stack of disconnected security tools.",
    takeaways: [
      "Identity and access management is still the highest-leverage control surface.",
      "Detection only helps if the team has a usable response path.",
      "Secure defaults should be part of templates, pipelines, and reviews.",
    ],
    sections: [
      {
        title: "Start with identity",
        body:
          "Over-permissioned accounts and shared credentials are still among the most common failures. Role-based access, short-lived credentials, and regular access review cycles are more important than cosmetic policy documents.",
      },
      {
        title: "Instrument what matters",
        body:
          "Logs become noise when they are not tied to meaningful review and escalation patterns. Monitor the systems and events that indicate material risk, then ensure someone can actually act on those signals without confusion.",
      },
      {
        title: "Move security left without slowing delivery",
        body:
          "The goal is not to create more approvals. The goal is to create safer defaults. When templates, pipelines, and guardrails encode the right patterns, teams get both speed and a healthier baseline posture.",
      },
    ],
  },
  {
    slug: "veterans-in-cloud-tech",
    category: "Veterans and Tech",
    title: "Why Veterans Excel in Cloud Technology",
    date: "May 15, 2023",
    readTime: "4 min read",
    excerpt:
      "Veterans often bring execution discipline, calm problem-solving, and team-first thinking that translate directly into cloud delivery work.",
    intro:
      "Cloud technology rewards people who can operate in changing environments, document clearly, and respond when systems do not behave the way the plan expected. Those are familiar demands for many veterans, which is why the transition into tech can be especially strong when the right support structure exists.",
    takeaways: [
      "Operational discipline maps well to cloud reliability and support work.",
      "Mission focus helps teams stay effective under ambiguity and pressure.",
      "Structured mentorship shortens the gap between certification and delivery confidence.",
    ],
    sections: [
      {
        title: "Execution habits transfer well",
        body:
          "Veterans are often comfortable with process, accountability, and clear communication. Those habits matter in cloud work where incidents, change control, and customer trust all depend on disciplined execution.",
      },
      {
        title: "Cloud teams need reliable teammates",
        body:
          "Strong technical teams are not built on technical skill alone. They also depend on people who can collaborate, learn quickly, and stay composed while solving problems. Veterans often enter the field with that baseline already formed.",
      },
      {
        title: "Support still matters",
        body:
          "The transition is easier when programs connect learning to applied work. Mentorship, project exposure, and a realistic view of hiring expectations make a major difference in converting interest into durable career momentum.",
      },
    ],
  },
  {
    slug: "ai-in-the-enterprise",
    category: "AI and ML",
    title: "Integrating AI Into Your Enterprise Cloud Strategy",
    date: "May 1, 2023",
    readTime: "6 min read",
    excerpt:
      "Enterprise AI works best when it is connected to real workflows, governed data access, and measurable operational outcomes.",
    intro:
      "Many organizations approach AI as a branding exercise first and an operating model second. The better approach is to identify one or two workflows where AI can reduce friction, then design the surrounding platform so the output is usable, reviewable, and safe.",
    takeaways: [
      "Start with workflow leverage, not abstract model ambition.",
      "Data access and review patterns matter as much as prompt quality.",
      "AI architecture should be treated as a platform concern, not a side experiment.",
    ],
    sections: [
      {
        title: "Pick a workflow with real pain",
        body:
          "AI initiatives gain traction when they remove repetition, speed up triage, or improve knowledge access for teams that already feel the bottleneck. A practical starting point beats a vague mandate to become AI-powered.",
      },
      {
        title: "Control the context",
        body:
          "Useful AI output depends on the quality and accessibility of the context it can use. Retrieval layers, permissions, document hygiene, and human review are essential parts of enterprise AI design, not optional add-ons.",
      },
      {
        title: "Measure operational improvement",
        body:
          "Enterprises should evaluate AI by improved throughput, clearer decisions, lower response times, or reduced manual steps. When the success criteria stay vague, the implementation usually stays vague too.",
      },
    ],
  },
  {
    slug: "devops-best-practices",
    category: "DevOps",
    title: "DevOps Best Practices for Cloud-Native Teams",
    date: "April 20, 2023",
    readTime: "5 min read",
    excerpt:
      "High-performing DevOps teams reduce friction through standardization, reliable feedback loops, and environments that behave predictably.",
    intro:
      "DevOps best practices are less about copying a tooling stack and more about creating a dependable way to move changes safely. Teams ship better when they can trust their environments, understand the blast radius of changes, and recover quickly when something slips through.",
    takeaways: [
      "Consistency across environments reduces deployment surprise.",
      "Fast feedback loops matter more than complex pipeline choreography.",
      "Observability and rollback planning are core delivery features.",
    ],
    sections: [
      {
        title: "Reduce environment drift",
        body:
          "When development, staging, and production behave differently, teams waste time relearning the system every release. Shared templates, containerization, and infrastructure as code help keep environments aligned enough to trust what tests are showing.",
      },
      {
        title: "Keep pipelines understandable",
        body:
          "Pipelines should give confidence, not mystery. Clear validation steps, visible artifacts, and concise deployment logic are easier to maintain than sprawling automation that nobody wants to touch six months later.",
      },
      {
        title: "Plan for recovery",
        body:
          "Every team talks about shipping faster. Fewer teams invest in recovering faster. Rollback paths, alerting, runbooks, and sane incident response patterns are what keep speed from turning into chaos under pressure.",
      },
    ],
  },
];

export const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ],
  resources: [
    { href: "/training", label: "Training Program" },
    { href: "/insights", label: "Insights" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" },
  ],
  socials: [
    { href: "https://linkedin.com/company/clouddogg", label: "LinkedIn", external: true },
    { href: "https://facebook.com/clouddogg", label: "Facebook", external: true },
  ],
};

export const legalLinks: LinkItem[] = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookie Policy" },
];

export const contactDetails = [
  {
    title: "Email",
    description: "Reach CloudDogg directly for project discussions, partnerships, or program questions.",
    lines: ["service@clouddogg.com"],
  },
  {
    title: "Phone",
    description: "Monday through Friday, 9am to 5pm Eastern.",
    lines: ["+1 (850) 376-5811"],
  },
  {
    title: "Location",
    description: "Mary Esther, Florida, serving clients remotely and across operational environments.",
    lines: ["1024 Freeport Ct", "Mary Esther, FL 32569"],
  },
];

export const capabilityHighlights: Highlight[] = [
  {
    title: "Cloud modernization",
    description: "Landing zones, automation, migrations, and operating-model cleanup for growing teams.",
  },
  {
    title: "AI systems",
    description: "Practical workflow automation, copilots, and data-aware delivery for real use cases.",
  },
  {
    title: "Training and enablement",
    description: "Mentorship and team development that close the gap between theory and execution.",
  },
];

export const homeProofPoints = [
  "Veteran-founded delivery with modern product and platform thinking",
  "Clean paths for services, training, and advisory work",
  "UX-first refresh modeled after the clearer conversion spine seen on Tablet Masters",
];

export const platformStack = [
  "AWS",
  "Azure",
  "GCP",
  "Terraform",
  "Kubernetes",
  "Docker",
  "Next.js",
  "TypeScript",
  "Python",
  "PostgreSQL",
  "LLM Workflows",
  "Observability",
];

export const industries: IconCard[] = [
  {
    icon: School,
    title: "Education",
    description: "Cloud workflows, internal tools, and rollout support for learning and training environments.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Operational systems shaped around compliance, reliability, and low-friction staff workflows.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business operations",
    description: "Platforms and automation that support client-facing teams, internal delivery, and reporting needs.",
  },
];

export const founderQuote =
  "Excellence in operations is not just about technology. It is about building systems teams can trust when the work is real and the margin for error is small.";
