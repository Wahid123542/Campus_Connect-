import React, { useState, useRef, useEffect } from 'react';
import razorLogo from '../razor.png';

function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hey there! I'm Tusk, your Campus Connect assistant! 🐗 Need help finding events, organizations, or have questions about UArk? Just ask!",
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);
  const chatInputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => { scrollToBottom(); }, [messages]);
  useEffect(() => { if (isChatOpen && chatInputRef.current) chatInputRef.current.focus(); }, [isChatOpen]);

  const getBotResponse = (userMessage) => {
    const msg = userMessage.toLowerCase();
    if (msg.includes('event') || msg.includes('happening') || msg.includes("what's going on")) {
      return "Here are some upcoming events:\n\n🎪 Engineering Career Fair - Jan 20\n🎉 Student Org Fair - Jan 22\n🏀 Razorback Basketball Game - Jan 18\n\nWant details on any of these? Just ask!";
    } else if (msg.includes('career') || msg.includes('job')) {
      return "Great question! We have two career-focused events coming up:\n\n💼 Engineering Career Fair (Jan 20) - Meet top employers\n📝 Resume Workshop (Jan 25) - Get expert feedback\n\nInterested in attending?";
    } else if (msg.includes('organization') || msg.includes('club')) {
      return "We have tons of student organizations! 🎯\n\nPopular ones include:\n• Computer Science Club (156 members)\n• Engineering Student Council (89 members)\n• Volunteer Action Center (178 members)\n\nWhat are you interested in?";
    } else if (msg.includes('sport') || msg.includes('game') || msg.includes('basketball')) {
      return "Woo Pig Sooie! 🐗🏀\n\nRazorback Basketball Game is on Jan 18 at 7 PM at Bud Walton Arena! It's gonna be epic! Want me to mark you as interested?";
    } else if (msg.includes('hi') || msg.includes('hello') || msg.includes('hey')) {
      return "Hey! Welcome to Campus Connect! 🐗 I'm Tusk, and I'm here to help you find awesome events and orgs at UArk. What can I help you with today?";
    } else if (msg.includes('help')) {
      return "I can help you with:\n\n📅 Finding upcoming events\n🏫 Discovering student organizations\n🎯 Getting personalized recommendations\n📍 Finding event locations\n\nJust ask me anything!";
    } else if (msg.includes('thank') || msg.includes('thanks')) {
      return "You're welcome! Go Hogs! 🐗 Need anything else?";
    } else if (msg.includes('engineering') || msg.includes('cs') || msg.includes('computer')) {
      return "Perfect! For engineering/CS students, check out:\n\n💻 Hackathon 2026 (Feb 1-2) - 24 hours of coding!\n🎪 Engineering Career Fair (Jan 20)\n👥 Computer Science Club\n\nInterested in any of these?";
    } else {
      return "Hmm, I'm not sure about that one! 🤔 But I can help you with:\n\n• Finding events\n• Discovering organizations\n• Getting recommendations\n\nWhat would you like to know?";
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    const userMsg = { id: messages.length + 1, type: 'user', text: inputMessage };
    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);
    setTimeout(() => {
      const botResponse = { id: messages.length + 2, type: 'bot', text: getBotResponse(inputMessage) };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Chatbot Toggle Button - Bottom Right with CIRCULAR logo like homepage */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label={isChatOpen ? 'Close chat' : 'Open chat'}
      >
        {isChatOpen ? (
          <div className="bg-red-700 text-white rounded-full p-5 shadow-2xl hover:bg-red-800 transition-all border-4 border-white">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        ) : (
          <div className="relative floating">
            <div className="absolute inset-0 bg-red-700 rounded-full blur-xl opacity-40 pulse-ring"></div>
            {/* CIRCULAR logo exactly like homepage */}
            <div className="w-24 h-24 bg-white rounded-full p-2 shadow-2xl relative">
              <div className="w-full h-full bg-red-700 rounded-full flex items-center justify-center overflow-hidden">
                <div className="absolute -top-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white shadow-lg animate-pulse z-10"></div>
                <img 
                  src={razorLogo} 
                  alt="Tusk Assistant" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-red-700 text-white text-sm font-bold px-4 py-2 rounded-xl whitespace-nowrap shadow-2xl border-2 border-white">
                Chat with Tusk! 🐗
              </div>
            </div>
          </div>
        )}
      </button>

      {/* Chat Panel */}
      {isChatOpen && (
        <div className="fixed bottom-36 right-6 w-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col h-[600px] border-4 border-red-700 slide-up">
          {/* Header with circular logo */}
          <div className="bg-white text-black p-4 rounded-t-xl flex items-center gap-3 border-b-2 border-red-700">
            <div className="flex-1">
              <h3 className="font-bold text-lg">Tusk - Your Campus Guide</h3>
              <p className="text-sm text-gray-700">Online • Here to help! 🐗</p>
            </div>
            {/* Circular logo in header too */}
            <div className="w-12 h-12 bg-white rounded-full p-1 shadow-md">
              <div className="w-full h-full bg-red-700 rounded-full overflow-hidden flex items-center justify-center">
                <img 
                  src={razorLogo} 
                  alt="Tusk" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Close chat"
            >
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  msg.type === 'user' 
                    ? 'bg-red-700 text-white' 
                    : 'border border-gray-200 bg-white text-black'
                }`}>
                  <p className="text-sm whitespace-pre-line">{msg.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white shadow-md border border-gray-200 rounded-2xl px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {[
                { icon: '📅', text: 'Show events', message: 'What events are happening?' },
                { icon: '🏫', text: 'Find orgs', message: 'Show me student organizations' },
                { icon: '🎓', text: 'Career help', message: 'Career events' },
                { icon: '🏀', text: 'Sports', message: 'Sports events' },
              ].map((action, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setInputMessage(action.message);
                    setTimeout(() => handleSendMessage(), 50);
                  }}
                  className="text-xs bg-gray-100 hover:bg-gray-200 rounded-lg p-2 text-left transition-colors text-black"
                >
                  <span className="mr-1">{action.icon}</span>
                  {action.text}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white rounded-b-xl">
            <div className="flex space-x-2">
              <input
                ref={chatInputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask Tusk anything..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-700 text-black placeholder-gray-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-red-700 text-white rounded-full p-2 hover:bg-red-900 transition-colors"
                aria-label="Send message"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;