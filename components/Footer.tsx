import React from 'react';
import { Phone, Mail, MapPin, Building } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-navy-950 text-white border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-white">
              YQ<span className="text-medical-500">GROUP</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Leading with quality and community impact across healthcare,
              education, and workforce development.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+92606410096"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <Phone
                  size={18}
                  className="text-medical-500 group-hover:text-medical-400"
                />
                <span>+92-(606) 410096</span>
              </a>
              <a
                href="mailto:info@yqgroup.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <Mail
                  size={18}
                  className="text-medical-500 group-hover:text-medical-400"
                />
                <span>info@yqgroup.com</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Locations
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin
                  size={18}
                  className="text-medical-500 mt-1 flex-shrink-0"
                />
                <span>31200 Layyah, Pakistan</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <Building
                  size={18}
                  className="text-medical-500 mt-1 flex-shrink-0"
                />
                <div>
                  <span className="block text-white font-medium text-sm">
                    Head Office (QAH)
                  </span>
                  <span>Layyah, Punjab</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-medical-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#ventures"
                  className="hover:text-medical-500 transition-colors"
                >
                  Ventures
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  className="hover:text-medical-500 transition-colors"
                >
                  History
                </a>
              </li>
              <li>
                <a
                  href="#latest"
                  className="hover:text-medical-500 transition-colors"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Yahya Qadir Group.</p>
          <p className="mt-2 md:mt-0">Dr. Ali Yahya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
