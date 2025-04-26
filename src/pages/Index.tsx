import React, { useState, useRef } from 'react';
import Terminal from '@/components/Terminal';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import EducationSection from '../components/EducationSection';

const Index = () => {
  const [terminalComplete, setTerminalComplete] = useState(false);
  
  // Refs for section navigation
  const terminalRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleTerminalComplete = () => {
    setTerminalComplete(true);
  };

  const handleNavClick = (section: string) => {
    switch(section) {
      case 'terminal':
        terminalRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'education':
        educationRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'certifications':
        certificationsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-terminal">
      {/* Only show navbar after terminal animation completes */}
      {terminalComplete && <Navbar onNavClick={handleNavClick} />}
      
      {/* Terminal Section */}
      <div 
        ref={terminalRef}
        className="min-h-screen flex items-center justify-center px-4 bg-terminal"
      >
        <Terminal onComplete={handleTerminalComplete} />
      </div>
      
      {/* Only show content sections after terminal animation completes */}
      {terminalComplete && (
        <>
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={educationRef}>
            <EducationSection />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={certificationsRef}>
            <Certifications />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
