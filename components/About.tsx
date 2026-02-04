import React from 'react';
import { Heart, BookOpen, Users, Globe, ArrowUpRight } from 'lucide-react';
import { FocusArea } from '../types';
import { motion } from 'framer-motion';

const focusAreas: FocusArea[] = [
  { title: "Healthcare Accessibility", icon: Heart },
  { title: "Education Pipeline", icon: BookOpen },
  { title: "Social Impact Delivery", icon: Users },
  { title: "Global Pathways", icon: Globe },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-navy-950 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-medical-900/20 rounded-full blur-[128px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-medical-500"></span>
              <h4 className="text-medical-400 font-bold uppercase tracking-widest text-xs">About The Chairman</h4>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
              Transforming Infrastructure for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-400 to-medical-200">Social Impact</span>
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed font-light text-gray-400">
              <p>
                Dr. Ali Yahya serves as CEO of <strong className="text-white font-medium">YQ Group</strong> and <strong className="text-white font-medium">Qadir Ali Hospital</strong>, 
                helping expand access to quality, patient-centered care in Layyah and South Punjab.
              </p>
              <p>
                He also supports community welfare through <strong className="text-white font-medium">DYPWS</strong> (Finance Secretary) and workforce development 
                through <strong className="text-white font-medium">Manmatrix</strong> (Director), aligning healthcare, education, and employability with measurable community impact.
              </p>
            </div>

            <div className="mt-12 pt-10 border-t border-white/10 flex gap-12">
              <div>
                <span className="block text-4xl font-display font-bold text-white mb-1">15+</span>
                <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Years of Leadership</span>
              </div>
              <div>
                <span className="block text-4xl font-display font-bold text-white mb-1">1k+</span>
                <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Students Enrolled</span>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group cursor-default hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-medical-400 group-hover:bg-medical-500 group-hover:text-white transition-colors duration-300">
                      <area.icon size={20} />
                    </div>
                    <ArrowUpRight size={16} className="text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-semibold text-white leading-snug">{area.title}</h3>
                </motion.div>
              ))}
            </div>
            
            {/* Quote Card */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7, delay: 0.4 }}
               className="bg-gradient-to-br from-medical-900/50 to-navy-900/50 rounded-2xl p-8 border border-medical-500/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-medical-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <p className="font-display font-light text-lg text-gray-200 relative z-10 italic">"Our mission goes beyond business; it is about building a resilient ecosystem where healthcare and education uplift every individual."</p>
              <div className="flex items-center gap-3 mt-6">
                <div className="w-8 h-px bg-medical-500"></div>
                <p className="text-white text-sm font-bold uppercase tracking-widest">Dr. Ali Yahya</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;