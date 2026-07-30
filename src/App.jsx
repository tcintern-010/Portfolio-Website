import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Recommendations from './components/Recommendations';
import Contact from './components/Contact';
import { navLinks, heroData, skillsData, projectsData, recommendationsData, contactData } from './data';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-bg-main dark:bg-bg-main bg-white text-black dark:text-white transition-colors duration-300">
        <Navbar links={navLinks} darkMode={darkMode} toggleTheme={toggleTheme} />
        <main>
          <Hero {...heroData} />
          <Skills skills={skillsData} />
          <Projects projects={projectsData} />
          <Recommendations recommendations={recommendationsData} />
        </main>
        <Contact {...contactData} />
      </div>
    </div>
  );
}

export default App;