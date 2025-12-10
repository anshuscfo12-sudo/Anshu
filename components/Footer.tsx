import React from 'react';
import { Terminal, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark py-12 text-slate-400 text-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2 text-xl font-bold text-white">
            <Terminal size={24} className="text-primary" />
            <span>Anshu<span className="text-primary">Yadav</span></span>
          </div>
          
          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Anshu Yadav. All rights reserved.</p>
            <p className="flex items-center justify-center md:justify-end gap-1 mt-2">
              Made with <Heart size={12} className="text-red-500 fill-red-500" /> and automation.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;