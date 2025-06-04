import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-green-700">
            <span className="text-green-800">Fasal</span>Chat
          </span>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-green-700 transition-colors">Features</a>
          <a href="./blog.html" className="text-gray-700 hover:text-green-700 transition-colors">Blogs</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-green-700 transition-colors">How It Works</a>
          <a href="#testimonials" className="text-gray-700 hover:text-green-700 transition-colors">Testimonials</a>
          <a href="#faq" className="text-gray-700 hover:text-green-700 transition-colors">FAQ</a>
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-green-700 transition-colors">
              Resources <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 hidden group-hover:block transition-all">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700">Knowledge Base</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700">Video Tutorials</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700">Case Studies</a>
            </div>
          </div>
          <LanguageSelector />
          <a href="#contact" className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition-colors shadow-md">
            Get Started
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
        <div className="container mx-auto px-4 py-4 space-y-4">
          <a href="#features" className="block text-gray-700 hover:text-green-700 transition-colors">Features</a>
          <a href="./blog.html" className="block text-gray-700 hover:text-green-700 transition-colors">Blogs</a>
          <a href="#how-it-works" className="block text-gray-700 hover:text-green-700 transition-colors">How It Works</a>
          <a href="#testimonials" className="block text-gray-700 hover:text-green-700 transition-colors">Testimonials</a>
          <a href="#faq" className="block text-gray-700 hover:text-green-700 transition-colors">FAQ</a>
          <details className="group">
            <summary className="flex items-center text-gray-700 hover:text-green-700 transition-colors cursor-pointer">
              Resources <ChevronDown className="ml-1 h-4 w-4" />
            </summary>
            <div className="mt-2 pl-4 space-y-2">
              <a href="#" className="block text-gray-700 hover:text-green-700">Knowledge Base</a>
              <a href="#" className="block text-gray-700 hover:text-green-700">Video Tutorials</a>
              <a href="#" className="block text-gray-700 hover:text-green-700">Case Studies</a>
            </div>
          </details>
          <LanguageSelector />
          <a href="#contact" className="block w-full bg-green-700 text-white text-center px-6 py-2 rounded-md hover:bg-green-800 transition-colors shadow-md">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;