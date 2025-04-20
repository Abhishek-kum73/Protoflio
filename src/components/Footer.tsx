
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t border-terminal-green/30 bg-terminal">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-terminal-green font-mono mb-4">
          <span className="text-terminal-amber">[</span> 
          abhishek@portfolio<span className="text-terminal-amber">~</span>$ 
          <span className="text-terminal-amber">]</span>
        </div>
        
        <div className="text-sm text-gray-400 mb-4">
          This portfolio was designed with security and privacy in mind. No tracking, no cookies.
        </div>
        
        <div className="text-sm text-terminal-green">
          © {currentYear} Abhishek Kumar | <span className="text-terminal-amber">Cybersecurity Enthusiast</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
