import React from 'react';
import { Award, Book, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const LatestNews: React.FC = () => {
  return (
    <section id="latest" className="py-32 bg-navy-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-medical-900/10 via-navy-950 to-navy-950"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-medical-400 font-bold uppercase tracking-widest text-xs mb-3 block">
            Upcoming
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Latest Updates
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group glass-card rounded-3xl overflow-hidden flex flex-col md:flex-row hover:border-medical-500/30 transition-all duration-500"
        >
          {/* Event Image Area */}
          <div className="md:w-5/12 relative min-h-[300px] overflow-hidden">
            <img
              // src="https://placehold.co/600x800/1e3a8a/white?text=CEO+Summit+Karachi"
              src="https://res.cloudinary.com/dcr0te1k4/image/upload/v1770242284/karachi_lp4a1r.jpg"
              alt="CEO Summit Karachi 2026"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-navy-900/40 mix-blend-multiply"></div>
            <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-3 rounded-xl text-center shadow-lg">
              <span className="block text-2xl font-bold leading-none font-display">
                12
              </span>
              <span className="block text-[10px] uppercase tracking-wider font-semibold">
                Feb
              </span>
            </div>
            <div className="absolute bottom-6 left-6 text-white z-10 max-w-xs">
              {/* <p className="font-display italic text-lg leading-snug text-white/90">
                "Turn the Tide: Reimagine Pakistan 2030"
              </p> */}
            </div>
          </div>

          <div className="md:w-7/12 p-10 flex flex-col justify-center bg-navy-900/40">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-medical-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-medical-400">
                Featured Event
              </span>
            </div>

            <h3 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-medical-300 transition-colors">
              CEO Summit Karachi 2026
            </h3>
            <p className="text-gray-400 text-sm mb-8 font-medium">
              Karachi, Pakistan
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-medical-400">
                  <Award size={22} />
                </div>
                <div>
                  <h5 className="font-bold text-white text-sm uppercase tracking-wide mb-1">
                    Role
                  </h5>
                  <p className="text-gray-400 text-sm">
                    Featured as Dr. Ali Yahya — CEO, YQ Group
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-medical-400">
                  <Book size={22} />
                </div>
                <div>
                  <h5 className="font-bold text-white text-sm uppercase tracking-wide mb-1">
                    Highlights
                  </h5>
                  <p className="text-gray-400 text-sm">
                    Book launch of “100 CEOs & Diplomats of Pakistan” and CEO
                    Award Ceremony.
                  </p>
                </div>
              </div>
            </div>

            <button className="w-full md:w-auto self-start px-8 py-4 bg-white text-navy-950 font-bold rounded-full hover:bg-medical-50 transition-colors shadow-lg flex items-center justify-center gap-2 group/btn">
              <span>View Event Details</span>
              <ArrowRight
                size={18}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestNews;
