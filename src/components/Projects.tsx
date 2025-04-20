
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Web Penetration Testing Framework",
      description: "A custom Python-based framework for automated web application vulnerability scanning, with modules for XSS, SQL injection, and CSRF testing.",
      technologies: ["Python", "BeautifulSoup", "Requests", "SQLite"],
      status: "In Progress"
    },
    {
      title: "Network Security Scanner",
      description: "A Bash tool that combines multiple scanning techniques to provide comprehensive network analysis and vulnerability reporting.",
      technologies: ["Bash", "Nmap", "Wireshark", "Linux"],
      status: "Completed"
    },
    {
      title: "CTF Challenge Platform",
      description: "A self-hosted platform for creating and solving Capture The Flag challenges, with authentication, scoring, and hints system.",
      technologies: ["JavaScript", "Node.js", "Docker", "MongoDB"],
      status: "Completed"
    },
    {
      title: "IoT Security Testing Lab",
      description: "A virtual environment for testing IoT device security, including firmware analysis tools and network simulation capabilities.",
      technologies: ["Virtual Machines", "Python", "C", "Firmware Analysis"],
      status: "In Progress"
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
                <span className={`text-xs px-2 py-1 rounded ${project.status === 'Completed' ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'}`}>
                  {project.status}
                </span>
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
