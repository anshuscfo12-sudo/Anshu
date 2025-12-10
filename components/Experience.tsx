import React from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Appsheet Developer",
    company: "Freelance / Contract",
    period: "2023 - Present",
    description: [
      "Developed 15+ custom mobile and web applications using Appsheet for inventory, HR, and sales.",
      "Integrated Google Workspace automations to reduce manual data entry by 40%.",
      "Designed user-friendly interfaces for field teams to report data in real-time."
    ]
  },
  {
    role: "Business Automation Expert",
    company: "Tech Solutions Inc.",
    period: "2022 - 2023",
    description: [
      "Implemented workflow automations using Zapier and Make.com connecting CRM to Email Marketing.",
      "Audited existing business processes and provided strategic roadmaps for digital transformation.",
      "Trained internal teams on using automated dashboard tools."
    ]
  },
  {
    role: "Data Management Executive",
    company: "DataCorp Ltd.",
    period: "2021 - 2022",
    description: [
      "Managed large datasets in Google Sheets and Excel, ensuring 99.9% data accuracy.",
      "Created automated reporting templates that saved the finance team 10 hours per week.",
      "Collaborated with IT to clean and migrate legacy data to modern cloud databases."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-primary font-semibold uppercase tracking-wide mb-2">My Journey</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-dark">Professional Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop Center, Mobile Left) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
              <div className="md:hidden absolute left-2 top-0 bottom-0 w-0.5 bg-blue-200"></div>

              <div className={`flex flex-col md:flex-row items-center justify-between mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Empty side for layout balance */}
                <div className="hidden md:block w-5/12"></div>

                {/* Center Icon */}
                <div className="absolute left-2 md:left-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white shadow-md transform md:-translate-x-1/2 flex items-center justify-center z-10">
                  <Briefcase size={14} className="text-white" />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-5/12 pl-8 md:pl-0">
                  <div className={`bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative ${index % 2 === 0 ? 'md:text-left' : 'md:text-left'}`}>
                    {/* Arrow for desktop */}
                    <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-t border-r border-slate-100 transform rotate-45 ${index % 2 === 0 ? '-left-2 border-r-0 border-t-0 border-b border-l shadow-[-2px_2px_2px_rgba(0,0,0,0.02)]' : '-right-2 shadow-[2px_-2px_2px_rgba(0,0,0,0.02)]'}`}></div>

                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full mb-3">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-dark mb-1">{exp.role}</h3>
                    <h4 className="text-slate-500 font-medium mb-4">{exp.company}</h4>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;