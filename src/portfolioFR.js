/* Change this file to get your personal Portfolio (French) */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sami Mezghani",
  title: "Bonjour, je suis Sami",
  subTitle: emoji(
    "Jeune diplômé en génie logiciel 🎓 | Développeur backend & passionné DevOps 🚀. J'aime construire des systèmes fiables, automatiser des environnements ⚙️ et améliorer les performances. Motivé pour obtenir ma première expérience professionnelle 💼 et appliquer mes compétences en résolution de problèmes et en programmation compétitive 🧠 pour créer des applications efficaces."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=view&id=1tb1FODLfuSXMlypb3BwJ7aBJfa_VUbZG",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/sami-mezghani-207749204/",
  gmail: "samimezghani5@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "Ce que je fais",
  subTitle: "JEUNE INGÉNIEUR LOGICIEL — BACKEND & DEVOPS",
  skills: [
    emoji("⚡ Développer des API REST et des architectures microservices avec Spring Boot et Python/Flask"),
    emoji("⚡ Concevoir des interfaces frontend interactives avec Angular"),
    emoji("⚡ Construire et maintenir des pipelines CI/CD, travailler avec Kubernetes (K8s) et Infrastructure as Code (IaC)"),
    emoji("⚡ Travailler sur des environnements cloud comme Azure"),
    emoji("⚡ Participer à la programmation compétitive pour résoudre des problèmes complexes")
  ],
  softwareSkills: [
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Flask", fontAwesomeClassname: "fas fa-server" },
    { skillName: "Angular", fontAwesomeClassname: "fab fa-angular" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Terraform", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "Azure", fontAwesomeClassname: "fas fa-cloud" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Karlsruhe University of Applied Sciences",
      logo: require("./assets/images/hochschule-karlsruhe-logo.jpg"),
      subHeader: "Étudiant en échange",
      duration: "2024 - 2025"
    },
    {
      schoolName: "Institut Supérieur d'Informatique et de Multimédia de Sfax",
      logo: require("./assets/images/isims-logo.jpg"),
      subHeader: "Cycle d'ingénieur – Majeur",
      duration: "2022 - 2025"
    },
    {
      schoolName: "Institut Supérieur d'Informatique et de Multimédia de Sfax",
      logo: require("./assets/images/isims-logo.jpg"),
      subHeader: "Cycle préparatoire intégré – Majeur",
      duration: "2020 - 2022"
    }
  ]
};

