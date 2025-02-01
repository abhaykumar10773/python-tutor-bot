import React, { useState } from 'react';
import { Bot } from 'lucide-react'; 
import { generateContent } from '../service/service.js';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

function LearnPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi there! 👋 I'm your Python tutor. What would you like to learn today? We can start with:\n\n1. Print your first 'Hello, World!'\n2. Learn about numbers and math\n3. Play with variables\n\nJust tell me what interests you!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) 
        return;
    // Add the user's message to the state
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    try {
      // Call the Gemini API via the generateContent function
      const assistantMessage = await generateContent(input);
      setIsTyping(false);
      setMessages([...newMessages, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      setIsTyping(false);
      setMessages([...newMessages,{ role: 'assistant', content: "Oops! Something went wrong." }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Chat Messages */}
       
        <div className="h-[600px] overflow-y-auto p-4 space-y-4">
        
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <div className="flex-shrink-0 mr-3">
                  <Bot className="h-8 w-8 text-purple-600" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.role === 'user'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100'
                }`}
              >
                <pre className="whitespace-pre-wrap font-sans">
                  {message.content}
                </pre>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center space-x-2 text-gray-500">
              <Bot className="h-6 w-6" />
              <span>Typing...</span>
            </div>
          )} 
        </div>
       
        {/* Input Form */}
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Python! For example: 'How do I print Hello World?'"
              className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    
    </div>
  );
}

export default LearnPage;
