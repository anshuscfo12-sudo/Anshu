import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Enterprise CRM App",
    category: "Appsheet",
    description: "A comprehensive CRM built on Appsheet to track leads, manage customer interactions, and automate follow-ups.",
    image: "https://picsum.photos/id/1/600/400",
    tags: ["Appsheet", "Google Sheets", "Automation"]
  },
  {
    title: "Leave Management System",
    category: "Automation",
    description: "Automated leave request portal with manager approval workflows and calendar integration.",
    image: "https://picsum.photos/id/20/600/400",
    tags: ["Google Forms", "App Script", "Email API"]
  },
  {
    title: "Task Management Suite",
    category: "Productivity",
    description: "Custom task tracker with priority sorting, deadline alerts, and team collaboration features.",
    image: "https://picsum.photos/id/3/600/400",
    tags: ["Appsheet", "UX Design", "Workflow"]
  },
  {
    title: "Finance Dashboard",
    category: "Analytics",
    description: "Interactive dashboard visualizing cash flow, expenses, and revenue projections for SMEs.",
    image: "https://picsum.photos/id/48/600/400",
    tags: ["Looker Studio", "Data Viz", "Finance"]
  },
  {
    title: "Business Auto-Workflows",
    category: "Automation",
    description: "End-to-end business process automation connecting Slack, Trello, and Gmail.",
    image: "https://picsum.photos/id/60/600/400",
    tags: ["Zapier", "Make", "API Integration"]
  },
  {
    title: "AI Support Agent",
    category: "AI Development",
    description: "Experimental AI chatbot capable of answering FAQ based on company documentation.",
    image: "https://picsum.photos/id/119/600/400",
    tags: ["Gemini API", "Python", "NLP"]
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h3 className="text-primary font-semibold uppercase tracking-wide mb-2">My Portfolio</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-dark">Featured Projects</h2>
            <p className="text-slate-500 mt-4">A selection of my recent work in automation, app development, and data analysis.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-blue-800 transition-colors">
            View Github <Github size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/0 transition-all z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-secondary uppercase tracking-wider">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-50 text-slate-500 text-xs rounded border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-blue-800 transition-colors">
                  View Case Study <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button className="inline-flex items-center gap-2 text-primary font-semibold hover:text-blue-800 transition-colors border border-blue-200 px-6 py-3 rounded-full">
            View Github <Github size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;