// Tech Stack
const techStack = {
  viewSkillBars: false, // Set to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "DevOps / Cloud",
      progressPercentage: "70%"
    },
    {
      Stack: "Programmation compétitive & Résolution de problèmes",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Projet de fin d'études",
      company: "Karlsruhe University of Applied Sciences / Bitzer Academy",
      companylogo: require("./assets/images/hochschule-karlsruhe-logo.jpg"),
      date: "Mars – Août 2025",
      descBullets: [
        "Modélisation 3D du bâtiment Bitzer et développement d'un Escape Room sous Unity en appliquant l'orienté objet et des design patterns (Singleton, Observer, State).",
        "Pré-configuration et généralisation des VM Azure ; création d'une image système réutilisable pour le déploiement automatisé d'instances.",
        "Développement d'une API REST (Flask) pour automatiser le provisioning et gérer le cycle de vie des VM.",
        "Configuration d'un reverse proxy pour gérer la communication entre le frontend et l'environnement de streaming.",
        "Automatisation de la configuration des VM via Azure Run Command avec des scripts batch pour finaliser le setup de streaming."
      ],
      technologies: ["Unity", "Blender", "C#", "Flask", "REST API", "Azure", "NiceDCV", "Nginx", "OpenSSL", "Angular"]
    },
    {
      role: "Stagiaire en ingénierie logicielle",
      company: "Sofrecom",
      companylogo: require("./assets/images/sofrecom.jpg"),
      date: "Juil – Août 2024",
      descBullets: [
        "Implémentation du protocole UCP en Python pour communiquer avec le SMSC d'Orange.",
        "Développement d'une API REST (Flask) pour la gestion des sessions UCP, la validation des shortcodes et l'envoi de SMS vers des numéros Orange France.",
        "Développement d'un frontend Angular simple pour tester l'API.",
        "Mise en place d'un simulateur SMS pour valider les flux UCP avant déploiement sur les serveurs Orange.",
        "Analyse des communications UCP avec Wireshark."
      ],
      technologies: ["Python", "Flask", "Angular", "UCP", "TCP/IP", "Git", "Wireshark"]
    },
    {
      role: "Stagiaire DevOps",
      company: "Spark IT",
      companylogo: require("./assets/images/spark.jpeg"),
      date: "Juin – Août 2023",
      descBullets: [
        "Mise en place d'Infrastructure as Code (IaC) avec Terraform sur Proxmox.",
        "Sécurisation de l'état partagé de l'infrastructure avec backend GitLab et verrouillage.",
        "Conception et optimisation de pipelines CI/CD GitLab couvrant le cycle complet (plan, apply, destroy)."
      ],
      technologies: ["Terraform", "GitLab CI", "Proxmox"]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Projets personnels",
  subtitle: "Sélection de projets réalisés pendant mes études, stages et apprentissages personnels",
  projects: [
    {
      projectName: "Architecture microservices pour application d'échange de devises",
      projectDesc:
        "Conception et développement d'une architecture microservices avec Spring Boot et Spring Cloud (service discovery, config centralisée, API gateway).",
      technologies: [
        "Spring Boot",
        "Spring Cloud (Eureka, Config Server, Gateway)",
        "Kubernetes",
        "REST API",
        "MySQL"
      ]
    },
    {
      projectName: "Application web de réservation de résidences",
      projectDesc:
        "Développement d'une application web avec un tableau d'administration pour gérer le contenu et synchroniser les disponibilités en temps réel avec d'autres plateformes.",
      technologies: ["REST API", "Laravel", "Laravel Sanctum", "MySQL", "Postman"]
    },
    {
      projectName: "Pipeline CI/CD pour application Spring Boot & Angular",
      projectDesc:
        "Implémentation d'un pipeline CI/CD complet avec GitHub Actions pour construire des images Docker, les publier sur Docker Hub et déployer automatiquement vers une VM.",
      technologies: ["Spring Boot", "MySQL", "GitHub Actions", "Docker", "Docker Compose"]
    }
  ],
  display: true
};

