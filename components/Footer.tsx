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
            {/* Social Media Icons */}
            <div className="flex gap-3 mt-6">
              {[
                {
                  icon: 'fa-linkedin-in',
                  href: 'https://www.linkedin.com/in/draliyahya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                },
                { icon: 'fa-x-twitter', href: 'https://x.com/Aliyahyach' },
                {
                  icon: 'fa-facebook-f',
                  href: 'https://www.facebook.com/share/17a8PBe7a3/',
                },
                {
                  icon: 'fa-instagram',
                  href: 'https://www.instagram.com/aliyahyach?igsh=NmFuYW8yZXNqczhr',
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:bg-medical-500/20 hover:text-medical-400 hover:border-medical-500/30 hover:shadow-[0_0_10px_rgba(20,184,166,0.3)]"
                >
                  <i
                    className={`fa-brands ${social.icon.includes('envelope') ? 'fa-solid' : ''} ${social.icon} text-sm`}
                  ></i>
                </a>
              ))}
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
