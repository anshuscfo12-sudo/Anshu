import React from 'react';
import { ArrowRight, Download, Linkedin, Github, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 rounded-bl-[100px] opacity-60"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 bg-blue-100 text-primary font-semibold text-sm rounded-full">
              Available for Freelance & Consulting
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight">
              Hi, I'm <span className="text-primary">Anshu Yadav</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 mb-6">
              Business Growth & Automation Expert <br className="hidden md:block"/>
              <span className="text-secondary">| Appsheet Developer</span>
            </h2>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Helping businesses scale with automation, analytics, and growth strategy. 
              I turn complex manual processes into streamlined, automated workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#projects" 
                className="px-8 py-3.5 bg-secondary text-white font-medium rounded-full hover:bg-blue-900 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                View My Work <ArrowRight size={18} />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3.5 bg-white text-slate-700 border border-slate-200 font-medium rounded-full hover:border-primary hover:text-primary transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6">
              <a href="#" className="p-2 text-slate-400 hover:text-primary transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="p-2 text-slate-400 hover:text-primary transition-colors"><Github size={24} /></a>
              <a href="mailto:contact@anshu.com" className="p-2 text-slate-400 hover:text-primary transition-colors"><Mail size={24} /></a>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Abstract shapes behind image */}
              <div className="absolute top-4 -left-4 w-full h-full bg-blue-200 rounded-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-secondary rounded-3xl -z-10 opacity-10"></div>
              
              <img 
                src="https://picsum.photos/800/800" 
                alt="Anshu Yadav" 
                className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
              />
              
              {/* Floating badges */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
                <div className="bg-green-100 p-2 rounded-lg text-green-600 font-bold">3+</div>
                <div className="text-sm font-medium text-slate-700">Years<br/>Experience</div>
              </div>

              <div className="absolute top-8 -right-8 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2 animate-pulse">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs font-semibold text-slate-600">Automation Pro</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;