import { Icons } from "@/components/icons";
import { PaperclipIcon, FigmaIcon, GraduationCapIcon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Enzo Desbois",
  initials: "ED",
  url: "https://enzodesbois.fr",
  location: "Paris, France",
  locationLink: "https://www.google.com/maps/place/paris",
  description:
    "Machine Learning Engineer and computer engineering student passionate about AI. I love solving problems using machine learning.",
  summary:
    "I’m a French engineering student at EFREI Paris, passionate about data science and cutting-edge AI technologies. Outside of tech, I’m also a big fan of sports, especially running and weightlifting, balance is key! Always open to learning, sharing ideas, and connecting with others who love innovation",
  avatarUrl: "/profile_picture.png",
  skills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Java",
    "Symfony",
    "PHP",
    "Python",
    "SQL",
    "NoSQL",
    "Docker",
    "Pandas",
    "scikit-learn",
    "TensorFlow",
    "Keras",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Accueil" },
    // { href: "https://resume.jordanbaumard.fr", icon: PaperclipIcon, label: "CV" },
  ],
  contact: {
    email: "enzo.desbois@efrei.net",
    tel: "+333630",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dbsenzo",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/edesbois/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,
      //
      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      // email: {
      //   name: "Send Email",
      //   url: "#",
      //   icon: Icons.email,

      //   navbar: false,
      // },
    },
  },

  work: [
    {
      company: "Renault Group",
      href: "https://www.renaultgroup.com",
      badges: [],
      location: "Le Mans, France",
      title: "Machine Learning Engineer (Work-study program)",
      logoUrl: "/renault_group.jpeg",
      start: "November 2024",
      end: "Current",
      description:
        "• Developed an unsupervised predictive maintenance model for CNC machining tools.<br/>• Built a complete data processing pipeline.<br/>• Designed and deployed a self-supervised health monitoring system with no labeled failure data.<br/>• Created visualization tools to track tool health evolution and estimate Remaining Useful Lifetime (RUL).",
    },
    {
      company: "Renault Group",
      badges: [],
      href: "https://www.renaultgroup.com",
      location: "Le Mans, France",
      title: "Software Engineer (Work-study program)",
      logoUrl: "/renault_group.jpeg",
      start: "September 2022",
      end: "November 2024",
      description:
        "• Led a full-stack development project for Renault Group's industrial division in France, delivering annual gains of +€1XX.XXX, including one achieving €7X.XXX annually.<br/>• Conducted code reviews, ensuring high standards and best practices.<br/>• Translated business needs into technical solutions, from analysis to deployment.<br/>• Designed, developed, and maintained web applications, optimizing performance.<br/>• Improved database efficiency through development, query optimization, and report generation (BI4/BO, Spotfire).<br />• Managed Windows server administration to ensure stable deployment environments.<br/>• Translated business needs into technical solutions, from analysis to deployment.<br/>• Designed, developed, and maintained web applications, optimizing performance.<br/>• Improved database efficiency through development, query optimization, and report generation (BI4/BO, Spotfire).<br />• Managed Windows server administration to ensure stable deployment environments.",
    },
  ],
  education: [
    {
      school: "EFREI - Paris",
      href: "https://www.efrei.fr/",
      degree: "MSc in Engineering",
      logoUrl: "/efrei.svg",
      start: "2023",
      end: "2026",
    },
    {
      school: "IUT de Laval",
      href: "https://iut-laval.univ-lemans.fr/fr/index.html",
      degree: "BS in Computer Science",
      logoUrl: "/iut_laval.png",
      start: "2021",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Werewolf AI",
      href: "https://github.com/dbsenzo/24h-du-code-2024",
      active: true,
      description:
        "The Werewolf game adapts the board game for play against an AI powered by Mistral AI. Players can choose from three roles: Villager, Seer, or Werewolf. The AI, accessed via an API on ngrok, provides realistic decisions and chat messages for an immersive experience.",
      technologies: [
        "React.js",
        "Three.js",
        "Python",
        "Hackathon"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/dbsenzo/24h-du-code-2024",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/videos/LoupGarouAI.mov",
    },
    {
      title: "Lameilleureauto.fr",
      href: "https://lameilleureauto.fr/",
      active: true,
      description:
      "Lameilleureauto.fr is a website that allows professionals to find the best car for their needs. It’s a side project I developed in my free time with a friend.",
      technologies: [
        "React",
        "Python",
        "MongoDB",
        "Docker",
        "Pandas",
        "scikit-learn",
        "TensorFlow",
        "Keras",
      ],
      links: [
        {
          type: "Website",
          href: "https://lameilleureauto.fr/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: ""
    }
  ],
  hackathons: [
    {
      title: "24 hours of code",
      dates: "April 6th - 7th, 2024",
      location: "Le Mans, France",
      description: "I wanted to tackle new technical challenges by taking part in the 24H du Code with Jordan Baumard and Samy Bouhamidi. Our aim was to produce a board game (Loup-garou) playable by a human being against several AIs playing the different roles.<br /><br />After implementing an LLM (Mistral-7B-Instruct-v0.2) on Google Colab and learning new things like quantization and the use of Langchain, we set up an original GUI with Three.js (see video below) and made it communicate with our server and the LLM.<br /><br />With +200 participants divided into 49 teams and facing 5 different topics, the competition was tough, but we managed to stand out and come in 1st in the topic led by Le Mans School of AI.",
      image:
        "/24h_du_code_2024.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/jordanbmrd/24h-du-code-2024",
        },
        {
          title: "Linkedin Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/edesbois_24-heures-de-code-%C3%A9dition-2024-ce-activity-7182745720385368064-y4HH",
        },
      ],
      position: "first"
    },
    {
      title: "IT for Green",
      dates: "January 26th - 27th, 2024",
      location: "Paris, France",
      description:
        "We thought about how to meet tomorrow's environmental challenges by putting our IT skills to the test. Today, digital technology accounts for 4% of global CO2 emissions, so we need to use it wisely.<br /><br />We were awarded 1st prize in the “IT4Green” competition for our e-commerce platform project featuring eco-responsible businesses, giving visibility to local events that benefit the environment, and including innovative educational content on ecology (DIY, repairs, etc.).",
      image:
        "/it_for_green.jpg",
      links: [
        {
          title: "Figma",
          icon: <FigmaIcon className="h-4 w-4" />,
          href: "https://www.figma.com/design/wCZI18HxVh2QMbfqtCmHyl/Maquette-Appli?node-id=0-1&t=YIYagnzw4d5uNnzP-1",
        },
        {
          title: "Linkedin Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/edesbois_it4green-greeninnovationchamps-cloudhackathon-activity-7157123083504336896-Sbcf",
        },
      ],
      position: "first"
    },
    {
      title: "Accenture x AWS Deepracer Cup",
      dates: "March 23rd - 24th, 2018",
      location: "Brest, France",
      description:
        "Organized by Accenture France in collaboration with Amazon Web Services (AWS), AWS DeepRacer is a competition that develops artificial intelligence skills by training a small car to drive autonomously using reinforcement learning.<br /><br />We got the 2nd prize !",
      icon: "public",
      image:
        "/deepracer.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dbsenzo/aws-accenture-deepracer-cup",
        },
        {
          title: "Linkedin Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/edesbois_awsdeepracer-challengeaccepted-machinelearning-activity-7141138669611954176-Gr23",
        },
      ],
      position: "second"
    }
  ],
} as const;
