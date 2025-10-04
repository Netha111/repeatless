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
    slug: "linkedin-post-generator-for-edutech",
    title: "LinkedIn Post Generator for EduTech",
    category: "News",
    date: "2025-01-26",
    excerpt:
      "How we built an AI-powered LinkedIn post generator that boosted engagement by 85%.",
    image: "https://res.cloudinary.com/demo/image/upload/v1690000000/blogs/linkedin.png",
    hero: {
      title: "LinkedIn Post Generator for EduTech",
      description:
        "EduTech Solutions struggled with consistent, engaging LinkedIn content. We built an AI-powered generator that streamlined creation and improved performance.",
      meta: { solution: "EDUTECH SOLUTION", stat: "85% INCREASE IN ENGAGEMENT" },
      image: "https://res.cloudinary.com/demo/image/upload/v1690000000/blogs/linkedin-hero.png",
    },
    body: {
      sections: [
        {
          title: "Challenge",
          text:
            "Manual, inconsistent post creation slowed teams and diluted brand voice across channels, making social engagement unpredictable.",
        },
        {
          title: "Solution",
          text: [
            "AI workflow drafts, reviews, and schedules posts to match brand tone.",
            "Analytics loops learn from engagement signals to improve suggestions continuously.",
            "Integration with scheduling tools to automate posting across multiple platforms.",
          ],
          image: "https://res.cloudinary.com/demo/image/upload/v1690000000/blogs/linkedin-solution.png",
        },
        {
          title: "Key Features",
          iconList: [
            "Brand-tuned content generation",
            "A/B testing for posts",
            "Approval workflow for compliance",
            "Auto-scheduling across platforms",
            "Analytics-driven learning",
            "Customizable templates",
          ],
        },
        {
          text:
            "Marketers can preview, modify, and schedule posts with confidence using a polished UI.",
          image: "https://res.cloudinary.com/demo/image/upload/v1690000000/blogs/linkedin-ui.png",
        },
        {
          title: "Impact",
          bullets: [
            "85% engagement increase",
            "50% faster post creation",
            "Consistent brand voice",
            "Reusable workflow templates",
            "Improved team efficiency",
          ],
        },
      ],
    },
  },

  {
    slug: "ai-powered-healthcare-dashboard",
    title: "AI-Powered Healthcare Dashboard",
    category: "Case Study",
    date: "2025-02-15",
    excerpt:
      "AI analytics reduced patient wait times by 40% and improved hospital efficiency.",
    image: "https://res.cloudinary.com/demo/image/upload/v1690000000/blogs/healthcare.png",
    hero: {
      title: "AI-Powered Healthcare Dashboard",
      description:
        "Hospitals needed faster patient insights and predictive analytics. We delivered an AI dashboard that transformed hospital operations.",
      meta: { solution: "HEALTHCARE SOLUTION", stat: "40% REDUCTION IN WAIT TIME" },
      image: "https://res.cloudinary.com/demo/image/upload/v1690000000/blogs/healthcare-hero.png",
    },
    body: {
      sections: [
        {
          title: "Challenge",
          text:
            "Hospitals struggled with slow triage and inefficient resource allocation, impacting patient experience and operational costs.",
        },
        {
          title: "Solution",
          text: [
            "AI predicts patient inflow and optimizes staff schedules.",
            "Interactive dashboards provide real-time monitoring of patient load.",
            "Integration with hospital management systems for seamless operations.",
          ],
          image: "https://res.cloudinary.com/demo/image/upload/v1690000000/blogs/healthcare-solution.png",
        },
        {
          title: "Why it Works",
          iconList: [
            "Real-time analytics",
            "Predictive staffing",
            "Automated alerts",
            "Customizable dashboards",
            "Improved patient prioritization",
          ],
        },
        {
          text:
            "Medical staff make faster, data-driven decisions, improving care quality and efficiency.",
          image: "https://res.cloudinary.com/demo/image/upload/v1690000000/blogs/healthcare-body.png",
        },
        {
          title: "Impact",
          bullets: [
            "40% reduction in patient wait times",
            "30% increased staff efficiency",
            "Higher patient satisfaction",
            "Streamlined operations",
            "Reduced operational costs",
          ],
        },
      ],
    },
  },

  {
    slug: "ecommerce-visual-search-engine",
    title: "E-commerce Visual Search Engine",
    category: "Tech",
    date: "2025-03-02",
    excerpt:
      "Implementing visual search led to a 60% higher product discovery rate for an online retailer.",
    image: "https://res.cloudinary.com/demo/image/upload/v1690000000/blogs/visual-search.png",
    hero: {
      title: "E-commerce Visual Search Engine",
      description:
        "Text-based searches limited product discovery. Our AI-powered visual search allows users to find products via images quickly.",
      meta: { solution: "E-COMMERCE SOLUTION", stat: "60% INCREASE IN DISCOVERY" },
      image: "https://res.cloudinary.com/demo/image/upload/v1690000000/blogs/visual-search-hero.png",
    },
    body: {
      sections: [
        {
          title: "Challenge",
          text:
            "Shoppers struggled with finding products through text search, resulting in abandoned carts and low engagement.",
        },
        {
          title: "Solution",
          text: [
            "Upload an image to find matching products instantly.",
            "Machine learning continuously improves recommendations.",
            "Integration with product catalog and inventory systems.",
          ],
          image: "https://res.cloudinary.com/demo/image/upload/v1690000000/blogs/visual-search-solution.png",
        },
        {
          title: "Why it Works",
          iconList: [
            "Accurate image recognition",
            "Smart recommendations",
            "Enhanced UX",
            "Quick catalog integration",
            "Mobile-friendly interface",
          ],
        },
        {
          text:
            "Shoppers can find exactly what they need faster, improving conversion and satisfaction.",
          image: "https://res.cloudinary.com/demo/image/upload/v1690000000/blogs/visual-search-body.png",
        },
        {
          title: "Impact",
          bullets: [
            "60% increase in product discovery",
            "35% increase in conversion",
            "Higher user engagement",
            "Reduced bounce rate",
            "Improved customer satisfaction",
          ],
        },
      ],
    },
  },

  {
    slug: "smart-fitness-app-analytics",
    title: "Smart Fitness App with Analytics",
    category: "Innovation",
    date: "2025-04-10",
    excerpt:
      "AI-powered fitness app personalizes workouts and nutrition for over 1000 active users.",
    image: "https://res.cloudinary.com/demo/image/upload/v1690000000/blogs/fitness.png",
    hero: {
      title: "Smart Fitness App with Analytics",
      description:
        "Fitness enthusiasts need personalized guidance. Our AI-powered app provides tailored workouts, nutrition, and progress tracking.",
      meta: { solution: "FITNESS SOLUTION", stat: "1000+ ACTIVE USERS" },
      image: "https://res.cloudinary.com/demo/image/upload/v1690000000/blogs/fitness-hero.png",
    },
    body: {
      sections: [
        {
          title: "Challenge",
          text:
            "Generic fitness apps lacked personalization, leading to low engagement and ineffective workouts.",
        },
        {
          title: "Solution",
          text: [
            "AI-driven workout recommendations adapt based on user progress.",
            "Nutrition suggestions tailored to individual needs.",
            "Analytics dashboards track progress and habits.",
            "Community features enhance motivation.",
          ],
          image: "https://res.cloudinary.com/demo/image/upload/v1690000000/blogs/fitness-solution.png",
        },
        {
          title: "Key Features",
          iconList: [
            "Personalized workouts",
            "Nutrition tracking",
            "Performance analytics",
            "Community challenges",
            "Progress visualization",
          ],
        },
        {
          text:
            "Users receive actionable insights, improving adherence and motivation.",
          image: "https://res.cloudinary.com/demo/image/upload/v1690000000/blogs/fitness-body.png",
        },
        {
          title: "Impact",
          bullets: [
            "Better workout adherence",
            "Improved nutrition habits",
            "Increased engagement",
            "Positive community growth",
            "Data-driven performance tracking",
          ],
        },
      ],
    },
  },

  {
    slug: "instagram-dm-comments-automation",
    title: "Instagram DM & Comments Automation",
    category: "Case Study",
    date: "2025-10-03",
    excerpt:
      "How an AI agent turned Instagram comments & DMs into 24/7 sales conversations and lifted qualified leads by 41%.",
    image: "https://res.cloudinary.com/ds10dzkpj/image/upload/fl_preserve_transparency/v1759485870/repeatless/instagram_automation_n8n.jpg",
    hero: {
      title: "Instagram DM & Comments Automation",
      description:
        "We deployed a brand-tuned AI agent that replies to comments, moves conversations into DMs, answers product questions, and nudges towards purchase—just like a human, only faster.",
      meta: { solution: "REPEATLESS AUTOMATION", stat: "62% MORE REPLIES FROM COMMENTS" },
      image: "https://res.cloudinary.com/ds10dzkpj/image/upload/fl_preserve_transparency/v1759485870/repeatless/instagram_automation_n8n.jpg"
    },
    body: {
      sections: [
        {
          title: "Challenge",
          text:
            "Comments and DMs were piling up. Response times varied by team member and time of day, opportunities slipped, and FAQs consumed hours. The brand needed consistent, friendly replies that could qualify intent, share links/coupons, and keep conversations alive—without hiring a night shift."
        },
        {
          title: "Solution",
          text: [
            "An AI agent that watches post comments and Stories replies, auto-DMs interested users, and continues the chat with product-aware answers.",
            "Flows for coupons, size/stock checks, order-status, and lead capture; seamless human handoff for edge cases.",
            "N8N orchestration with guardrails: sentiment & intent detection, rate-limits, fallback templates, and CRM/Sheet sync.",
            "Analytics loop to learn which prompts, hooks, and CTAs convert best; scheduled A/B rotations on captions and replies."
          ],
          stats: [
            { value: "90 sec", label: "Median first reply after automation", highlight: true },
            { value: "24/7", label: "Always-on coverage" },
            { value: "70%", label: "Conversations resolved by agent" },
            { value: "41%", label: "Lift in qualified leads captured" },
            { value: "3.2×", label: "More replies from comment triggers" },
            { value: "12%", label: "Increase in AOV from DM upsells" },
            { value: "1,800+/mo", label: "Inbound threads handled" },
            { value: "99.2%", label: "Automation uptime (30-day)" }
          ]
        },
        {
          title: "Why it works",
          iconList: [
            "Brand-tuned generation",
            "Intent & sentiment routing",
            "Human handoff in 1 tap",
            "Auto-scheduling follow-ups",
            "CRM & Sheet logging",
            "Compliance + safety filters"
          ]
        },
        {
          text:
            "A clean operator UI shows live threads, confidence scores, and quick-swap reply templates. Marketers can preview, approve, or pause flows per campaign and track conversions from comment → DM → checkout.",
          image: "/images/ig-automation/ui.png"
        },
        {
          title: "Impact",
          bullets: [
            "62% more replies initiated from comments",
            "50% faster resolution vs. manual handling",
            "41% increase in qualified lead capture",
            "70% agent-only resolution; humans focus on high-value cases"
          ],
          text:
            "The client now treats Instagram as a reliable sales channel. The AI handles volume and repetition; the team jumps in only where nuance or negotiation is needed."
        }
      ]
    }
  },

  {
    slug: "virtual-reality-education-platform",
    title: "Virtual Reality Education Platform",
    category: "EdTech",
    date: "2025-05-05",
    excerpt:
      "VR platform transforms classroom learning with immersive 3D lessons and interactive labs.",
    image: "https://res.cloudinary.com/demo/image/upload/v1690000000/blogs/vr-education.png",
    hero: {
      title: "Virtual Reality Education Platform",
      description:
        "Traditional classrooms lacked engagement. Our VR platform provides immersive 3D lessons and virtual labs for hands-on learning.",
      meta: { solution: "EDTECH SOLUTION", stat: "IMMERSIVE 3D LEARNING" },
      image: "https://res.cloudinary.com/demo/image/upload/v1690000000/blogs/vr-hero.png",
    },
    body: {
      sections: [
        {
          title: "Challenge",
          text:
            "Students were disengaged in lectures and struggled to understand complex concepts without hands-on experience.",
        },
        {
          title: "Solution",
          text: [
            "Interactive 3D lessons for immersive learning.",
            "Virtual labs for practical experiments.",
            "Gamified progress tracking to motivate students.",
            "Teacher dashboards for progress monitoring.",
          ],
          image: "https://res.cloudinary.com/demo/image/upload/v1690000000/blogs/vr-solution.png",
        },
        {
          title: "Why it Works",
          iconList: [
            "Immersive learning experience",
            "Hands-on virtual labs",
            "Gamified engagement",
            "Remote accessibility",
            "Analytics for teachers",
          ],
        },
        {
          text:
            "Students actively participate and retain knowledge better through VR and gamified lessons.",
          image: "https://res.cloudinary.com/demo/image/upload/v1690000000/blogs/vr-body.png",
        },
        {
          title: "Impact",
          bullets: [
            "Higher student engagement",
            "Better retention of concepts",
            "Interactive learning environment",
            "Positive feedback from educators",
            "Scalable across multiple classrooms",
          ],
        },
      ],
    },
  },
];


export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug);
}


