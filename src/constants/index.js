import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React , as well as back-end technologies like .NetCore , MySQL and MSSQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React,.NetCore, MySQL and MSSQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATION = [
  {
    school: "University of Moratuwa",
    description: ` B.Sc.(Hons) in Information Technology`,
    year: "Reading - Expected in 2026",
  
  },
  {
    school: "Sri Lanka Singapore Friendship College",
    description: ` G.C.E Advanced Level Examination and G.C.E Ordinary Level Examination `,
    year: "2011 - 2020 ",
  },
];

export const PROJECTS = [
  {
    title: "Reservation Management System",
    image: project1,
    description:
      "The web-based reservation management system is tailored for large organizations with multiple companies, enabling staff to manage reservations made by phone or in-person. This system simplifies the reservation process for customers and enhances organizational control, improving efficiency and reducing complexity in reservation management.",
    technologies: ["React","Scss", ".NetCore", "MSSQL"],
  },
  {
    title: "Resume Management System",
    image: project2,
    description:
      " This project is an individual full-stack project which is a resume management system that is currently under development. The aim of this website is to provide a user-friendly and seamless resume management experience to recruiters",
    technologies: ["React", "TypeScript", ".NetCore", "MSSQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Message Sharing System",
    image: project4,
    description:
      "  This is a system that allows users to send and receive messages to and from other users. These systems can take various forms, including email platforms, chat applications, social media platforms, and even SMS messages",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

export const CONTACT = {
  address: "Weeraketiya, Hambanthota ",
  email: "ishiniwickramage@gmail.com",
};
