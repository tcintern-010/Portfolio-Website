export const navLinks = [
  { label: "About Me", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Project Details", href: "#projects" },
  { label: "Recommendations", href: "#recommendations" },
  { label: "Contact", href: "#contact" },
];

export const heroData = {
  name: "Hi, I'm Muhammad Ibrahim Raza",
  title: "I'm a Full Stack Java Developer",
  description: "Welcome to my portfolio website! I am a passionate developer with a strong interest in creating innovative software solutions. I have experience in front-end and back-end development, and I enjoy working on projects that challenge me to learn and grow as a developer.",
  resumeLink: "https://drive.google.com/file/d/1J7EWEl91A7jOBg71h6hX7FYawfzjOVER/view?usp=sharing",
  image: "/assets/images/Ibrahim.jpg",
  socials: [
    { icon: "bx bxl-github", href: "https://github.com/MIbrahimRaza" },
    { icon: "bx bxl-linkedin", href: "https://www.linkedin.com/in/muhammad-ibrahim-raza-a8a5122a5/" },
  ],
};

export const skillsData = [
  { icon: "bx bxl-html5", name: "HTML", percent: 90 },
  { icon: "bx bxl-css3", name: "CSS", percent: 50 },
  { icon: "bx bxl-javascript", name: "JavaScript", percent: 50 },
  { icon: "bx bxl-java", name: "Java", percent: 90 },
  { icon: "bx bxl-spring-boot", name: "Spring Boot", percent: 70 },
  { icon: "bx bxs-data", name: "Hibernate", percent: 70 },
  { icon: "bx bxs-data", name: "MySQL", percent: 70 },
  { icon: "bx bxl-react", name: "React", percent: 10 },
  { icon: "bx bxl-git", name: "Git", percent: 70 },
  { icon: "bx bxl-github", name: "GitHub", percent: 70 },
];

export const projectsData = [
  {
    title: "Document Signing System",
    description: "A full-stack platform for securely uploading, signing, and verifying documents with JWT-based authentication.",
    tags: ["Java", "Spring Boot", "React", "Spring Security"],
    github: "https://github.com/MIbrahimRaza/DocumentSigningSystem",
  },
  {
    title: "Adult Census Income Prediction",
    description: "A data science project analyzing census data to predict income brackets using classification models.",
    tags: ["Python", "Pandas", "Scikit-learn"],
    github: "https://github.com/MIbrahimRaza/AdultCensusDatasetCleaning",
  },
  {
    title: "Cryptocurrency Data Analysis",
    description: "A data science project exploring cryptocurrency market data for trends and price behavior analysis.",
    tags: ["Python", "Pandas", "Matplotlib"],
    github: "https://github.com/MIbrahimRaza/CryptoDatasetCleaning",
  },
  {
    title: "CLI Banking System",
    description: "A console-based banking application supporting account management and transactions via command-line interface.",
    tags: ["Java", "JDBC", "MySQL"],
    github: "https://github.com/MIbrahimRaza/CLIBasedBasicBankingSystem",
  },
];

export const recommendationsData = [
  {
    text: `Ibrahim is a dedicated developer who consistently delivers clean, well-structured code. Great to work with on team projects."`,
    author: "Abdul Hanan , Project Teamate",
  },
  {
    text: `"His grasp of Spring Boot and REST API design stood out during our capstone project. Reliable and detail-oriented."`,
    author: "Ali Raza , University Fellow",
  },
  {
    text: `"Quick learner, communicates well, and always meets deadlines. Would recommend him for any full-stack role."`,
    author: "Zaviyar , Supervisor",
  },
];

export const contactData = {
  email: "razaibrahim101@gmail.com",
  phone: "0334-9949068",
  location: "Lahore, Pakistan",
  socials: [
    { icon: "bx bxl-instagram", href: "https://www.instagram.com/xeikh_ibrahim/" },
  ],
};