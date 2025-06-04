import React, { useState, useEffect } from 'react';
import ChatDemo from './ChatDemo';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className={`w-full lg:w-1/2 mb-10 lg:mb-0 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Your Farming Assistant That Speaks Your Language
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get personalized crop advice, weather alerts, and field insights in your preferred language. 
              Powered by real-time sensor data and AI to help you farm smarter.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#get-started" 
                className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-8 rounded-md shadow-md transition-all transform hover:scale-105 text-center"
              >
                Get Started Free
              </a>
              <a 
                href="#how-it-works" 
                className="border border-green-700 text-green-700 hover:bg-green-50 font-medium py-3 px-8 rounded-md transition-all text-center"
              >
                See How It Works
              </a>
            </div>
            <div className="mt-8 flex items-center space-x-2 text-sm text-gray-500">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                10,000+ Farmers
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                8 Languages
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                24/7 Support
              </span>
            </div>
          </div>
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <ChatDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;