// Achievement Section (translated from your CV and adjusted)
const achievementSection = {
  title: emoji("Réalisations et Certifications 🏆"),
  subtitle:
    "Distinctions académiques, concours de programmation compétitive, sessions de formation et démonstrations techniques.",
  achievementsCards: [
    {
      title: "TCPC (2021)",
      subtitle:
        "17ᵉ place sur 92 équipes — Tunisian Collegiate Programming Contest (organisé par ENIS IEEE CS Chapter).",
      image: require("./assets/images/tcpc1.jpg"),
      imageAlt: "TCPC 2021",
      footerLink: []
    },
    {
      title: "Cérémonie ISIMS (2021)",
      subtitle: "Distinction pour excellence académique lors de la cérémonie annuelle d'ISIMS.",
      image: require("./assets/images/grad1.jpeg"),
      imageAlt: "ISIMS Ceremony 2021",
      footerLink: []
    },
    {
      title: "Hello World 2.0 (2022)",
      subtitle:
        "1ʳᵉ place sur 23 participants — concours de programmation compétitive (organisé par ENIS IEEE CS Chapter).",
      image: require("./assets/images/hello2.jpeg"),
      imageAlt: "Hello World 2.0",
      footerLink: []
    },
    {
      title: "Cérémonie ISIMS (2022)",
      subtitle: "Distinction pour excellence académique lors de la cérémonie annuelle d'ISIMS.",
      image: require("./assets/images/grad2.jpeg"),
      imageAlt: "ISIMS Ceremony 2022",
      footerLink: []
    },
    {
      title: "Meta Hacker Cup 2022 - Tour de qualification",
      subtitle: "1303ᵉ place sur 27 000+ participants — Compétition mondiale de programmation compétitive organisée par Meta (Facebook).",
      image: require("./assets/images/metaqualcapt.JPG"),
      imageAlt: "Meta Hacker Cup 2022 Qualification",
      footerLink: []
    },
    {
      title: "Meta Hacker Cup 2022 - Tour 1",
      subtitle: "3002ᵉ place sur 12 000+ participants — Tour 1 de la compétition mondiale Meta Hacker Cup 2022. Avec un peu plus de temps, j'aurais été classé dans le top 800.",
      image: require("./assets/images/metaround1capt.jpeg"),
      imageAlt: "Meta Hacker Cup 2022 Round 1",
      footerLink: []
    },
    {
      title: "Hello World 3.0 (2023)",
      subtitle:
        "1ʳᵉ place sur 45 participants — concours de programmation compétitive (organisé par ENIS IEEE CS Chapter).",
      image: require("./assets/images/hello3.jpeg"),
      imageAlt: "Hello World 3.0",
      footerLink: []
    },
    {
      title: "Shinobi 1.0 (2023)",
      subtitle: "2ᵉ place — concours de programmation compétitive (organisé par CPC ISIMS Club).",
      image: require("./assets/images/shinobi.jpeg"),
      imageAlt: "Shinobi 1.0",
      footerLink: []
    },
    {
      title: "ISIMS Solving Cup (2023)",
      subtitle: "1ʳᵉ place — coupe de programmation compétitive universitaire (organisée par ISIMS).",
      image: require("./assets/images/isimscup1.0.jpeg"),
      imageAlt: "ISIMS Solving Cup",
      footerLink: []
    },
    {
      title: "Cérémonie ISIMS (2023)",
      subtitle: "Distinction pour excellence académique lors de la cérémonie annuelle d'ISIMS.",
      image: require("./assets/images/grad3.jpeg"),
      imageAlt: "ISIMS Ceremony 2023",
      footerLink: []
    },
    {
      title: "Hello World 4.0 (2024)",
      subtitle:
        "3ᵉ place sur 54 participants — concours de programmation compétitive (organisé par ENIS IEEE CS Chapter).",
      image: require("./assets/images/hello4.jpg"),
      imageAlt: "Hello World 4.0",
      footerLink: []
    },
    {
      title: "Solve It 1.0 (2024)",
      subtitle: "1ʳᵉ place — concours de programmation compétitive (organisé par IIT & ISIMS IEEE CS Chapters).",
      image: require("./assets/images/svit.jpg"),
      imageAlt: "Solve It 1.0",
      footerLink: []
    },
    {
      title: "VR Expo Allemagne (2025)",
      subtitle:
        "Présentation de la version beta de mon projet de fin d'études (Escape Room sous Unity) pendant une exposition VR à Stuttgart.",
      image: require("./assets/images/expo1.jpeg"),
      imageAlt: "VR Expo Germany",
      footerLink: []
    },
    {
      title: "Formation CP & Organisation de concours",
      subtitle:
        "Animation de séances de formation en programmation compétitive et organisation de concours pour préparer les étudiants (IEEE Xtreme).",
      image: require("./assets/images/ts1.jpeg"),
      imageAlt: "CP Training",
      footerLink: []
    },
    {
      title: "Sessions de préparation IEEEXtreme",
      subtitle:
        "Coaching des étudiants IEEE pour la compétition mondiale IEEEXtreme.",
      image: require("./assets/images/ts252.jpg"),
      imageAlt: "IEEEXtreme Preparation",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "J'aime développer des choses sympas et partager mes apprentissages.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Section
const talkSection = {
  title: "Conférences",
  subtitle: emoji("J'AIME PARTAGER MES CONNAISSANCES ET OBTENIR UN BADGE DE SPEAKER 😅"),
  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "J'AIME PARLER DE MOI ET DE LA TECHNOLOGIE",
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false
};

// Resume Section
const resumeSection = {
  title: "CV",
  subtitle: "Téléchargez mon CV",
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contactez-moi ☎️"),
  number: "+216 54790737",
  email_address: "samimezghani5@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter",
  display: false
};

const isHireable = false; // Set false if you are not looking for a job.

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

