/* Change this file to get your personal Portfolio */

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
  title: "Hi all, I'm Sami",
  subTitle: emoji(
    "Fresh Software Engineering graduate 🎓 | Backend developer and DevOps enthusiast 🚀 who enjoys building reliable systems, automating environments ⚙️, and improving performance. Eager to gain my first professional experience 💼 and apply my problem-solving and competitive programming skills 🧠 to create efficient applications."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=view&id=1tb1FODLfuSXMlypb3BwJ7aBJfa_VUbZG",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/sami-mezghani-207749204/",
  gmail: "samimezghani5@gmail.coma",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "FRESH SOFTWARE ENGINEERING GRADUATE WITH BACKEND AND DEVOPS SKILLS",
  skills: [
    emoji("⚡ Develop REST APIs and REST APIs and microservices architectures using Spring Boot and Python/Flask"),
    emoji("⚡ Build interactive frontend applications with Angular"),
    emoji("⚡ Build and maintain CI/CD pipelines, work with Kubernetes (K8s), and use Infrastructure as Code (IaC)"),
    emoji("⚡ Work with cloud environments like Azure"),
    emoji("⚡ Participate in competitive programming to solve complex problems")
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
      logo: require("./assets/images/hochschule-karlsruhe-logo.jpg"), // Replace with actual logo if available
      subHeader: "Exchange Student",
      duration: "2024 - 2025"
    },
    {
      schoolName: "Higher Institute of Computer Science and Multimedia of Sfax",
      logo: require("./assets/images/isims-logo.jpg"), // Replace with actual logo
      subHeader: "Engineering Cycle, Major",
      duration: "2022 - 2025"
    },
    {
      schoolName: "Higher Institute of Computer Science and Multimedia of Sfax",
      logo: require("./assets/images/isims-logo.jpg"),
      subHeader: "Integrated Preparatory Program, Major",
      duration: "2020 - 2022"
    }
  ]
};



// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, // Set to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "85%" // Spring Boot, REST APIs
    },
    {
      Stack: "DevOps / Cloud",
      progressPercentage: "70%" // Kubernetes, Azure, CI/CD
    },
    {
      Stack: "Competitive Programming & Problem Solving",
      progressPercentage: "85%" // Strong algorithmic and CP skills
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section
};

// Work experience section

