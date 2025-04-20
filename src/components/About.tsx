import React from 'react';
import { FileText } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-header">About Me</h2>
        
        <div className="glow-card mb-8">
          <div className="flex justify-between items-start">
            <h3 className="text-xl text-terminal-purple font-semibold mb-4">Background</h3>
            <a 
              href="/resume.pdf" 
              download
              className="flex items-center gap-2 text-terminal-green hover:text-terminal-amber transition-colors"
            >
              <FileText size={20} />
              <span className="text-sm">Download Resume</span>
            </a>
          </div>
          <p className="mb-4">
            I'm a dedicated cybersecurity enthusiast currently pursuing my education in the field. My journey began with a fascination for how systems work, which quickly evolved into a passion for understanding how they can be broken—and more importantly, secured.
          </p>
          <p>
            With a hacker's mindset and an ethical approach, I spend my time learning about vulnerabilities, participating in CTF (Capture The Flag) competitions, and continuously expanding my security knowledge through hands-on projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glow-card">
            <h3 className="text-xl text-terminal-purple font-semibold mb-4">Skills</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-terminal-amber mr-2">▶</span> 
                <span>Web Application Security</span>
              </li>
              <li className="flex items-center">
                <span className="text-terminal-amber mr-2">▶</span> 
                <span>Network Penetration Testing</span>
              </li>
              <li className="flex items-center">
                <span className="text-terminal-amber mr-2">▶</span> 
                <span>Python & Bash Scripting</span>
              </li>
              <li className="flex items-center">
                <span className="text-terminal-amber mr-2">▶</span> 
                <span>Vulnerability Assessment</span>
              </li>
              <li className="flex items-center">
                <span className="text-terminal-amber mr-2">▶</span> 
                <span>CTF Problem Solving</span>
              </li>
              <li className="flex items-center">
                <span className="text-terminal-amber mr-2">▶</span> 
                <span>Linux System Administration</span>
              </li>
            </ul>
          </div>
          
          <div className="glow-card">
            <h3 className="text-xl text-terminal-purple font-semibold mb-4">Interests</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-terminal-amber mr-2">▶</span> 
                <span>IoT Security Research</span>
              </li>
              <li className="flex items-center">
                <span className="text-terminal-amber mr-2">▶</span> 
                <span>Bug Bounty Hunting</span>
              </li>
              <li className="flex items-center">
                <span className="text-terminal-amber mr-2">▶</span> 
                <span>Red Team Operations</span>
              </li>
              <li className="flex items-center">
                <span className="text-terminal-amber mr-2">▶</span> 
                <span>Reverse Engineering</span>
              </li>
              <li className="flex items-center">
                <span className="text-terminal-amber mr-2">▶</span> 
                <span>Cryptography</span>
              </li>
              <li className="flex items-center">
                <span className="text-terminal-amber mr-2">▶</span> 
                <span>Open Source Security Tools</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
