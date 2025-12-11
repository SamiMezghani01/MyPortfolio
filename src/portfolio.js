// portfolio.js
import * as fr from "./portfolioFR";
import * as en from "./portfolioENG";

const lang = localStorage.getItem("lang") || "fr";

const data = lang === "fr" ? fr : en;

export const {
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
} = data;
