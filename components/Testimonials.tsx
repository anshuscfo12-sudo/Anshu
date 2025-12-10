import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Anshu completely transformed how we handle our inventory. The Appsheet app he built saved us 20 hours a week.",
    author: "Rajesh Kumar",
    role: "Operations Manager, RetailCo"
  },
  {
    text: "The automated dashboards provide exactly the visibility we needed. Professional, fast, and easy to work with.",
    author: "Sarah Jenkins",
    role: "CEO, TechFlow"
  },
  {
    text: "I didn't realize how much time we wasted on manual data entry until Anshu automated it. Highly recommended!",
    author: "Mike Davidson",
    role: "Director, LogisticsHub"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-dark mb-12">Client Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
              <Quote className="text-blue-200 mb-4 transform rotate-180" size={40} />
              <p className="text-slate-600 mb-6 italic flex-grow">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-dark text-sm">{t.author}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;