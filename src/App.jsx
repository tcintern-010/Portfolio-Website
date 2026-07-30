import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import {
  navLinks,
  heroData,
  skillsData,
  projectsData,
  contactData,
} from "./data";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-bg-main text-white transition-colors duration-300">
        <Navbar
          links={navLinks}
          darkMode={darkMode}
          toggleTheme={toggleTheme}
        />

        <main className="pt-20">
          <Hero {...heroData} />
          <Skills skills={skillsData} />
          <Projects projects={projectsData} />
        </main>

        <Contact {...contactData} />
      </div>
    </div>
  );
}

export default App;