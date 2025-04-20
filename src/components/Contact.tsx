import React, { useState } from 'react';
import { toast } from '../hooks/use-toast';
import { Github, Linkedin, Code2, Shield, Terminal, Bug } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/Abhishek-kum73',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://linkedin.com/in/abhishekkum73',
      color: 'hover:text-blue-500'
    },
    {
      name: 'HackerRank',
      icon: <Code2 size={24} />,
      url: 'https://hackerrank.com/abhishek73690',
      color: 'hover:text-green-500'
    },
    {
      name: 'TryHackMe',
      icon: <Shield size={24} />,
      url: 'https://tryhackme.com/p/abhishekkum',
      color: 'hover:text-red-500'
    },
    {
      name: 'HackTheBox',
      icon: <Bug size={24} />,
      url: 'https://app.hackthebox.com/profile/Abhishek736',
      color: 'hover:text-orange-500'
    }
  ];

  return (
    <section id="contact" className="py-16 px-4 bg-black/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-header">Contact Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glow-card">
            <h3 className="text-xl text-terminal-purple font-semibold mb-4">Get In Touch</h3>
            <p className="mb-4">
              Interested in collaborating on cybersecurity projects or have questions about my work? 
              Feel free to reach out through this form or connect with me on social platforms.
            </p>
            
            <div className="mt-6">
              <div className="text-sm mb-4">Connect with me on:</div>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center p-3 rounded-lg border border-terminal-green/30 bg-terminal/20 transition-all duration-300 ${link.color} hover:scale-105`}
                  >
                    {link.icon}
                    <span className="text-xs mt-2 text-terminal-green">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="glow-card">
            <h3 className="text-xl text-terminal-purple font-semibold mb-4">Send Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm text-terminal-amber mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-terminal-green/50 rounded-md p-2 text-terminal-green focus:border-terminal-cyan focus:ring-1 focus:ring-terminal-cyan outline-none"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm text-terminal-amber mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-terminal-green/50 rounded-md p-2 text-terminal-green focus:border-terminal-cyan focus:ring-1 focus:ring-terminal-cyan outline-none"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm text-terminal-amber mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-black border border-terminal-green/50 rounded-md p-2 text-terminal-green focus:border-terminal-cyan focus:ring-1 focus:ring-terminal-cyan outline-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-terminal-green text-black font-bold py-2 px-4 rounded-md hover:bg-terminal-amber transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
