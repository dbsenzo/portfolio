import { Icons } from "@/components/icons";
import {PaperclipIcon, FigmaIcon, GraduationCapIcon, HomeIcon, NotebookIcon} from "lucide-react";

export const DATA = {
  name: "Jordan Baumard",
  initials: "JB",
  url: "https://jordanbaumard.fr",
  location: "Brest, France",
  locationLink: "https://www.google.com/maps/place/brest",
  description:
    "Software Engineer and student passionate about Computer Science. I love building things and helping people.",
  summary:
    "Keen on new technologies and computer programming since I was young, my ambition is to become a Software Engineer. Currently in my [second year of Computer Science engineer’s degree at the IMT Atlantique](/#education) based in Brest (FR), I have already made a [few projects](/#projects) such as online games, showcase websites, and e-commerce platforms. I have proven my ability to create large-scale applications that have a positive impact.",
  avatarUrl: "/profile_picture.jpg",
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
    "C",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://resume.jordanbaumard.fr", icon: PaperclipIcon, label: "Resume" },
  ],
  contact: {
    email: "jordanbmrd@gmail.com",
    tel: "+33781334762",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jordanbmrd",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jordanbaumard/",
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
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Renault Group",
      href: "https://www.renaultgroup.com",
      badges: [],
      location: "Le Mans, France",
      title: "Software Engineer (Work-study program)",
      logoUrl: "/renault_group.jpeg",
      start: "September 2023",
      end: "Current",
      description:
        "- Digital transformation of Le Mans plant processes<br />- Analysis of requirements and proposal of appropriate solutions<br />- Maintenance of existing applications<br />- Agile Scrum method<br /><br />Technical stack :<br />- Frontend : Next.js (TypeScript)<br />- Backend : Symfony (PHP), API Platform<br />- Database : MySQL",
    },
    {
      company: "Ministry of Armed Forces",
      badges: [],
      href: "https://www.defense.gouv.fr",
      location: "Paris, France",
      title: "Software Engineer (Work-study program)",
      logoUrl: "/ministere_des_armees.jpeg",
      start: "September 2022",
      end: "August 2023",
      description:
        "- Participation in design discussions<br />- Development of major features<br />- Tool deployment (Release Captain)<br />- Agile Kanban method<br /><br />Technical stack :<br />- Frontend : React.js (TypeScript)<br />- Backend : Java<br />- Database : MySQL and ElasticSearch<br />- Micro-service architecture",
    },
    {
      company: "Cartesia Junior",
      href: "",
      badges: [],
      location: "Paris, France",
      title: "Chief Technical Officer",
      logoUrl: "/cartesia_junior.jpeg",
      start: "September 2022",
      end: "August 2023",
      description:
        "Junior-Enterprise of the Paris Institute of Technology (Paris Cité University)<br/><br />- Management and coordination of a team of 8 people<br />- Participation in decision-making to improve services and performance<br />- Administration of IT infrastructure<br />- Implementation of web infrastructure on AWS (Docker, Nginx)",
    },
  ],
  education: [
    {
      school: "IMT Atlantique",
      href: "https://www.imt-atlantique.fr/",
      degree: "MSc in Engineering",
      logoUrl: "/imt_atlantique.png",
      start: "2023",
      end: "2026",
    },
    {
      school: "IUT de Paris - Rives de Seine",
      href: "https://iutparis-seine.u-paris.fr",
      degree: "Bachelor's Degree of Computer Science",
      logoUrl: "iut_paris_rives_de_seine.jpeg",
      start: "2021",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Loup Garou AI",
      href: "https://github.com/jordanbmrd/24h-du-code-2024",
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
          href: "https://github.com/jordanbmrd/24h-du-code-2024",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/videos/LoupGarouAI.mov",
    },
    {
      title: "CountryGuesser",
      href: "https://playcountryguesser.netlify.app/",
      active: true,
      description:
        "CountryGuesser is a game in which you have to find the country on the globe based on a randomly displayed flag. There are 3 clues to choose from. The game can be played alone or with friends.",
      technologies: [
        "React.js",
        "Material UI",
        "Mapbox",
      ],
      links: [
        {
          type: "Website",
          href: "https://playcountryguesser.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jordanbmrd/CountryGuesser",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/CountryGuesser.mov",
    },
    {
      title: "BLKJCK (minimalist blackjack)",
      href: "https://blkjck.netlify.app",
      active: true,
      description:
        "A minimalist blackjack game offering a clean, straightforward interface focused on the core mechanics. Play against the dealer in a streamlined environment, with simple controls and no distractions. Ideal for quick, casual play while enjoying the classic card game.",
      technologies: [
        "React.js",
        "Deck of Cards API",
      ],
      links: [
        {
          type: "Website",
          href: "https://blkjck.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jordanbmrd/BlackJack",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/Blackjack.mov",
    },
    {
      title: "Tennis Computer Analysis",
      href: "https://github.com/jordanbmrd/tennis-computer-analysis",
      active: true,
      description:
        "Analyses a tennis game on a video. It detects players and the ball using Yolo and uses CNNs to extract court key points.",
      technologies: [
        "Python",
        "YOLOv5",
        "Machine Learning"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/jordanbmrd/tennis-computer-analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/videos/TennisComputerAnalysis.avi",
    },
  ],
  hackathons: [
    {
      title: "Startup Weekend",
      dates: "November 15th - 17th 2024",
      location: "Nantes, France",
      description:
          "Coming soon...",
      image:
          "/startup_weekend.jpg",
      links: [],
    },
    {
      title: "24 hours of code",
      dates: "April 6th - 7th, 2024",
      location: "Le Mans, France",
      description: "I wanted to tackle new technical challenges by taking part in the 24H du Code with Enzo Desbois and Samy Bouhamidi. Our aim was to produce a board game (Loup-garou) playable by a human being against several AIs playing the different roles.<br /><br />After implementing an LLM (Mistral-7B-Instruct-v0.2) on Google Colab and learning new things like quantization and the use of Langchain, we set up an original GUI with Three.js (see video below) and made it communicate with our server and the LLM.<br /><br />With +200 participants divided into 49 teams and facing 5 different topics, the competition was tough, but we managed to stand out and come in 1st in the topic led by Le Mans School of AI.",
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
          href: "https://www.linkedin.com/posts/jordanbaumard_24hcode-24hducode-activity-7182793006045876226-08qD",
        },
      ],
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
          href: "https://www.linkedin.com/posts/jordanbaumard_hackathon-it-for-green-janvier-2024-activity-7157281146723078144-DN8g",
        },
      ],
    },
    {
      title: "Accenture x AWS Deepracer Cup",
      dates: "March 23rd - 24th, 2018",
      location: "Brest, France",
      description:
        "Organized by Accenture France in collaboration with Amazon Web Services (AWS), AWS DeepRacer is a competition that develops artificial intelligence skills by training a small car to drive autonomously using machine learning.<br /><br />We got the 2nd prize !",
      icon: "public",
      image:
        "/deepracer.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/jordanbmrd/aws-accenture-deepracer-cup",
        },
        {
          title: "Linkedin Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/jordanbaumard_awsdeepracer-challengeaccepted-machinelearning-activity-7143601069070192640-Lria",
        },
      ],
    },
    {
      title: "24 hours of IUT",
      dates: "May 12th - 13th, 2023",
      location: "Lyon, France",
      description:
        "On the program: Forensic, Pentest, OSINT, Reverse engineering, Steganography, etc. We learned new skills and met some great people !<br /><br />Here are some highlights of our participation with 23 teams present :<br /> - 2nd place in web development<br /> - 3rd place in cybersecurity<br /> - 7th place in algo/prog<br /> - An epic all-nighter",
      image:
        "/univ_lyon.png",
      links: [
        {
          title: "Article (Université Paris Cité)",
          icon: <GraduationCapIcon className="h-4 w-4" />,
          href: "https://iutparis-seine.u-paris.fr/lequipe-paris-descartes-arrive-3eme-au-challenge-national-des-24h-info-des-iut/",
        },
        {
          title: "Linkedin Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/jordanbaumard_24h-des-iut-mai-2023-retour-sur-activity-7063825915960553472-_e7_",
        },
      ],
    },
    {
      title: "Startup Weekend",
      dates: "Whatever month 2018",
      location: "Le Mans, France",
      description:
          "I met a lot of interesting people and we created together an MVP of an educational web application for young children.",
      image:
          "/startup_weekend.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
  ],
} as const;
