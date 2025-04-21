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
        
        <div className="glow-card">
          <h3 className="text-xl text-terminal-purple font-semibold mb-4">Technical Skills & Expertise</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Programming Languages */}
            <div>
              <h4 className="text-terminal-amber font-medium mb-3">Programming Languages</h4>
              <ul className="space-y-2">
              <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>C/C++</span>
                </li>
                <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>Python</span>
                </li>
                
                <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>Java</span>
                </li>

                <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>JavaScript</span>
                </li>
                                 
                <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>CSS</span>
                </li>


                <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>Bash Scripting</span>
                </li>
              </ul>
            </div>

            {/* Technologies & Frameworks */}
            <div>
              <h4 className="text-terminal-amber font-medium mb-3">Technologies/Frameworks</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>OWASP top 10 Vulnerabilities</span>
                </li>
                <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>Kali Linux</span>
                </li>
                <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>Black arch Linux</span>
                </li>
                <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>Linux PrivEsc</span>
                </li>
                <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>Pentesting principals</span>
                </li>
                <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>Git, Github</span>
                </li>
                <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>Ubuntu</span>
                </li>
                <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>Hash Cracker </span>
                </li>
              </ul>
            </div>

            {/* Security Skills */}
            <div>
              <h4 className="text-terminal-amber font-medium mb-3">Skills</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>Data Structures and Algorithms</span>
                </li>
                <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>Problem Solving</span>
                </li>
                <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>Nmap</span>
                </li>
                <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>Cryptography</span>
                </li>
                <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>Wireshark</span>
                </li>
                <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>Burp Suite</span>
                </li>
                <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>OSI Model</span>
                </li>
                <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>Metasploit</span>
                </li>
                <li className="flex items-center">
                  <span className="text-terminal-amber mr-2">▶</span> 
                  <span>Recong-ng/Maltego</span>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
