import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section id="get-started" className="py-16 bg-green-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Farming?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of farmers who are increasing yields, saving resources, and farming smarter with Fasal Chat-Assist.
          </p>
          
          <div className="bg-white rounded-lg shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-green-700 font-bold text-4xl mb-2">₹0</div>
                <h3 className="text-gray-800 font-semibold text-xl mb-2">Basic</h3>
                <p className="text-gray-600 mb-4">General farming advice in your language</p>
                <ul className="text-left text-gray-700 mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Chat assistance
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Weather alerts
                  </li>
                  <li className="flex items-center text-gray-400">
                    <span className="mr-2">✗</span> Sensor integration
                  </li>
                </ul>
                <a href="#" className="inline-block bg-gray-100 text-green-700 font-medium py-2 px-6 rounded-md hover:bg-gray-200 transition-colors">
                  Start Free
                </a>
              </div>
              
              <div className="text-center transform scale-105 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-gray-800 text-[6px] font-bold -my-2 px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <div className="text-green-700 font-bold text-4xl mb-2">₹999</div>
                <h3 className="text-gray-800 font-semibold text-xl mb-2">Standard</h3>
                <p className="text-gray-600 mb-4">Personalized advice with 2 sensors</p>
                <ul className="text-left text-gray-700 mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> All Basic features
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 2 Field sensors
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Crop disease detection
                  </li>
                </ul>
                <a href="#" className="inline-block bg-green-600 text-white font-medium py-2 px-6 rounded-md shadow-md hover:bg-green-700 transition-colors">
                  Get Started
                </a>
              </div>
              
              <div className="text-center">
                <div className="text-green-700 font-bold text-4xl mb-2">₹2499</div>
                <h3 className="text-gray-800 font-semibold text-xl mb-2">Premium</h3>
                <p className="text-gray-600 mb-4">Complete farm management system</p>
                <ul className="text-left text-gray-700 mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> All Standard features
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 5 Field sensors
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Market predictions
                  </li>
                </ul>
                <a href="#" className="inline-block bg-gray-100 text-green-700 font-medium py-2 px-6 rounded-md hover:bg-gray-200 transition-colors">
                  Upgrade
                </a>
              </div>
            </div>
          </div>
          
          <p className="mt-8 text-green-100 text-sm">
            All plans include a 30-day money-back guarantee. Sensors are yours to keep.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;