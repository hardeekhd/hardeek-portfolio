import React from 'react';
import './App.css';
import './style.css'; // ✅ import the global style
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievement from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useSiteEffects } from './hooks/useSiteEffects'; // ✅ import the hook

function App() {
  useSiteEffects(); // ✅ run the site-wide effects

  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
      <Achievement />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
