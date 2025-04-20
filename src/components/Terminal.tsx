
import React, { useState, useEffect, useRef } from 'react';

interface TerminalProps {
  onComplete?: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ onComplete }) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [commandComplete, setCommandComplete] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Terminal commands and responses
  const commands = [
    { command: 'whoami', response: 'Cyber Security Learner | CTF Player | Bug Hunter' },
    { command: 'cat about.txt', response: `Hi, I'm Abhishek Kumar. I love breaking into things legally and learning how they work.\nCurrently exploring web security, IoT device hacking, and participating in CTFs.` },
    { command: 'ls -la projects/', response: 'web-pentest-framework.py\nnetwork-scanner.sh\nvulnerability-database.sql\nctf-writeups/\niot-security-research/' },
    { command: 'cat skills.txt', response: 'Penetration Testing\nNetwork Security\nWeb Application Security\nPython, Bash Scripting\nVulnerability Assessment\nCTF Competition Experience' },
    { command: './access --grant portfolio', response: 'ACCESS GRANTED. Welcome to my portfolio...' }
  ];

  // Sound effect (optional)
  const playKeySound = () => {
    // Implement sound if desired
    // const audio = new Audio('/typing-sound.mp3');
    // audio.volume = 0.2;
    // audio.play().catch(e => console.log('Audio play failed:', e));
  };

  useEffect(() => {
    if (currentCommandIndex >= commands.length) {
      // All commands complete
      if (onComplete) {
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
      return;
    }

    const currentCommand = commands[currentCommandIndex];
    
    if (!commandComplete) {
      // Still typing the command
      if (currentCharIndex < currentCommand.command.length) {
        const timer = setTimeout(() => {
          setDisplayedText(prev => prev + currentCommand.command[currentCharIndex]);
          setCurrentCharIndex(currentCharIndex + 1);
          playKeySound();
        }, 100); // Adjust speed here
        
        return () => clearTimeout(timer);
      } else {
        // Command typing complete, show response after brief pause
        const timer = setTimeout(() => {
          setDisplayedText(prev => `${prev}\n${currentCommand.response}`);
          setCommandComplete(true);
        }, 500);
        
        return () => clearTimeout(timer);
      }
    } else {
      // Prepare for next command
      const timer = setTimeout(() => {
        setDisplayedText(prev => `${prev}\n\nabhishek@portfolio:~$ `);
        setCurrentCommandIndex(currentCommandIndex + 1);
        setCurrentCharIndex(0);
        setCommandComplete(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [currentCommandIndex, currentCharIndex, commandComplete, commands, onComplete]);

  useEffect(() => {
    // Auto-scroll to the bottom of the terminal
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedText]);

  // Skip animation on click
  const handleSkip = () => {
    if (onComplete) onComplete();
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="terminal-window relative">
        <div className="terminal-header">
          <div className="terminal-controls">
            <div className="terminal-control bg-red-500"></div>
            <div className="terminal-control bg-yellow-500"></div>
            <div className="terminal-control bg-green-500"></div>
          </div>
          <div className="terminal-title">abhishek@portfolio:~</div>
          <div className="text-xs cursor-pointer hover:text-terminal-amber" onClick={handleSkip}>Skip</div>
        </div>
        <div 
          ref={terminalRef}
          className="terminal-body h-[70vh] overflow-y-auto whitespace-pre-line p-2"
        >
          <div className="terminal-content">
            <span className="terminal-prompt">abhishek@portfolio:~$</span> {displayedText}
            {currentCommandIndex < commands.length && !commandComplete && <span className="terminal-cursor"></span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
