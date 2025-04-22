import React from 'react';
import { Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Encryption and Decryption Tool",
      description: "An Encryption and Decryption Tool is a program that securely converts plain text into ciphertext using a cryptographic algorithm, and then reverses it back to readable text using a key. It helps protect sensitive data during storage or transmission.",
      technologies: ["HTML", "CSS", "JavaScript", "Python","Requests"],
      status: "Completed",
      githubUrl: "https://github.com/Abhishek-kum73/CoderDecoder"
    },
    {
      title: "Network Security Scanner",
      description: "A Network Security Scanner is a tool that scans devices on a network to identify open ports, services, and potential vulnerabilities. It helps assess the security posture of systems and detect misconfigurations or threats.",
      technologies: ["Bash", "Nmap", "Wireshark", "Linux","Python"],
      status: "Completed",
      githubUrl: "https://github.com/Abhishek-kum73/Network_Scan/tree/main"
    },
    {
      title: "Password Strength Checker",
      description: "A Password Strength Checker is a tool that evaluates the security of a password based on length, complexity, and predictability. It helps users create strong, hard-to-crack passwords to enhance account security.",
      technologies: ["Python", "Tkinter", "tkinter-password-strength"],
      status: "Completed",
      githubUrl: "https://github.com/Abhishek-kum73/PasswordStrengthChecker"
    },
    {
      title: "Browser Extension Security Analyzer",
      description: "A Browser Extension Security Analyzer is a tool that scans browser extensions for security risks such as excessive permissions, use of dangerous APIs, or suspicious code patterns.",
      technologies: ["Python","Rust","Node.js","React","Typescript","Tailwind CSS"],
      status: "In Progress",
      githubUrl: "https://github.com/Abhishek-kum73/PasswordStrengthChecker"
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-black/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-header">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="glow-card h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl text-terminal-cyan font-semibold">{project.title}</h3>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded ${project.status === 'Completed' ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'}`}>
                    {project.status}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-green hover:text-terminal-amber transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <p className="mb-4 text-sm text-gray-300">{project.description}</p>
              
              <div className="mt-auto">
                <div className="text-xs text-terminal-amber font-mono mb-1">TECHNOLOGIES:</div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-terminal-purple/20 border border-terminal-purple px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
