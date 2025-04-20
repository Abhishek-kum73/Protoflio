import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';

interface TerminalProps {
  onComplete?: () => void;
}

interface Command {
  command: string;
  output: string;
}

const Terminal: React.FC<TerminalProps> = ({ onComplete }) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [commandComplete, setCommandComplete] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [commandHistory, setCommandHistory] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState<string>('');
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [inputHistory, setInputHistory] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Terminal commands and responses
  const commands = [
    { command: 'whoami', response: 'Cyber Security Learner | CTF Player | Bug Hunter' },
    { command: 'cat about.txt', response: `Hi, I'm Abhishek Kumar. I love breaking into things legally and learning how they work.\nCurrently exploring web security, IoT device hacking, and participating in CTFs.` },
    { command: 'ls -la projects/', response: 'web-pentest-framework.py\nnetwork-scanner.sh\nvulnerability-database.sql\nctf-writeups/\niot-security-research/' },
    { command: 'cat skills.txt', response: 'Penetration Testing\nNetwork Security\nWeb Application Security\nPython, Bash Scripting\nVulnerability Assessment\nCTF Competition Experience' },
    { command: './access --grant portfolio', response: 'ACCESS GRANTED. Welcome to my portfolio...' }
  ];

  // Interactive commands
  const interactiveCommands: { [key: string]: (args: string[]) => string } = {
    help: () => `Available commands:
  help - Show this help message
  whoami - Display user information
  clear - Clear terminal
  ls - List files and directories
  cat <filename> - Display file contents
  projects - List my projects
  skills - List my skills
  contact - Show contact information
  social - Display social media links
  about - About me
  echo <text> - Display text
  date - Show current date and time`,

    whoami: () => 'Cyber Security Learner | CTF Player | Bug Hunter',

    clear: () => 'CLEAR',

    ls: () => `web-pentest-framework.py
network-scanner.sh
vulnerability-database.sql
ctf-writeups/
iot-security-research/
about.txt
skills.txt`,

    cat: (args) => {
      const files: { [key: string]: string } = {
        'about.txt': `Hi, I'm Abhishek Kumar. I love breaking into things legally and learning how they work.
Currently exploring web security, IoT device hacking, and participating in CTFs.`,
        'skills.txt': `Penetration Testing
Network Security
Web Application Security
Python, Bash Scripting
Vulnerability Assessment
CTF Competition Experience`
      };
      
      if (args.length === 0) return 'Usage: cat <filename>';
      return files[args[0]] || `cat: ${args[0]}: No such file or directory`;
    },

    projects: () => `1. Web Penetration Testing Framework
2. Network Security Scanner
3. CTF Challenge Platform
4. IoT Security Testing Lab`,

    skills: () => `• Web Application Security
• Network Penetration Testing
• Python & Bash Scripting
• Vulnerability Assessment
• CTF Problem Solving
• Linux System Administration`,

    contact: () => `Email: your.email@example.com
Website: https://yourwebsite.com`,

    social: () => `GitHub: https://github.com/yourusername
LinkedIn: https://linkedin.com/in/yourusername
HackerRank: https://hackerrank.com/yourusername
TryHackMe: https://tryhackme.com/p/yourusername
HackTheBox: https://app.hackthebox.com/profile/yourusername`,

    about: () => `I'm a dedicated cybersecurity enthusiast with a passion for ethical hacking and security research.
Currently focusing on web security, IoT vulnerabilities, and CTF competitions.`,

    echo: (args) => args.join(' '),

    date: () => new Date().toLocaleString()
  };

  // Sound effect (optional)
  const playKeySound = () => {
    // Implement sound if desired
    // const audio = new Audio('/typing-sound.mp3');
    // audio.volume = 0.2;
    // audio.play().catch(e => console.log('Audio play failed:', e));
  };

  useEffect(() => {
    if (isInteractive) return;

    if (currentCommandIndex >= commands.length) {
      // All commands complete
      if (onComplete) {
        setTimeout(() => {
          onComplete();
          setIsInteractive(true);
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
  }, [currentCommandIndex, currentCharIndex, commandComplete, commands, onComplete, isInteractive]);

  const executeCommand = (input: string) => {
    const [cmd, ...args] = input.trim().split(' ');
    const command = cmd.toLowerCase();

    let output = '';
    if (command === '') {
      output = '';
    } else if (command === 'clear') {
      setCommandHistory([]);
      return;
    } else if (interactiveCommands[command]) {
      output = interactiveCommands[command](args);
    } else {
      output = `Command not found: ${command}. Type 'help' for available commands.`;
    }

    setCommandHistory(prev => [...prev, { command: input, output }]);
    setInputHistory(prev => [...prev, input]);
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isInteractive) return;

    if (e.key === 'Enter') {
      executeCommand(currentInput);
      setCurrentInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < inputHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(inputHistory[inputHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(inputHistory[inputHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedText, commandHistory]);

  useEffect(() => {
    if (inputRef.current && isInteractive) {
      inputRef.current.focus();
    }
  }, [isInteractive]);

  // Skip animation on click
  const handleSkip = () => {
    if (onComplete) {
      onComplete();
      setIsInteractive(true);
    }
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
            {!isInteractive ? (
              <>
                <span className="terminal-prompt">abhishek@portfolio:~$</span> {displayedText}
                {currentCommandIndex < commands.length && !commandComplete && <span className="terminal-cursor"></span>}
              </>
            ) : (
              <>
                <div className="mb-4 text-terminal-green">
                  Welcome to my interactive terminal portfolio! Type 'help' to see available commands.
                </div>
                {commandHistory.map((entry, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex">
                      <span className="text-terminal-green">abhishek@portfolio:~$</span>
                      <span className="text-terminal-amber ml-2">{entry.command}</span>
                    </div>
                    <div className="text-gray-300 ml-4">{entry.output}</div>
                  </div>
                ))}
                <div className="flex items-center">
                  <span className="text-terminal-green">abhishek@portfolio:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 ml-2 bg-transparent border-none outline-none text-terminal-amber"
                    autoFocus
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
