import type {
  Education,
  Profile,
  PersonalProjects,
  WorkExperience,
  Project,
} from "@/types";
import { FaGithub } from "react-icons/fa";

export const profile: Profile = {
  name: "Ruben Hedström",
  title: "Software Engineer",
  summary:
    "Software engineer with an academic background in physics and engineering, working across fintech clearing systems in Japan. Primarily backend focused, but flexible and comfortable working full stack as well. Frequently praised by colleagues and managers for a quick and efficient working style.",
  location: "Tokyo, Japan",
  languages: ["Swedish", "English", "Japanese (JLPT N1)"],
  email: "ruben.hedstrom@hotmail.com",
  phone: "090-7712-9917",
  birthdate: "1995-07-16",
};

export const workExperience: WorkExperience[] = [
  {
    company: "Aurora Solutions",
    role: "Software Engineer / Senior Consultant in Fintech",
    period: "2025/08 - present",
    description:
      "Software engineering consultant working on fintech clearing and trading systems for financial institutions in Japan.",
    projects: [
      {
        title: "Platform upgrade project at Japanese bank",
        period: "2026/08 - present",
        description:
          "Assessing the impact of a major version upgrade spanning two major versions to a third-party trading platform. Reviewing release notes and identifying which changes are user-impacting versus cosmetic, flagging the former with supporting evidence.\n\nModernizing legacy custom code to use the platform's supported API, replacing deprecated direct database query patterns embedded as raw strings, including associated test coverage.",
        skill_tags: ["Java", "API", "Legacy Modernization", "Testing"],
      },
      {
        title: "Clearing system for standardized financial instruments",
        period: "2026/05 - 2026/08",
        description:
          "Contributed to designing the core clearing system, including integration with the client's legacy systems and Kafka based event driven messaging.\n\nBuilt an automated market data ingestion pipeline using SFTP based pulls from an external data provider, with idempotent processing to avoid duplicate reads and safe cleanup of fully processed remote files.\n\nDesigned the database schema for storing market data, built for scheduled ingestion and structured to extend to additional product types in the future.\n\nInitial scope covered a specific standardized product class, with the system designed for extension to further product types.",
        skill_tags: [
          "Java",
          "Spring",
          "Kafka",
          "SFTP",
          "Database Design",
          "Event-Driven Architecture",
        ],
      },
      {
        title: "Foreign clearing house project",
        period: "2025/08 - 2026/05",
        description:
          "Built the pilot and foundational architecture for a new clearing and finance system intended to progressively replace the client's current platform.\n\nDesigned and implemented backend services using Java and Spring, structured as a microservices architecture.\n\nBuilt edge adapters to integrate with the client's legacy systems, external data sources, and financial exchanges.\n\nUsed Kafka for event driven communication between services.\n\nContainerized services with Docker and Kubernetes for deployment.\n\nDelivered full technical documentation and handed the system over to the client's internal team.",
        skill_tags: [
          "Java",
          "Spring",
          "Kafka",
          "Microservices",
          "Docker",
          "Kubernetes",
        ],
      },
    ],
  },

  {
    company: "Gadelius Holding",
    role: "System Engineer",
    period: "2023/08 - 2025/08",
    description:
      "Worked as a system engineer developing and customizing business systems, with a focus on NetSuite integrations, web development, and automation. Worked across both frontend and backend development for a range of internal and client-facing solutions.",
    projects: [
      {
        title: "Shopify - NetSuite API bridge",
        description:
          "Built an API bridge for sending orders from Shopify to NetSuite. Developed the frontend using JavaScript and React in the Shopify Admin Extension framework, with a Python backend running on AWS Lambda.",
        skill_tags: [
          "JavaScript",
          "React",
          "Python",
          "AWS Lambda",
          "Shopify",
          "NetSuite",
          "SuiteQL",
        ],
      },
      {
        title: "NetSuite customization",
        description:
          "Developed custom NetSuite functionality using SuiteScript, including Portlets, Suitelets, Restlets, and User Event Scripts. Built functionality using Saved Searches in combination with the above.",
        skill_tags: ["JavaScript", "SuiteScript", "NetSuite"],
      },
      {
        title: "SPFx - NetSuite connection",
        description:
          "Built a SharePoint-based interface for non-NetSuite users to send information such as orders to NetSuite. Developed the frontend using HTML, CSS, and TypeScript with SPFx, and implemented Suitelets in NetSuite to handle SQL requests, order creation, and order retrieval.",
        skill_tags: [
          "HTML",
          "CSS",
          "TypeScript",
          "SharePoint",
          "SPFx",
          "NetSuite",
          "SuiteScript",
        ],
      },
      {
        title: "Static company website",
        description:
          "Developed a static company website using HTML, CSS, and JavaScript with Tailwind, alongside components such as Slick.",
        skill_tags: [
          "HTML",
          "CSS",
          "JavaScript",
          "Tailwind",
          "Bootstrap",
          "Slick",
        ],
      },
    ],
  },
];

export const personalProjects: PersonalProjects = {
  description:
    "A selection of personal projects I've built to explore technologies and solve problems I encounter.",
  projects: [
    {
      title: "UR Apartment Tracker",
      description:
        "Monitors UR apartment listings through the UR API and automatically notifies me when new listings matching my criteria become available. A scheduled Cloudflare Worker runs every two minutes, compares listings against the previous state, and sends notifications through email and ntfy.",
      skill_tags: [
        "TypeScript",
        "Cloudflare Workers",
        "Cloudflare KV",
        "Cron",
        "REST API",
        "Resend",
        "ntfy",
      ],
      links: [
        {
          name: "GitHub",
          path: "https://github.com/rubenhed/ur-tracker-api",
          icon: FaGithub,
        },
      ],
    },
  ],
};

export const education: Education[] = [
  {
    institution: "Le Wagon",
    degree: "Web Development",
    period: "2024/09 - 2025/03",
    description:
      "Intensive web development bootcamp focused on building full-stack web applications.",
    skill_tags: ["Ruby", "Rails", "HTML", "CSS", "JavaScript"],
  },
  {
    institution: "Ehime University",
    degree: "Exchange Programme",
    period: "2022/04 - 2022/09",
    description:
      "Exchange programme completed at Ehime University as part of my studies at Uppsala University.",
    skill_tags: ["Mathematics", "Japanese"],
  },
  {
    institution: "Uppsala University, Sweden",
    degree: "Master's degree in Engineering Physics",
    period: "2018/08 - 2023/06",
    description:
      "Five-year engineering physics master programme combining advanced mathematics, physics, and computational methods.",
    skill_tags: ["Python", "TensorFlow", "PyTorch", "Mathematics", "Physics"],
  },
];

const allSkillSources: (Project | Education)[] = [
  ...personalProjects.projects,
  ...workExperience.flatMap((experience) => experience.projects),
  ...education,
];

export const skillReferences = new Map<string, Project | Education>();

for (const source of allSkillSources) {
  for (const skill of source.skill_tags) {
    if (!skillReferences.has(skill)) {
      skillReferences.set(skill, source);
    }
  }
}
