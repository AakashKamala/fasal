// import React, { useState, useEffect, useRef } from 'react';
// import { Send, Smartphone } from 'lucide-react';

// interface Message {
//   id: number;
//   text: string;
//   isUser: boolean;
//   timestamp: Date;
// }

// const predefinedConversation: Omit<Message, 'id' | 'timestamp'>[] = [
//   { 
//     text: "My tomato plants have yellow leaves. What could be wrong?", 
//     isUser: true 
//   },
//   { 
//     text: "Yellow leaves on tomato plants often indicate a nutrient deficiency, most likely nitrogen. Based on your soil sensor data, your nitrogen levels are indeed low (14 ppm). I recommend applying a nitrogen-rich fertilizer within the next 2 days.", 
//     isUser: false 
//   },
//   { 
//     text: "When should I water my wheat crop next?", 
//     isUser: true 
//   },
//   { 
//     text: "Your soil moisture sensors show adequate moisture levels (38%). With the forecasted rain tomorrow (70% chance, 12mm expected), I recommend waiting until Friday before watering again. This will optimize water usage and prevent waterlogging.", 
//     isUser: false 
//   }
// ];

// const ChatDemo: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [inputValue, setInputValue] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     // Start the demo conversation
//     const timer = setTimeout(() => {
//       if (currentMessageIndex < predefinedConversation.length) {
//         const message = predefinedConversation[currentMessageIndex];
        
//         if (!message.isUser) {
//           setIsTyping(true);
//           setTimeout(() => {
//             setIsTyping(false);
//             addMessage(message.text, message.isUser);
//             setCurrentMessageIndex(prev => prev + 1);
//           }, 1500);
//         } else {
//           addMessage(message.text, message.isUser);
//           setCurrentMessageIndex(prev => prev + 1);
//         }
//       }
//     }, currentMessageIndex === 0 ? 1000 : 2000);

//     return () => clearTimeout(timer);
//   }, [currentMessageIndex]);

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, isTyping]);

//   const addMessage = (text: string, isUser: boolean) => {
//     setMessages(prev => [
//       ...prev, 
//       { 
//         id: Date.now(), 
//         text, 
//         isUser, 
//         timestamp: new Date() 
//       }
//     ]);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (inputValue.trim()) {
//       addMessage(inputValue, true);
//       setInputValue('');
      
//       // Simulate response
//       setIsTyping(true);
//       setTimeout(() => {
//         setIsTyping(false);
//         addMessage("I'll analyze your field data and get back to you with personalized advice shortly.", false);
//       }, 2000);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
//       <div className="bg-green-700 text-white px-4 py-3 flex items-center justify-between">
//         <div className="flex items-center space-x-2">
//           <Smartphone size={20} />
//           <span className="font-medium">Fasal Chat-Assist</span>
//         </div>
//         <div className="flex space-x-1">
//           <div className="h-2 w-2 rounded-full bg-green-300"></div>
//           <div className="h-2 w-2 rounded-full bg-green-300"></div>
//           <div className="h-2 w-2 rounded-full bg-green-300"></div>
//         </div>
//       </div>
      
//       <div className="h-96 overflow-y-auto p-4 bg-gray-50">
//         <div className="space-y-4">
//           {messages.map(message => (
//             <div 
//               key={message.id} 
//               className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
//             >
//               <div 
//                 className={`max-w-xs md:max-w-sm rounded-lg px-4 py-2 ${
//                   message.isUser 
//                     ? 'bg-green-600 text-white rounded-br-none' 
//                     : 'bg-white border border-gray-200 text-gray-700 rounded-bl-none'
//                 }`}
//               >
//                 <p className="text-sm">{message.text}</p>
//                 <div className={`text-xs mt-1 ${message.isUser ? 'text-green-200' : 'text-gray-500'}`}>
//                   {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                 </div>
//               </div>
//             </div>
//           ))}
          
