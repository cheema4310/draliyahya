import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 z-0"></div>
        
        {/* Animated Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-medical-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-blue-900/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
        
        {/* Grain overlay for texture */}
        <div className="absolute inset-0 opacity-[0.03] z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-medical-500/30 bg-medical-500/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-medical-400 animate-pulse"></span>
                <span className="text-medical-300 text-xs font-semibold tracking-widest uppercase">Portfolio 2026</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-white">
                Dr. Ali <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-300 via-white to-medical-200">Yahya.</span>
              </h1>
              
              <div className="h-1 w-20 bg-gradient-to-r from-medical-500 to-transparent rounded-full"></div>

              <h2 className="text-2xl md:text-3xl text-gray-200 font-light tracking-wide">
                CEO, <span className="font-medium text-white">Yahya Qadir Group</span>
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 text-gray-400 text-sm font-medium border-l-2 border-white/10 pl-6"
            >
              <div>
                <p className="text-white">Healthcare</p>
                <p>CEO, Qadir Ali Hospital</p>
              </div>
              <div>
                <p className="text-white">Social Welfare</p>
                <p>Finance Secretary, DYPWS</p>
              </div>
              <div>
                <p className="text-white">Workforce</p>
                <p>Director, Manmatrix</p>
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-300 leading-relaxed max-w-xl font-light"
            >
              Leading with quality and community impact across healthcare, education, and workforce development.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a 
                href="#ventures"
                className="group px-8 py-4 bg-white text-navy-950 font-bold rounded-full transition-all hover:bg-medical-50 flex items-center gap-2 hover:scale-105"
              >
                <span>View Ventures</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-full transition-all backdrop-blur-md hover:border-white/30"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Glass Card Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 p-4 glass-card rounded-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
               {/* Placeholder for Dr. Ali Yahya Portrait */}
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-navy-800 relative group">
                <img 
                  src="https://placehold.co/500x600/1e293b/white?text=Dr.+Ali+Yahya" 
                  alt="Dr. Ali Yahya" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6">
                   <p className="text-white font-display font-bold text-xl">Dr. Ali Yahya</p>
                   <p className="text-medical-400 text-sm">Visionary Leader</p>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 border border-white/10 rounded-full"></div>
            <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-medical-500/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer text-white/30 hover:text-white transition-colors"
        onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;