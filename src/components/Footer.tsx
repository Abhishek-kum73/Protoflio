import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t border-terminal-green/30 bg-terminal">
      <div className="max-w-4xl mx-auto">
        <div className="text-terminal-green font-mono mb-6">
          <span className="text-terminal-amber">[</span> 
          abhishek@portfolio<span className="text-terminal-amber">~</span>$ 
          <span className="text-terminal-amber">]</span>
        </div>
        
        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Phone */}
          <div className="flex items-center justify-center gap-2 text-gray-400 hover:text-terminal-green transition-colors group">
            <Phone size={18} className="text-terminal-amber group-hover:text-terminal-green" />
            <a href="tel:+917369087390" className="text-sm">+91 7369041140</a>
          </div>
          
          {/* Email */}
          <div className="flex items-center justify-center gap-2 text-gray-400 hover:text-terminal-green transition-colors group">
            <Mail size={18} className="text-terminal-amber group-hover:text-terminal-green" />
            <a href="mailto:abhishek73690@gmail.com" className="text-sm">abhishekkum.6973@gmail.com</a>
          </div>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-gray-400 hover:text-terminal-green transition-colors group">
            <MapPin size={18} className="text-terminal-amber group-hover:text-terminal-green" />
            <span className="text-sm">Semari, Bihar, India</span>
          </div>
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
