import React from 'react';
import { Venture } from '../types';
import {
  Building2,
  Stethoscope,
  GraduationCap,
  Briefcase,
  HeartHandshake,
  ArrowUpRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

const Ventures: React.FC = () => {
  return (
    <section id="ventures" className="py-32 bg-navy-900 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-medical-400 font-bold uppercase tracking-widest text-xs mb-2 block">
              Our Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Strategic Ventures
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block text-gray-400 max-w-sm text-right text-sm"
          >
            A diverse ecosystem of organizations driving growth in Pakistan.
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* Card 1: YQ Group (Parent) - Large Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-medical-600 to-navy-800 rounded-3xl p-10 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-white/10"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-16 -mt-16 group-hover:bg-white/20 transition-colors"></div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl text-white">
                  <Building2 size={32} />
                </div>
                <ArrowUpRight
                  className="text-white/50 group-hover:text-white transition-colors"
                  size={28}
                />
              </div>

              <div className="mt-8">
                <h3 className="text-3xl font-display font-bold text-white mb-2">
                  Yahya Qadir Group
                </h3>
                <p className="text-medical-100 mb-6 max-w-md">
                  A Pakistan-rooted conglomerate working across healthcare,
                  education, workforce development, and social welfare.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                    <p className="text-xs text-medical-300 uppercase font-bold mb-1">
                      Vision
                    </p>
                    <p className="text-sm text-white/90">
                      Empower communities with quality healthcare and jobs.
                    </p>
                  </div>
                  <div className="bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/5">
                    <p className="text-xs text-medical-300 uppercase font-bold mb-1">
                      Mission
                    </p>
                    <p className="text-sm text-white/90">
                      Transform lives through accessible welfare.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Hospital - Vertical */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:row-span-2 glass-card rounded-3xl p-8 group hover:bg-white/10 transition-all duration-300 flex flex-col"
          >
            <div className="p-3 bg-navy-800 rounded-xl w-fit text-medical-400 mb-6 group-hover:scale-110 transition-transform">
              <Stethoscope size={24} />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-1">
              Qadir Ali Hospital
            </h3>
            <span className="text-xs font-bold text-medical-400 uppercase tracking-wider mb-4">
              CEO
            </span>
            <p className="text-gray-400 text-sm mb-6 flex-grow">
              Patient-centered care, 24/7 Emergency, and Diagnostics. Layyah’s
              largest private hospital.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-300">
                55 Beds
              </span>
              <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-300">
                5 OTs
              </span>
            </div>
          </motion.div>

          {/* Card 3: Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 group hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-navy-800 rounded-xl text-medical-400 group-hover:scale-110 transition-transform">
                <GraduationCap size={24} />
              </div>
              <span className="text-2xl font-bold text-white">1k+</span>
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2">
              DYIMS
            </h3>
            <span className="text-xs font-bold text-medical-400 uppercase tracking-wider mb-4">
              CEO
            </span>
            <p className="text-sm text-gray-400 mb-4">
              Flagship institution for Allied Health Sciences & Nursing.
            </p>
            <div className="text-xs text-medical-400 font-medium">
              BS Allied Health • Pharmacy
            </div>
          </motion.div>

          {/* Card 4: Manmatrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-3xl p-8 group hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-navy-800 rounded-xl text-medical-400 group-hover:scale-110 transition-transform">
                <Briefcase size={24} />
              </div>
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2">
              Manmatrix
            </h3>
            <span className="text-xs font-bold text-medical-400 uppercase tracking-wider mb-4">
              Director
            </span>
            <p className="text-sm text-gray-400">
              Closing the skills gap via training & global deployment.
            </p>
          </motion.div>

          {/* Card 5: DYPWS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card rounded-3xl p-8 group hover:bg-white/10 transition-all duration-300 md:col-span-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-navy-800 rounded-xl text-medical-400 group-hover:scale-110 transition-transform">
                <HeartHandshake size={24} />
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                DYPWS
              </h3>
            </div>
            <span className="text-xs font-bold text-medical-400 uppercase tracking-wider mb-4">
              Finance Secretary
            </span>
            <p className="text-sm text-gray-400">
              Non-profit arm delivering free medical camps & scholarships.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Ventures;
