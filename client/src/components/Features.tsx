import React from 'react';
import { MessageSquare, CloudLightning, Droplets, Sprout, SunMoon, LineChart } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-green-600 mb-4 w-12 h-12 flex items-center justify-center bg-green-50 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare size={24} />,
      title: "Vernacular Support",
      description: "Get advice in 8+ local languages, making complex farming concepts easy to understand in your native tongue.",
      delay: 100
    },
    {
      icon: <CloudLightning size={24} />,
      title: "Weather Alerts",
      description: "Receive timely alerts about upcoming weather changes that could affect your crops, with specific field recommendations.",
      delay: 200
    },
    {
      icon: <Droplets size={24} />,
      title: "Irrigation Guidance",
      description: "Optimize water usage with personalized irrigation schedules based on soil moisture sensors and weather forecasts.",
      delay: 300
    },
    {
      icon: <Sprout size={24} />,
      title: "Crop Health Diagnosis",
      description: "Upload photos of your crops to get instant disease identification and treatment recommendations.",
      delay: 400
    },
    {
      icon: <SunMoon size={24} />,
      title: "Seasonal Planning",
      description: "Get AI-powered recommendations for crop selection and rotation based on your soil conditions and market trends.",
      delay: 500
    },
    {
      icon: <LineChart size={24} />,
      title: "Yield Predictions",
      description: "Access data-driven yield forecasts to help plan harvesting and market timing for maximum profits.",
      delay: 600
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How Fasal Chat-Assist Helps You</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized farming advice powered by real-time sensor data and agricultural expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;