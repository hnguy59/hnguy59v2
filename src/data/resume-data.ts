import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Henry Shi Jia Nguyen",
  initials: "HN",
  location: "Sydney, Australia",
  locationLink: "https://maps.app.goo.gl/cumtD5PsPRQ7JA5U9",
  about: "Software Engineer learning something new everyday.",
  summary:
    "I love learning! From self-directed research to meaningful conversations with fellow developers. I continue to pick up various skills and knowledge of emerging technologies, learning something new every day.",
  avatarUrl: "", // to update manually
  personalWebsiteUrl: "",
  contact: {
    email: "riripishu@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/hnguy59",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/henry-nguyen-1a5980191/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Queensland University of Technology",
      degree: "Bachelor Degree in Information Technology, Computer Science",
      start: "2018",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Fujitsu",
      link: "https://global.fujitsu/en-apac",
      badges: ["Cyber Security", "AI", "React", ".NET", "Azure"],
      title: "Software Engineer",
      start: "Sep 2023",
      end: null,
      description: "*oobe was acquired by Fujitsu.",
      highlights: ["yerr"],
    },
    {
      company: "Gretel Analytics",
      link: "https://startupgalaxy.com.au/startups/gretel-analytics",
      badges: ["Health", "AI", "Startup", "React", "Node.js", "AWS"],
      title: "Software Engineer",
      start: "Jun 2023",
      end: "Dec 2023",
      description: "",
      highlights: [
        "Early startup member who contributed to ideation and initial planning.",
        "Built and scaled the frontend from the ground up using modern technologies.",
        "Collaborated closely with a small team to align on goals and resolve challenges.",
      ],
    },
    {
      company: "bdna",
      link: "https://bdna.com.au/",
      badges: ["Forensic Register", "React", "Coldfusion"],
      title: "Software Engineer",
      start: "Jun 2023",
      end: "Sep 2023",
      description: "",
      highlights: [
        "Kept up with the latest React and ColdFusion advancements, integrating new features and best practices into workflows.",
        "Updated and streamlined React dependencies, ensuring compatibility with modern libraries.",
      ],
    },
    {
      company: "Max Kelsen",
      link: "https://www.bain.com/about/media-center/press-releases/2023/bain--company-acquires-max-kelsens-consulting-and-managed-services-divisions/",
      badges: ["Health", "AI", "React", "React-native", "Python", "GCP"],
      title: "Frontend Developer",
      start: "Jun 2022",
      end: "Jun 2023",
      description: "*Max Kelsen was acquired by Bain & Company.",
      highlights: [
        "Built intuitive web and mobile interfaces using React and React Native, enhancing user experience across platforms.",
        "Participated in agile ceremonies including stand-ups, sprint planning, and retrospectives to drive efficient delivery.",
        "Led feature demos and showcases, communicating technical concepts clearly to both technical and non-technical stakeholders.",
      ],
    },
    {
      company: "Speedwell",
      link: "hhttps://www.liquidinteractive.com.au/",
      badges: [
        "Head to Health",
        "Typescript",
        "PHP",
        "Drupal/GovCMS",
        ".NET",
        "Azure",
      ],
      title: "Junior Developer",
      start: "Mar 2021",
      end: "Jul 2022",
      description: "*Speedwell was acquired by Liquid Interactive.",
      highlights: [
        "Built scalable and secure Drupal web solutions for government clients, enabling efficient content management.",
        "Ensured compliance with WCAG 2.0/2.1 and Section 508 accessibility and security standards.",
        "Developed custom themes using PHP, Twig, TypeScript, and SCSS, delivering responsive designs aligned with government branding.",
      ],
    },
  ],
  skills: [
    "React/Next.js",
    "TypeScript",
    "Node.js",
    ".NET",
    "C#",
    "AI/LLMs",
    "Design Systems",
    "System Architecture",
  ],
  projects: [],
} as const;
