import React from 'react';
import { TimelineEvent } from '../types';
import { motion } from 'framer-motion';

const events: TimelineEvent[] = [
  {
    year: "2008",
    title: "Qadir Ali Hospital Founded",
    description: "Launch of the 55-bed facility marking the beginning of our healthcare commitment."
  },
  {
    year: "2020",
    title: "DYPWS Established",
    description: "Formation of the Dr. Yahya Professional Welfare Society to formalize community welfare efforts."
  },
  {
    year: "2022",
    title: "DYIMS Launched",
    description: "Inauguration of Dr. Yahya Institute of Medical Sciences to bridge the education gap."
  },
  {
    year: "2024",
    title: "Manmatrix Introduced",
    description: "Expansion into workforce development to close skills gaps globally."
  },
  {
    year: "2025",
    title: "Planned Expansions",
    description: "Telemedicine integration, pediatric expansion, and critical care upgrades."
  }
];

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-32 bg-navy-950 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-navy-950"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-medical-400 font-bold uppercase tracking-widest text-xs mb-3 block">Our Journey</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Legacy of Growth</h2>
        </div>

        <div className="relative">
          {/* Central Line - Absolute position ensuring it stays centered */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                {/* Desktop: Left content for even items */}
                <div className={`hidden md:block text-right ${index % 2 === 0 ? 'order-1' : 'order-3 invisible'}`}>
                  <span className="text-5xl font-display font-bold text-white/10 absolute top-0 right-8 -mt-6 select-none">{event.year}</span>
                  <div className="relative z-10">
                    <span className="text-medical-400 font-bold text-lg mb-1 block">{event.year}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm ml-auto">{event.description}</p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 flex items-center justify-center transform -translate-x-1/2 z-20 order-2">
                  <div className="w-4 h-4 rounded-full bg-navy-900 border-2 border-medical-500 shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
                </div>

                {/* Desktop: Right content for odd items */}
                <div className={`pl-12 md:pl-0 text-left ${index % 2 !== 0 ? 'order-1 md:order-3' : 'order-3 md:order-3 md:invisible'}`}>
                  {/* Mobile Only Year */}
                  <span className="md:hidden text-medical-400 font-bold text-lg mb-1 block">{event.year}</span>
                  
                  <div className="relative z-10">
                    <span className="hidden md:block text-medical-400 font-bold text-lg mb-1">{event.year}</span>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;