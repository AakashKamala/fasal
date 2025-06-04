import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  crop: string;
  quote: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Patel",
    location: "Gujarat",
    crop: "Cotton",
    quote: "Fasal Chat-Assist helped me save my cotton crop during an unexpected pest attack. I sent photos through the app and got immediate treatment advice in Gujarati. Saved at least 30% of my yield!",
    image: "https://images.pexels.com/photos/2382895/pexels-photo-2382895.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 5
  },
  {
    id: 2,
    name: "Lakshmi Devi",
    location: "Andhra Pradesh",
    crop: "Rice",
    quote: "The irrigation recommendations are so precise! The app told me exactly when to water my paddy fields based on soil moisture readings. I've reduced my water usage by 25% while maintaining the same yield.",
    image: "https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 5
  },
  {
    id: 3,
    name: "Gurpreet Singh",
    location: "Punjab",
    crop: "Wheat",
    quote: "Being able to chat in Punjabi makes all the difference. The seasonal planning advice helped me choose the right wheat variety for my soil type. My yield increased by 15% compared to last year.",
    image: "https://images.pexels.com/photos/1195548/pexels-photo-1195548.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Farmers Are Saying</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real success stories from farmers across India
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="min-w-full px-4">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                      <div className="md:flex">
                        <div className="md:flex-shrink-0 h-56 md:h-auto md:w-48">
                          <img 
                            className="h-full w-full object-cover md:h-full md:w-full" 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                          />
                        </div>
                        <div className="p-8">
                          <div className="flex items-center mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={20} 
                                className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                              />
                            ))}
                          </div>
                          <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                          <div className="flex items-center">
                            <div>
                              <p className="text-gray-800 font-semibold">{testimonial.name}</p>
                              <p className="text-gray-500 text-sm">{testimonial.location} • {testimonial.crop} Farmer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md text-green-700 hover:text-green-800 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md text-green-700 hover:text-green-800 focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-green-600' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;