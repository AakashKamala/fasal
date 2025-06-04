import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Do I need special equipment to use Fasal Chat-Assist?",
    answer: "You'll need our soil sensors to get the full benefit of personalized recommendations. However, you can still use the chat assistant for general farming advice without sensors. We offer affordable sensor kits with easy installation guides in multiple languages."
  },
  {
    question: "Which languages are supported?",
    answer: "We currently support English, Hindi, Tamil, Telugu, Kannada, Malayalam, Punjabi, Bengali, Marathi, and Gujarati. We're constantly adding more languages to serve farmers across all regions of India."
  },
  {
    question: "Can I use Fasal Chat-Assist without internet?",
    answer: "The app requires internet connection to process your questions and provide accurate answers. However, we've optimized it to work on low-bandwidth connections, and some basic features are available offline once data is downloaded."
  },
  {
    question: "How accurate is the crop disease identification?",
    answer: "Our AI has been trained on millions of crop images and can identify over 50 common crop diseases with 92% accuracy. For unusual cases, your query may be reviewed by our agricultural experts who will respond within 24 hours."
  },
  {
    question: "Is my farm data kept private?",
    answer: "Yes, your farm data is kept strictly confidential. We use industry-standard encryption to protect your information. Your data is only used to provide you with personalized recommendations and, with your permission, for improving our AI models."
  },
  {
    question: "What if I'm growing a less common crop?",
    answer: "We support over 40 crops commonly grown in India. If you're growing something not in our database, you can still ask general questions, and we're constantly expanding our crop database based on farmer requests."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about Fasal Chat-Assist
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  {activeIndex === index ? (
                    <ChevronUp className="text-green-700" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500" size={20} />
                  )}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-96 py-4' : 'max-h-0 py-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;