import React from 'react';
import { ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "HackFinity Battle CTF Challenge",
      issuer: "HackFinity",
      date: "March 2025",
      image: "/images/abhi1.png",
      stats: {
        rank: 1762,
        points: 90,
        tasks: 12
      },
      url: "#"
    },
    {
      title: "Advent of Cyber 2024",
      issuer: "TryHackMe",
      date: "March 2025",
      image: "/images/abhi9.png",
      url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-NLLPZPTO3D.pdf"
    },
    {
      title: "Advent of Cyber 2023",
      issuer: "TryHackMe",
      date: "January 2025",
      image: "/images/abhi2.png",
      url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-KNKMGWX85B.pdf"
    },
    {
      title: "SQL Injection Attacks",
      issuer: "Eccouncil",
      date: "January 2025",
      image: "/images/abhi7.png",
      url: "https://codered.eccouncil.org/certificate/6c19ae0b-4390-4abe-86b7-1809f753c6c8?logged=true"
    },
    {
      title: "Ethical Hacking Essentials (EHE)",
      issuer: "Coursera",
      date: "October 2024",
      image: "/images/abhi12.png",
      url: "https://www.coursera.org/account/accomplishments/certificate/13XR1IRWBTWO"
    },
    {
      title: "Digital Forensics Essentials (DFE)",
      issuer: "Coursera",
      date: "September 2024",
      image: "/images/abhi11.png",
      url: "https://www.coursera.org/account/accomplishments/certificate/NWZ8XMVG92XE"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Coursera",
      date: "January 2024",
      image: "/images/abhi13.png",
      url: "https://www.coursera.org/account/accomplishments/certificate/N24AXWNHT4F8"
    },
    {
      title: "Programming in C++",
      issuer: "Coursera",
      date: "November 2023",
      image: "/images/abhi4.png",
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/9X486DA8XEG5"
    },

    {
      title: "Algorithms",
      issuer: "Coursera",
      date: "November 2023",
      image: "/images/abhi5.png",
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/9XAFJSHZV7B4"
    },

    {
      title: "Introduction to Hardware and Operating Systems",
      issuer: "Coursera",
      date: "October 2023",
      image: "/images/abhi10.png",
      url: "https://www.coursera.org/account/accomplishments/certificate/2M7BBP3TGG6B"
    }

  ];

  const badges = [
    {
      title: "Pre Security",
      platform: "TryHackMe",
      level: "Easy",
      progress: 65,
      url: "https://tryhackme.com/paths"
    },
    {
      title: "Web Fundamentals",
      platform: "TryHackMe",
      level: "Easy",
      progress: 26,
      url: "https://tryhackme.com/paths"
    },
    {
      title: "Comptia Pentest+",
      platform: "TryHackMe",
      level: "Easy",
      progress: 35,
      url: "https://tryhackme.com/paths"
    },
    {
      title: "DevSecOps",
      platform: "TryHackMe",
      level: "Intermediate",
      progress: 30,
      url: "https://tryhackme.com/paths"
    },
    {
      title: "Information Security Fundamentals",
      platform: "HackTheBox",
      level: "Intermediate",
      progress: 61,
      url: "https://academy.hackthebox.com/paths"
    },
    {
      title: "Operating System Fundamentals",
      platform: "HackTheBox",
      level: "Intermediate",
      progress: 58,
      url: "https://academy.hackthebox.com/paths"
    }
  ];

  return (
    <section id="certifications" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-header">Certifications & Badges</h2>
        
        <div className="glow-card mb-8">
          <h3 className="text-xl text-terminal-purple font-semibold mb-4">Achievement</h3>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="relative group">
              <img 
                src={certifications[0].image}
                alt="HackFinity Battle Certificate" 
                className="w-full rounded-lg border-2 border-terminal-green/30 transition-all duration-300 group-hover:border-terminal-green/60"
              />
            </div>
            <div>
              <h4 className="text-xl text-terminal-green font-semibold mb-2">{certifications[0].title}</h4>
              <p className="text-gray-300 mb-4">
                Successfully completed the HackFinity Battle CTF Challenge, demonstrating practical skills in cybersecurity, 
                problem-solving, and ethical hacking through a series of complex challenges.
              </p>
              <div className="text-sm text-terminal-amber mb-4">Completed on: {certifications[0].date}</div>
              
              <div className="bg-black/80 backdrop-blur-sm rounded p-4 border border-terminal-green/30">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-terminal-amber text-sm mb-1">Scoreboard Rank</div>
                    <div className="text-terminal-green font-mono text-xl">{certifications[0].stats.rank}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-terminal-amber text-sm mb-1">Points Earned</div>
                    <div className="text-terminal-green font-mono text-xl">{certifications[0].stats.points}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-terminal-amber text-sm mb-1">Tasks Done</div>
                    <div className="text-terminal-green font-mono text-xl">{certifications[0].stats.tasks}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glow-card mb-8">
          <h3 className="text-xl text-terminal-purple font-semibold mb-4">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.slice(1).map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-terminal-green/50 rounded-md p-4 bg-terminal/50 hover:bg-terminal/70 transition-all duration-300 group"
              >
                <div className="mb-4 h-40 overflow-hidden rounded-lg border border-terminal-green/30">
                  <img 
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
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
                  />
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
