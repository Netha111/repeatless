export type BlogMeta = {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO or formatted string
  excerpt: string;
  image: string;
};

export type BlogHeroData = {
  title: string;
  description: string;
  meta: { solution: string; stat: string };
  image: string;
};

export type BlogBodyData = {
  sections: Array<{
    title?: string;
    text?: string | string[];
    stats?: Array<{ value: string; label: string; highlight?: boolean }>;
    iconList?: string[];
    image?: string;
    bullets?: string[];
  }>;
};

export type Blog = BlogMeta & {
  hero: BlogHeroData;
  body: BlogBodyData;
};

export const blogs: Blog[] = [
   {
  slug: "instagram-dm-comments-automation",
  title: "Instagram DM & Comments Automation (AI Agent + n8n)",
  category: "Case Study",
  date: "2025-10-04",
  excerpt:
    "AI agent + n8n turned Instagram comments & DMs into 24/7 sales chats—62% more replies and 41% more qualified leads.",
  image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759665534/repeatless/insta_dm_hpng0l.png",
  hero: {
    title: "Instagram DM & Comments Automation",
    description:
      "Brands needed faster, on-brand Instagram conversations. We delivered an AI agent that replies in comments, moves to DM, and converts interest into sales—compliantly and at scale.",
    meta: { solution: "SOCIAL COMMERCE SOLUTION", stat: "62% MORE REPLIES FROM COMMENTS" },
    image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759665534/repeatless/insta_dm_hpng0l.png",
  },
  body: {
    sections: [
      {
        title: "Challenge",
        text:
          "High comment and DM volume led to slow replies, inconsistent tone, and missed sales windows—especially nights and weekends. FAQs (pricing, sizes, delivery, order status) drained team time and reduced conversion.",
      },
      {
        title: "Solution",
        text: [
          "AI detects buyer intent in comments and Story replies, then opens or continues DMs with brand-tuned responses.",
          "Handles FAQs, shares links/coupons, captures leads with consent, and escalates edge cases to a human.",
          "Built with n8n + Meta Graph API, including rate-limit guards, sentiment/intent routing, and safety fallbacks.",
        ],
        image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759665534/repeatless/insta_dm_hpng0l.png",
      },
      {
        title: "Why it Works",
        iconList: [
          "Brand-tuned generation",
          "Intent & sentiment routing",
          "One-tap human handoff",
          "Auto follow-up & reminders",
          "CRM/Sheet logging & UTM tracking",
        ],
      },
      {
        text:
          "Operators see live threads, confidence scores, and templates. Marketing can pause/approve flows per campaign and track conversions from comment → DM → checkout.",
        image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759665534/repeatless/insta_dm_hpng0l.png",
      },
      {
        title: "Impact",
        bullets: [
          "62% increase in replies initiated from comments",
          "41% lift in qualified leads captured",
          "50% faster resolution time",
          "24/7 coverage with consistent brand voice",
          "Lower support load; team focuses on high-value cases",
        ],
      },
    ],
  },
},
{
  slug: "linkedin-post-generator-for-b2b",
  title: "LinkedIn Post Generator & Daily Auto‑Posting (B2B)",
  category: "Case Study",
  date: "2025-10-04",
  excerpt:
    "AI discovers proven LinkedIn ideas, rewrites them in your voice, posts daily—driving inbound leads and new client acquisition without manual work.",
  image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759665812/repeatless/linkedin_q4ttbl.png",
  hero: {
    title: "LinkedIn Post Generator for B2B Growth",
    description:
      "We built an AI system that analyzes top public posts in your niche, rewrites them in your tone with fresh angles, designs an image, and auto‑posts to LinkedIn—keeping you consistently visible to prospects and winning new clients.",
    meta: { solution: "B2B CONTENT SOLUTION", stat: "Boost in Inbound Leads" },
    image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759665812/repeatless/linkedin_q4ttbl.png"
  },
  body: {
    sections: [
      {
        title: "Challenge",
        text:
          "Founders and marketing teams knew what resonated but couldn't post daily. Idea mining was slow, approvals slipped, tone drifted, and pipeline suffered from fewer profile visits, DMs, and demo requests."
      },
      {
        title: "Solution",
        text: [
          "Discovery: Monitor public, high‑engagement posts from selected creators and hashtags; filter by niche, topic, and recency.",
          "Suitability Check: Rule engine screens for relevance, originality threshold, and brand policies (no competitors' claims, no sensitive topics).",
          "Generation: LLM rewrites with your voice guide (tone, vocabulary, CTAs) and adds unique insights to avoid duplication.",
          "Visuals: Automatic on‑brand image generation (headline cards/diagrams) with your colors/logo.",
          "Scheduling: Queue approved posts for daily publishing via LinkedIn‑approved scheduler/API with rate‑limit guards.",
          "Lead Capture: Strong CTAs to book calls/DM, UTM‑tagged links to landing pages, and auto‑logging of inbound interest.",
          "Learning Loop: Track engagement and downstream conversions (profile visits, connection accepts, booked calls); promote winning angles; de‑prioritize underperformers."
        ],
        image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759665812/repeatless/linkedin_q4ttbl.png"
      },
      {
        title: "Why it Works",
        iconList: [
          "Finds proven ideas in your niche",
          "Brand voice & policy guardrails",
          "Fresh angles—no copy‑paste",
          "Auto images with your brand kit",
          "Hands‑free daily scheduling",
          "Lead‑focused CTAs & tracking"
        ]
      },
      {
        text:
          "Operators see a simple queue with previews, tone checks, and policy flags. You can approve, edit, or let the agent auto‑publish on a set cadence (e.g., 1 post/day at 9:30 AM).",
        image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759665812/repeatless/linkedin_q4ttbl.png"
      },
      {
        title: "Impact",
        bullets: [
          "Consistent daily posting without manual effort",
          "8–10 hours/week saved on ideation and formatting",
          "Increase in qualified inbound leads & discovery calls",
          "On‑brand, compliant posts aligned to your niche",
          "Evergreen queue maintained 2–3 weeks ahead"
        ]
      }
    ]
  }
},

{
  slug: "newsletter-automation-leadgen",
  title: "Newsletter Spam Monitoring & Lead Generation Automation",
  category: "Case Study",
  date: "2025-10-05",
  excerpt:
    "We turned newsletter subscriptions into a lead engine by detecting senders landing in spam and triggering tailored outreach—fueling a marketing agency's pipeline.",
  image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759666185/repeatless/seannewsletter_g8mzip.png",
  hero: {
    title: "Newsletter Automation for Agency Lead Generation",
    description:
      "A marketing agency needed a steady stream of qualified leads. We built an automation that subscribes to niche newsletters across managed inboxes, detects senders landing in spam or failing verification, and launches contextual outreach to offer deliverability & email marketing services.",
    meta: { solution: "LEAD GEN & DELIVERABILITY", stat: "Spam-to-Lead Conversion Engine" },
    image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759666185/repeatless/seannewsletter_g8mzip.png"
  },
  body: {
    sections: [
      {
        title: "Challenge",
        text:
          "The agency relied on cold lists with low intent. Many potential clients were already signaling deliverability issues—double‑opt‑in loops, missing confirmation emails, or messages routed to spam—but these signals were scattered across inboxes and never actioned at scale."
      },
      {
        title: "Solution",
        text: [
          "Subscription Pool: Use managed inboxes and niche keywords to subscribe to relevant newsletters across industries.",
          "Signal Detection: Monitor inbox events (INBOX/SPAM/Promotions), double‑opt‑in requests, bounces, and sender authentication hints.",
          "Classification: Tag each sender by risk (spam‑routed, missing DKIM/SPF, slow confirmation), intent, and niche fit.",
          "Outreach Trigger: When a sender trips a deliverability issue, fire a tailored outreach sequence offering remediation and email marketing help.",
          "CRM Sync: De‑duplicate domains, enrich contacts, and track outcomes from first touch → booked call.",
          "Compliance: Respect unsubscribes, frequency caps, and lawful bases for contact; store audit logs."
        ],
        image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759666185/repeatless/seannewsletter_g8mzip.png"
      },
      {
        title: "Why it Works",
        iconList: [
          "Prospects with active pain (spam routing)",
          "Real‑time deliverability intelligence",
          "Contextual outreach with proof points",
          "Multi‑inbox monitoring at scale",
          "De‑dup + enrichment for clean CRM",
          "Privacy‑first and compliant"
        ]
      },
      {
        text:
          "Operators see a dashboard of newsletter domains with status (OK/Spam/No‑Mail/Double‑Opt‑In), niche tags, and last events. One click reveals suggested outreach copy and a remediation checklist; wins feed a case‑study queue automatically.",
        image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759666185/repeatless/seannewsletter_g8mzip.png"
      },
      {
        title: "Impact",
        bullets: [
          "Steady stream of high‑intent leads from real deliverability issues",
          "Reduced time spent hunting prospects; focus shifts to consults",
          "Cleaner CRM with de‑duped domains and tracked outcomes",
          "Faster cycles from signal → outreach → booked calls",
          "Reusable playbook for new niches and geographies"
        ]
      }
    ]
  }
},
{
  slug: "whatsapp-broadcast-automation-books",
  title: "WhatsApp Broadcast Automation for New Book Launches",
  category: "Case Study",
  date: "2025-10-05",
  excerpt:
    "When a publisher releases a new book, our automation broadcasts rich WhatsApp messages to opted‑in readers—driving immediate awareness and sales at scale.",
  image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759666496/repeatless/publications_dsrg9k.png",
  hero: {
    title: "WhatsApp Broadcast Automation for Publishers",
    description:
      "A book publisher needed instant reach to thousands of readers at launch. We built a compliant WhatsApp broadcast system that detects new titles, personalizes messages, and sends at scale with tracking and opt‑outs—no manual steps.",
    meta: { solution: "WHATSAPP COMMERCE", stat: "Launch‑Day Reach in Minutes" },
    image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759666496/repeatless/publications_dsrg9k.png"
  },
  body: {
    sections: [
      {
        title: "Challenge",
        text:
          "Announcements on email and social weren’t reaching readers fast enough. Manual WhatsApp groups were capped, error‑prone, and risky for compliance. The publisher needed a reliable, policy‑safe way to notify thousands the moment a new book went live."
      },
      {
        title: "Solution",
        text: [
          "Trigger: Detect new book listings from the CMS/Sheet; enrich with title, author, cover URL, and buy link.",
          "Template Messaging: Use pre‑approved WhatsApp templates with variables (name, title, discount, link) to ensure high deliverability.",
          "Segmentation: Send to opted‑in readers by genre, language, and purchase history; throttle by provider limits.",
          "Personalization: Add first‑name, dynamic offers, and city‑based store info; attach cover image as media.",
          "Compliance: Manage consent and opt‑out keywords (STOP), handle fails/retries, and maintain an auditable log.",
          "Analytics: Track deliveries, reads, clicks (UTM), and conversions; auto‑compile a launch report."
        ],
        image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759666496/repeatless/publications_dsrg9k.png"
      },
      {
        title: "Why it Works",
        iconList: [
          "Immediate, high‑open channel",
          "Policy‑compliant templates & opt‑outs",
          "Precise audience segmentation",
          "Personalized rich media messages",
          "Automated triggers from your catalog",
          "End‑to‑end tracking & reporting"
        ]
      },
      {
        text:
          "Operators get a simple launch dashboard: preview the broadcast, select segments, schedule or send now, and watch real‑time delivery/click stats. The system auto‑retries soft fails and logs unsubscribes to keep the list healthy.",
        image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759666496/repeatless/publications_dsrg9k.png"
      },
      {
        title: "Impact",
        bullets: [
          "Instant launch‑day reach across thousands of opted‑in readers",
          "Hands‑free publishing → messaging flow with zero copy‑paste",
          "Higher CTR from personalized, media‑rich notifications",
          "Clean compliance: consent capture, opt‑outs, and audit logs",
          "Actionable insights to refine offers, timing, and segments"
        ]
      }
    ]
  }
},
{
  slug: "document-consolidation-automation",
  title: "Document Consolidation & Auto‑Foldering Automation (Consultancy)",
  category: "Case Study",
  date: "2025-10-05",
  excerpt:
    "For consultancy teams: one form generates all client documents, auto‑names/files them in Google Drive, and supports image uploads—saving hours every week.",
  image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759666970/repeatless/consultation_niszxz.png",
  hero: {
    title: "Document Consolidation & Auto‑Foldering for Consultancy Clients",
    description:
      "Consultancy firms were manually filling multiple templates per client and filing them in the right folders. We delivered a single smart form that captures client data (plus images), populates every template, auto‑names files, and saves everything into a client‑specific Google Drive structure.",
    meta: { solution: "OPERATIONS AUTOMATION", stat: "Up to 75% Time Saved" },
    image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759666970/repeatless/consultation_niszxz.png"
  },
  body: {
    sections: [
      {
        title: "Challenge",
        text:
          "Consultancy teams handled different consolidation packs (engagement letters, KYC, scopes, approvals) across many clients. Manual data entry into multiple templates led to version mix‑ups, wrong file names, scattered images, and misplaced folders—hurting speed and compliance."
      },
      {
        title: "Solution",
        text: [
          "Unified Intake (Consultancy‑Ready): A single form where teammates choose the consolidation pack and enter core client data.",
          "Data Fields Captured: Client Name, Engagement ID, Service Line, Primary Contact, Email/Phone, Billing Address, Project Address, Consultant Owner, Deadlines/Milestones, Fee & Currency, Tax IDs/GST, Scope Notes, KYC fields (PAN/ID types), Signatories, Custom Clauses.",
          "Template Merge: Auto‑populate all approved templates (Engagement Letter, KYC Form, NDA, Scope of Work, Fee Schedule, Approval Sheet) with the captured fields, placed exactly per template positions.",
          "Image & File Uploads: Upload client logos, ID proofs, site photos, and signatures from the same form. Files are stored under Google Drive → Client Folder → /assets and linked into documents where required (e.g., logo on letterhead, ID proof in KYC).",
          "Smart Naming & Auto‑Foldering: Use a strict schema (ClientName_ConsolidationType_Date_v1). Create the client root folder if missing and place documents in subfolders (\"01_Intake\", \"02_Agreements\", \"03_KYC\", \"04_Approvals\", \"assets\").",
          "Drive Sync & Permissions: Save to Google Drive with correct access for the consultancy team; log creator, timestamp, and version.",
          "Status, E‑Sign & QC: Dashboard shows completion status, missing fields, and e‑signature progress; sends e‑sign requests automatically and flags exceptions for review."
        ],
        image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759666970/repeatless/consultation_niszxz.png"
      },
      {
        title: "Why it Works",
        iconList: [
          "Built for consultancy workflows",
          "Single intake → many documents",
          "Exact field placement in templates",
          "Zero manual naming/filing",
          "Auto‑permissions & audit trail",
          "Centralized images & attachments"
        ]
      },
      {
        text:
          "A coordinator opens the form, selects the consolidation pack (e.g., \"Standard Consultancy Onboarding\"), fills client details, and uploads any images (logo, ID proof, signatures). The system generates Docs/PDFs, creates the client folder, files each document in the correct subfolder, and posts a link summary to the team.",
        image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759666970/repeatless/consultation_niszxz.png"
      },
      {
        title: "Impact",
        bullets: [
          "75% time reduction preparing and filing consultancy documents",
          "Eliminated naming errors and missing images/attachments",
          "Faster client onboarding with consistent, compliant packs",
          "Live status dashboard for coordinators and partners",
          "Repeatable playbook for new consolidation types and geographies"
        ]
      }
    ]
  }
},
{
  slug: "whatsapp-local-service-connector-us",
  title: "WhatsApp Local Service Connector (US County)",
  category: "Case Study",
  date: "2025-10-05",
  excerpt:
    "An AI+automation workflow that connects residents to vetted plumbers, electricians, and AC techs via WhatsApp—routing in seconds and boosting provider subscriptions.",
  image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759668522/repeatless/serviceprovider_srwmjd.png",
  hero: {
    title: "WhatsApp Local Service Connector",
    description:
      "In one US county, residents struggled to reach reliable home‑service providers quickly. We built a WhatsApp agent that understands the request, checks real‑time provider availability, and connects both parties instantly—no call centers, no waiting.",
    meta: { solution: "LOCAL SERVICES AUTOMATION", stat: "Instant Request → Provider Match" },
    image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759668522/repeatless/serviceprovider_srwmjd.png"
  },
  body: {
    sections: [
      {
        title: "Challenge",
        text:
          "Discovery and coordination were slow. Customers bounced between directories and unanswered calls, while providers missed jobs outside business hours. The client needed a simple, always‑on way to match residents with the right on‑duty professional."
      },
      {
        title: "Solution",
        text: [
          "WhatsApp Agent: Residents message a keyword like ‘plumber needed’. The agent collects location, urgency, and brief issue description.",
          "Smart Matching: System checks a provider database (skills, coverage area, SLA) and current status (active/idle/do‑not‑disturb).",
          "Instant Connect: Shares request to the best‑fit, currently active provider; once accepted, both parties receive each other’s contact details for direct follow‑up.",
          "Fallback & Escalation: If no active provider, queue the request, ping next‑best, or escalate to a manual dispatcher.",
          "Provider Portal: Service pros manage availability, service categories, pricing notes, and subscription billing (monthly).",
          "Logs & Metrics: Track response times, acceptance rates, completion notes, and customer feedback for quality control."
        ],
        image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759668522/repeatless/serviceprovider_srwmjd.png"
      },
      {
        title: "Why it Works",
        iconList: [
          "Frictionless WhatsApp intake",
          "Real‑time availability matching",
          "Direct customer↔provider connection",
          "Fail‑safes for off‑hours coverage",
          "Quality tracking & feedback loop",
          "Recurring subscriptions for providers"
        ]
      },
      {
        text:
          "Operations staff can view a live queue, override matches, or pause categories during storms/peaks. Providers toggle ‘Active’ in one tap; the agent respects do‑not‑disturb windows and rotates jobs fairly across subscribers.",
        image: "https://res.cloudinary.com/ds10dzkpj/image/upload/v1759668522/repeatless/serviceprovider_srwmjd.png"
      },
      {
        title: "Impact",
        bullets: [
          "Requests routed to an on‑duty pro within seconds",
          "Higher job acceptance and faster first response",
          "More completed jobs and happier residents",
          "Predictable recurring revenue via provider subscriptions",
          "Reduced coordinator workload with clear audit trails"
        ]
      }
    ]
  }
}
];


export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug);
}

