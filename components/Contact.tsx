import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Wand2, Loader2 } from 'lucide-react';
import { refineMessage } from '../services/geminiService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isRefining, setIsRefining] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRefine = async () => {
    if (!formData.message || formData.message.length < 5) return;
    
    setIsRefining(true);
    const refined = await refineMessage(formData.message);
    setFormData(prev => ({ ...prev, message: refined }));
    setIsRefining(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="flex-1">
            <h3 className="text-primary font-semibold uppercase tracking-wide mb-2">Get In Touch</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Let's Discuss Your Project</h2>
            <p className="text-slate-600 mb-8 max-w-lg">
              Ready to automate your business? Fill out the form or reach out directly via email or phone. I'm always excited to discuss new ideas.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-dark">Email</h4>
                  <p className="text-slate-600">contact@anshu.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-dark">Phone</h4>
                  <p className="text-slate-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-dark">Location</h4>
                  <p className="text-slate-600">New Delhi, India (Remote Available)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <button 
                    type="button" 
                    onClick={handleRefine}
                    disabled={isRefining || !formData.message}
                    className="text-xs flex items-center gap-1 text-purple-600 hover:text-purple-800 disabled:opacity-50 transition-colors"
                    title="Use AI to polish your message"
                  >
                    {isRefining ? <Loader2 size={12} className="animate-spin" /> : <Wand2 size={12} />}
                    Refine with AI
                  </button>
                </div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  placeholder="Tell me about your project needs..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;