const workExperiences = {
  display: true, // Set true to show Work Experience section
  experience: [
    {
      role: "Final-Year Project",
      company: "Karlsruhe University of Applied Sciences / Bitzer Academy",
      companylogo: require("./assets/images/hochschule-karlsruhe-logo.jpg"), // replace with actual logo
      date: "March – August 2025",
      descBullets: [
        "Created a 3D model of the Bitzer building and developed an Escape Room game in Unity using OOP principles and design patterns (Singleton, Observer, State).",
        "Pre-configured and generalized Azure VMs, creating a reusable system image for automated deployment of instances.",
        "Developed a REST API (Flask) to automate provisioning and manage the lifecycle of VMs.",
        "Set up a reverse proxy to manage communication between the frontend and the streaming environment.",
        "Automated VM configuration using Azure Run Command, executing batch scripts to finalize the streaming setup."
      ],
      technologies: ["Unity", "Blender", "C#", "Flask", "REST API", "Azure", "NiceDCV", "Nginx", "OpenSSL", "Angular"]
    },
    {
      role: "Software Engineering Intern",
      company: "Sofrecom",
      companylogo: require("./assets/images/sofrecom.jpg"), // replace with actual logo
      date: "July – August 2024",
      descBullets: [
        "Implemented the UCP protocol in Python to communicate with Orange’s SMSC.",
        "Developed a REST API (Flask) for UCP session management, shortcode validation, and SMS delivery to Orange France numbers.",
        "Built a simple Angular frontend to test the API.",
        "Set up an SMS simulator to validate UCP message flows before deploying on Orange servers.",
        "Analyzed UCP traffic with Wireshark."
      ],
      technologies: ["Python", "Flask", "Angular", "UCP", "TCP/IP", "Git", "Wireshark"]
    },
    {
      role: "DevOps Intern",
      company: "Spark IT",
      companylogo: require("./assets/images/spark.jpeg"), // replace with actual logo
      date: "June – August 2023",
      descBullets: [
        "Implemented Infrastructure as Code (IaC) using Terraform on Proxmox.",
        "Secured shared infrastructure state with GitLab backend and state locking.",
        "Designed and optimized GitLab CI/CD pipelines covering the full lifecycle (plan, apply, destroy)."
      ],
      technologies: ["Terraform", "GitLab CI", "Proxmox"]
    }
  ]
};
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};
// Some big projects you have worked on
const bigProjects = {
  title: "Personal Projects",
  subtitle: "A selection of projects I built during my studies, internships, and personal learning",
  projects: [
    {
      projectName: "Microservices Architecture for Currency Exchange Application",
      projectDesc:
        "Designed and developed a microservices-based currency exchange system using Spring Boot and Spring Cloud, implementing service discovery, centralized config, and API gateway routing.",
      technologies: [
        "Spring Boot",
        "Spring Cloud (Eureka, Config Server, Gateway)",
        "Kubernetes",
        "REST API",
        "MySQL"
      ]
    },
    {
      projectName: "Web Application for Residence Booking",
      projectDesc:
        "Built a web application with an admin dashboard to manage content and synchronize availability with external booking platforms in real time.",
      technologies: [
        "REST API",
        "Laravel",
        "Laravel Sanctum",
        "MySQL",
        "Postman"
      ]
    },
    {
      projectName: "CI/CD Pipeline for Spring Boot & Angular Application",
      projectDesc:
        "Implemented a complete CI/CD pipeline using GitHub Actions to build Docker images, push to Docker Hub, and deploy automatically to a virtual machine.",
      technologies: [
        "Spring Boot",
        "MySQL",
        "GitHub Actions",
        "Docker",
        "Docker Compose"
      ]
    }
  ],
  display: true
};
// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Academic distinctions, competitive programming contests, coaching sessions, ceremonies, and technical showcases.",

  achievementsCards: [
    // === 2021 ===
    {
      title: "TCPC (2021)",
      subtitle: "17th place out of 92 teams — Tunisian Collegiate Programming Contest (organized by ENIS IEEE CS Chapter).",
      image: require("./assets/images/tcpc1.jpg"),
      imageAlt: "TCPC 2021",
      footerLink: []
    },
    {
      title: "ISIMS Final Year Ceremony (2021)",
      subtitle: "Recognized for academic excellence during the annual ISIMS ceremony.",
      image: require("./assets/images/grad1.jpeg"),
      imageAlt: "ISIMS Ceremony 2021",
      footerLink: []
    },

    // === 2022 ===
    {
      title: "Hello World 2.0 (2022)",
      subtitle: "1st place out of 23 participants — competitive programming contest organized by ENIS IEEE CS Chapter.",
      image: require("./assets/images/hello2.jpeg"),
      imageAlt: "Hello World 2.0",
      footerLink: []
    },
    {
      title: "ISIMS Final Year Ceremony (2022)",
      subtitle: "Recognized for academic excellence during the annual ISIMS ceremony.",
      image: require("./assets/images/grad2.jpeg"),
      imageAlt: "ISIMS Ceremony 2022",
      footerLink: []
    },

    // === 2023 ===
    {
      title: "Hello World 3.0 (2023)",
      subtitle: "1st place out of 45 participants — competitive programming contest organized by ENIS IEEE CS Chapter.",
      image: require("./assets/images/hello3.jpeg"),
      imageAlt: "Hello World 3.0",
      footerLink: []
    },
    {
      title: "Shinobi 1.0 (2023)",
      subtitle: "2nd place — competitive programming contest organized by CPC ISIMS Club.",
      image: require("./assets/images/shinobi.jpeg"),
      imageAlt: "Shinobi Solve It",
      footerLink: []
    },
    {
      title: "ISIMS Solving Cup (2023)",
      subtitle: "1st place — university competitive programming contest organized by ISIMS University.",
      image: require("./assets/images/isimscup1.0.jpeg"),
      imageAlt: "ISIMS CPC",
      footerLink: []
    },
    {
      title: "ISIMS Final Year Ceremony (2023)",
      subtitle: "Recognized for academic excellence during the annual ISIMS ceremony.",
      image: require("./assets/images/grad3.jpeg"),
      imageAlt: "ISIMS Ceremony 2023",
      footerLink: []
    },

    // === 2024 ===
    {
      title: "Hello World 4.0 (2024)",
      subtitle: "3rd place out of 54 participants — competitive programming contest organized by ENIS IEEE CS Chapter.",
      image: require("./assets/images/hello4.jpg"),
      imageAlt: "Hello World 4.0",
      footerLink: []
    },
    {
      title: "Solve It 1.0 (2024)",
      subtitle: "1st place — competitive programming contest organized by IIT & ISIMS IEEE CS Chapters.",
      image: require("./assets/images/svit.jpg"),
      imageAlt: "Solve It 1.0",
      footerLink: []
    },

    // === 2025 ===
    {
      title: "VR Expo Germany (2025)",
      subtitle: "Presented the beta version of my Final-Year Project (Escape Room in Unity) during the VR Expo in Stuttgart.",
      image: require("./assets/images/expo1.jpeg"),
      imageAlt: "VR Expo Germany",
      footerLink: []
    },

    // === TRAINING (ONGOING) ===
    {
      title: "CP Training & Contest Organization",
      subtitle: "Delivered competitive programming training sessions and organized programming contests for university students.",
      image: require("./assets/images/ts1.jpeg"),
      imageAlt: "CP Training",
      footerLink: []
    },
    {
      title: "IEEEXtreme Preparation Sessions",
      subtitle: "Coached IEEE students to prepare them for the global IEEEXtreme programming competition.",
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
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
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

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  number: "+216 54790737",
  email_address: "samimezghani5@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
