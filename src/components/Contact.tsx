
import React, { useState } from 'react';
import { toast } from '../hooks/use-toast';

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
              <div className="text-sm mb-2">Social Profiles:</div>
              <div className="flex space-x-4">
                <a href="#" className="text-terminal-green hover:text-terminal-amber transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-terminal-green hover:text-terminal-amber transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-terminal-green hover:text-terminal-amber transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          
          <div className="glow-card">
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
