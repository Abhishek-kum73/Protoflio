
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavClick: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (section: string) => {
    onNavClick(section);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-terminal/90 backdrop-blur-sm z-50 border-b border-terminal-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-terminal-green font-mono font-bold text-lg md:text-xl" onClick={() => handleNavClick('terminal')}>
              abhishek@<span className="text-terminal-amber">portfolio</span>:~$
            </span>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-terminal-green hover:text-terminal-amber focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => handleNavClick('about')} className="nav-link">About</button>
            <button onClick={() => handleNavClick('projects')} className="nav-link">Projects</button>
            <button onClick={() => handleNavClick('certifications')} className="nav-link">Certifications</button>
            <button onClick={() => handleNavClick('contact')} className="nav-link">Contact</button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-terminal border-t border-terminal-green">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => handleNavClick('about')} className="block px-3 py-2 w-full text-left text-terminal-green hover:text-terminal-amber">
              About
            </button>
            <button onClick={() => handleNavClick('projects')} className="block px-3 py-2 w-full text-left text-terminal-green hover:text-terminal-amber">
              Projects
            </button>
            <button onClick={() => handleNavClick('certifications')} className="block px-3 py-2 w-full text-left text-terminal-green hover:text-terminal-amber">
              Certifications
            </button>
            <button onClick={() => handleNavClick('contact')} className="block px-3 py-2 w-full text-left text-terminal-green hover:text-terminal-amber">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
