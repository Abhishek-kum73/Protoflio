import React from 'react';
import { ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "In Progress",
      logo: "🛡️",
      url: "https://www.eccouncil.org/certified-ethical-hacker/"
    },
    {
      title: "CompTIA Security+",
      issuer: "CompTIA",
      date: "In Progress",
      logo: "🔒",
      url: "https://www.comptia.org/certifications/security"
    },
    {
      title: "TryHackMe SOC Level 1 Path",
      issuer: "TryHackMe",
      date: "December 2024",
      logo: "🔍",
      url: "https://tryhackme.com/path/outline/soc1"
    }
  ];

  const badges = [
    {
      title: "Web Fundamentals",
      platform: "TryHackMe",
      level: "Advanced",
      progress: 100,
      url: "https://tryhackme.com/path/outline/web"
    },
    {
      title: "Network Security",
      platform: "HackTheBox",
      level: "Intermediate",
      progress: 80,
      url: "https://app.hackthebox.com/learning-paths/network-security"
    },
    {
      title: "OSINT Specialist",
      platform: "TryHackMe",
      level: "Intermediate",
      progress: 90,
      url: "https://tryhackme.com/path/outline/osint"
    },
    {
      title: "Red Team Operator",
      platform: "HackTheBox",
      level: "Beginner",
      progress: 65,
      url: "https://app.hackthebox.com/learning-paths/red-team"
    }
  ];

  return (
    <section id="certifications" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-header">Certifications & Badges</h2>
        
        <div className="glow-card mb-8">
          <h3 className="text-xl text-terminal-purple font-semibold mb-4">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-terminal-green/50 rounded-md p-4 bg-terminal/50 hover:bg-terminal/70 transition-all duration-300 group"
              >
                <div className="text-3xl mb-2 text-center">{cert.logo}</div>
                <h4 className="text-lg text-terminal-green font-semibold text-center group-hover:text-terminal-amber transition-colors">
                  {cert.title}
                </h4>
                <div className="text-sm text-center text-gray-400 mt-1">{cert.issuer}</div>
                <div className="text-xs text-center text-terminal-amber mt-2 flex items-center justify-center gap-1">
                  {cert.date}
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>
        
        <div className="glow-card">
          <h3 className="text-xl text-terminal-purple font-semibold mb-4">Platform Badges & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {badges.map((badge, index) => (
              <a
                key={index}
                href={badge.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-terminal-green/50 rounded-md p-4 bg-terminal/50 hover:bg-terminal/70 transition-all duration-300 group"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-terminal-cyan font-medium group-hover:text-terminal-amber transition-colors">
                    {badge.title}
                  </h4>
                  <span className="text-xs bg-terminal-purple/20 px-2 py-1 rounded">
                    {badge.level}
                  </span>
                </div>
                <div className="text-sm text-gray-400 mb-2">Platform: {badge.platform}</div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-terminal-green h-2 rounded-full animate-pulse-glow"
                    style={{ width: `${badge.progress}%` }}
                  ></div>
                </div>
                <div className="text-right text-xs text-terminal-amber mt-1 flex items-center justify-end gap-1">
                  {badge.progress}% Complete
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