//           {isTyping && (
//             <div className="flex justify-start">
//               <div className="bg-white border border-gray-200 rounded-lg rounded-bl-none px-4 py-2">
//                 <div className="flex space-x-1">
//                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
//                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
//                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
//                 </div>
//               </div>
//             </div>
//           )}
//           <div ref={messagesEndRef} />
//         </div>
//       </div>
      
//       <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 flex">
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           placeholder="Ask about your crops..."
//           className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//         />
//         <button 
//           type="submit"
//           className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition-colors"
//         >
//           <Send size={20} />
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ChatDemo;







































import React, { useState, useEffect, useRef } from 'react';
import { Send, Smartphone } from 'lucide-react';
import axios from 'axios';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const predefinedConversation: Omit<Message, 'id' | 'timestamp'>[] = [
  { 
    text: "My tomato plants have yellow leaves. What could be wrong?", 
    isUser: true 
  },
  { 
    text: "Yellow leaves on tomato plants often indicate a nutrient deficiency, most likely nitrogen. Based on your soil sensor data, your nitrogen levels are indeed low (14 ppm). I recommend applying a nitrogen-rich fertilizer within the next 2 days.", 
    isUser: false 
  },
  { 
    text: "When should I water my wheat crop next?", 
    isUser: true 
  },
  { 
    text: "Your soil moisture sensors show adequate moisture levels (38%). With the forecasted rain tomorrow (70% chance, 12mm expected), I recommend waiting until Friday before watering again. This will optimize water usage and prevent waterlogging.", 
    isUser: false 
  }
];

const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Start the demo conversation
    const timer = setTimeout(() => {
      if (currentMessageIndex < predefinedConversation.length) {
        const message = predefinedConversation[currentMessageIndex];
        
        if (!message.isUser) {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            addMessage(message.text, message.isUser);
            setCurrentMessageIndex(prev => prev + 1);
          }, 1500);
        } else {
          addMessage(message.text, message.isUser);
          setCurrentMessageIndex(prev => prev + 1);
        }
      }
    }, currentMessageIndex === 0 ? 1000 : 2000);

    return () => clearTimeout(timer);
  }, [currentMessageIndex]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const addMessage = (text: string, isUser: boolean) => {
    setMessages(prev => [
      ...prev, 
      { 
        id: Date.now(), 
        text, 
        isUser, 
        timestamp: new Date() 
      }
    ]);
  };

  const handleSubmit = async (e: React.FormEvent | React.KeyboardEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addMessage(inputValue, true);
      const prompt = inputValue;
      setInputValue('');
      
      // Simulate response
      setIsTyping(true);

      const response = await axios.post("http://localhost:9003/chat", {
        "prompt": prompt
      })

      setIsTyping(false);
      addMessage(response.data, false);

      // setTimeout(() => {
      //   setIsTyping(false);
      //   addMessage("I'll analyze your field data and get back to you with personalized advice shortly.", false);
      // }, 2000);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
      <div className="bg-green-700 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Smartphone size={20} />
          <span className="font-medium">Fasal Chat-Assist</span>
        </div>
        <div className="flex space-x-1">
          <div className="h-2 w-2 rounded-full bg-green-300"></div>
          <div className="h-2 w-2 rounded-full bg-green-300"></div>
          <div className="h-2 w-2 rounded-full bg-green-300"></div>
        </div>
      </div>
      
      <div 
        ref={chatContainerRef}
        className="h-96 overflow-y-auto p-4 bg-gray-50"
      >
        <div className="space-y-4">
          {messages.map(message => (
            <div 
              key={message.id} 
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-xs md:max-w-sm rounded-lg px-4 py-2 ${
                  message.isUser 
                    ? 'bg-green-600 text-white rounded-br-none' 
                    : 'bg-white border border-gray-200 text-gray-700 rounded-bl-none'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <div className={`text-xs mt-1 ${message.isUser ? 'text-green-200' : 'text-gray-500'}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 rounded-lg rounded-bl-none px-4 py-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-200 flex">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
          placeholder="Ask about your crops..."
          className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <button 
          onClick={handleSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition-colors"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatDemo;