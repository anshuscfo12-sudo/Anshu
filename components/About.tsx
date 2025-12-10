import React from 'react';
import { Download, CheckCircle2 } from 'lucide-react';

const skills = [
  "AI Automation",
  "Dashboard Development",
  "Appsheet",
  "Google Sheet Expert",
  "Business Growth",
  "Workflow Automation",
  "Data Analytics",
  "Zapier / Make"
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-16">
          
          <div className="flex-1">
            <h3 className="text-primary font-semibold tracking-wide uppercase mb-3">About Me</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Structuring Chaos into <br/>Streamlined Systems</h2>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              I am a dedicated Business Automation Expert and Appsheet Developer with a passion for optimizing business operations. Over the past 3 years, I have helped numerous organizations transition from scattered spreadsheets to robust, automated applications.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              My expertise lies in bridging the gap between raw data and actionable insights. Whether it's building a custom CRM in Appsheet, automating complex financial reporting in Google Sheets, or deploying AI agents to handle routine queries, my goal is simple: to save you time and help your business grow. I believe that technology should work for you, not the other way around.
            </p>

            <button className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-dark font-medium rounded-lg hover:bg-slate-200 transition-colors">
              <Download size={20} />
              Download CV
            </button>
          </div>

          <div className="flex-1 w-full">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-dark mb-6">Key Skills & Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="flex items-center justify-between">
                   <div>
                     <span className="block text-3xl font-bold text-primary">50+</span>
                     <span className="text-sm text-slate-500">Projects Completed</span>
                   </div>
                   <div>
                     <span className="block text-3xl font-bold text-primary">20+</span>
                     <span className="text-sm text-slate-500">Happy Clients</span>
                   </div>
                   <div>
                     <span className="block text-3xl font-bold text-primary">100%</span>
                     <span className="text-sm text-slate-500">Success Rate</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;