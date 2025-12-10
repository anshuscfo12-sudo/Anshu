import React from 'react';
import { Settings, Database, BarChart3, Bot } from 'lucide-react';

const services = [
  {
    icon: <Settings size={32} />,
    title: "Business Automation",
    description: "Streamline repetitive tasks and connect your favorite apps (Slack, Trello, Gmail) to work together seamlessly."
  },
  {
    icon: <Database size={32} />,
    title: "Appsheet Development",
    description: "Custom no-code mobile and web applications tailored to your specific business data and workflows."
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Dashboard & Analytics",
    description: "Transform raw data into visual insights with Looker Studio and interactive Google Sheet dashboards."
  },
  {
    icon: <Bot size={32} />,
    title: "Google Sheets Solutions",
    description: "Advanced formulas, App Script automation, and custom templates to power your backend operations."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-dark text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500 blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-500 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-blue-400 font-semibold uppercase tracking-wide mb-2">What I Do</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Services & Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors group">
              <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;