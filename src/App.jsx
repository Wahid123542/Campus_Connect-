import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import Events from './pages/Events';
import Organizations from './pages/Organizations';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [interestedEvents, setInterestedEvents] = useState([]);

  const handleInterested = (eventId) => {
    setInterestedEvents(prev => 
      prev.includes(eventId) ? prev.filter(id => id !== eventId) : [...prev, eventId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Global Styles */}
      <style>{`
        @keyframes wave-grow {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.35); }
        }
        .wave-letter {
          display: inline-block;
          animation: wave-grow 1.6s ease-in-out infinite;
        }

        .brand-fx span {
          display: inline-block;
          transition: transform .25s ease, color .25s ease;
        }
        .brand-fx:hover span { color: #9D2235; }
        .brand-fx:hover span:nth-child(1)  { transform: translateY(-2px) rotate(-2deg); }
        .brand-fx:hover span:nth-child(2)  { transform: translateY(-4px) rotate( 2deg); }
        .brand-fx:hover span:nth-child(3)  { transform: translateY(-6px) rotate(-2deg); }
        .brand-fx:hover span:nth-child(4)  { transform: translateY(-8px) rotate( 2deg); }
        .brand-fx:hover span:nth-child(5)  { transform: translateY(-10px) rotate(-2deg); }
        .brand-fx:hover span:nth-child(6)  { transform: translateY(-8px) rotate( 2deg); }
        .brand-fx:hover span:nth-child(7)  { transform: translateY(-6px) rotate(-2deg); }
        .brand-fx:hover span:nth-child(8)  { transform: translateY(-4px) rotate( 2deg); }
        .brand-fx:hover span:nth-child(9)  { transform: translateY(-2px) rotate(-2deg); }
        .brand-fx:hover span:nth-child(10) { transform: translateY(-1px) rotate( 1deg); }
        .brand-fx:hover span:nth-child(11) { transform: translateY(-2px) rotate(-1deg); }
        .brand-fx:hover span:nth-child(12) { transform: translateY(-3px) rotate( 1deg); }
        .brand-fx:hover span:nth-child(13) { transform: translateY(-2px) rotate(-1deg); }
        .brand-fx:hover span:nth-child(14) { transform: translateY(-1px) rotate( 1deg); }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 1; }
          100% { transform: scale(1.3); opacity: 0; }
        }

        .floating { animation: float 3s ease-in-out infinite; }
        
        .pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }

        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .shimmer {
          background: linear-gradient(to right, #9D2235 0%, #fff 50%, #9D2235 100%);
          background-size: 1000px 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s infinite;
        }
      `}</style>

      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === 'events' && <Events interestedEvents={interestedEvents} handleInterested={handleInterested} />}
      {currentPage === 'organizations' && <Organizations />}
      {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} />}
      {currentPage === 'signup' && <Signup setCurrentPage={setCurrentPage} />}
      
      <Chatbot />
    </div>
  );
}

export default App;