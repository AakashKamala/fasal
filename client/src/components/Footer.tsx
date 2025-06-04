import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-green-400">Fasal</span>Chat
            </div>
            <p className="mb-4 text-gray-400">
              Empowering farmers with personalized, language-accessible AI assistance for smarter, more profitable farming.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Crop Calendar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Disease Database</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Market Prices</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Weather Forecast</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Government Schemes</a></li>
            </ul>
          </div>

          <div id="contact">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span>support@fasalchat.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span>Toll-Free: 1800-FASAL-HELP</span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="mb-2 text-sm">Select Language:</p>
              <LanguageSelector />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2025 Fasal Chat-Assist. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Data Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;