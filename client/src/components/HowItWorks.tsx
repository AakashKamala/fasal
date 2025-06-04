import React, { useRef, useEffect, useState } from 'react';
import { Cpu, Cloud, SmartphoneCharging } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
  isActive: boolean;
}

const Step: React.FC<StepProps> = ({ icon, title, description, stepNumber, isActive }) => {
  return (
    <div className={`relative flex items-start ${isActive ? 'opacity-100' : 'opacity-50'} transition-opacity duration-500`}>
      <div className="flex flex-col items-center mr-4">
        <div className={`w-10 h-10 flex items-center justify-center rounded-full ${isActive ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'} font-semibold transition-colors duration-500`}>
          {stepNumber}
        </div>
        {stepNumber < 3 && (
          <div className="w-1 bg-gray-200 h-full mt-2"></div>
        )}
      </div>
      <div className="pt-1 pb-8">
        <div className={`text-green-600 mb-2 w-12 h-12 flex items-center justify-center bg-green-50 rounded-full`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 max-w-md">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: <Cpu size={24} />,
      title: "Connect Your Field Sensors",
      description: "Easily install our weather-proof sensors in your fields to monitor soil moisture, temperature, humidity, and more. The setup takes just minutes.",
      stepNumber: 1
    },
    {
      icon: <Cloud size={24} />,
      title: "AI Analyzes Your Farm Data",
      description: "Our AI system processes your field data along with weather forecasts, crop databases, and agricultural research to generate personalized insights.",
      stepNumber: 2
    },
    {
      icon: <SmartphoneCharging size={24} />,
      title: "Chat in Your Language",
      description: "Simply ask questions about your crops and fields in your preferred language. Get clear, actionable advice customized to your specific farming conditions.",
      stepNumber: 3
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.7 && sectionTop > -sectionHeight * 0.3) {
        const scrollProgress = (windowHeight * 0.7 - sectionTop) / (windowHeight * 0.5);
        const step = Math.min(Math.ceil(scrollProgress * 3), 3);
        setActiveStep(step);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="how-it-works" className="py-16 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple three-step process to get personalized farming advice
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {steps.map((step) => (
            <Step
              key={step.stepNumber}
              icon={step.icon}
              title={step.title}
              description={step.description}
              stepNumber={step.stepNumber}
              isActive={step.stepNumber <= activeStep}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;