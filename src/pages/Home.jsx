import React, { useState, useEffect } from 'react';
import razorLogo from '../razor.png'; // Adjust path based on where razor.png is

function Home({ setCurrentPage }) {
  const AnimatedWaveText = ({ text, className = '', delayStep = 0.08 }) => (
    <span className={className} aria-label={text}>
      {text.split('').map((ch, i) => (
        <span key={`${ch}-${i}`} className="wave-letter" style={{ animationDelay: `${i * delayStep}s` }}>
          {ch}
        </span>
      ))}
    </span>
  );

  const Counter = ({ to = 1000, duration = 1200, className = '' }) => {
    const [val, setVal] = useState(0);
    useEffect(() => {
      let current = 0;
      const stepTime = 16;
      const steps = Math.max(1, Math.floor(duration / stepTime));
      const inc = to / steps;
      const id = setInterval(() => {
        current += inc;
        if (current >= to) { setVal(to); clearInterval(id); }
        else setVal(Math.floor(current));
      }, stepTime);
      return () => clearInterval(id);
    }, [to, duration]);
    return <span className={className}>{val.toLocaleString()}</span>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)',
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative floating">
                <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-30 pulse-ring"></div>
                <div className="w-48 h-48 bg-white rounded-full p-2 shadow-2xl relative overflow-hidden">
                  <div className="w-full h-full bg-red-700 rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src={razorLogo} 
                      alt="Razorback Mascot" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-2xl font-bold tracking-widest mb-6 text-white">
              <AnimatedWaveText text="UNIVERSITY OF ARKANSAS" delayStep={0.06} />
            </p>

            <h1 className="text-5xl font-extrabold mb-6 shimmer">
              Welcome to Campus Connect
            </h1>

            <p className="text-2xl mb-10 text-gray-100">
              Your hub for UArk events, organizations, and opportunities
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setCurrentPage('events')}
                className="bg-white text-red-700 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all text-xl shadow-2xl transform hover:scale-105 border-2 border-white"
              >
                Explore Events
              </button>
              <button
                onClick={() => setCurrentPage('organizations')}
                className="bg-transparent border-4 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-red-700 transition-all text-xl transform hover:scale-105"
              >
                Find Organizations
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Why Campus Connect?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '📅', title: 'Stay Updated', desc: 'Never miss important campus events, career fairs, and social gatherings' },
            { icon: '🤝', title: 'Connect', desc: 'Discover and join student organizations that match your interests' },
            { icon: '🎯', title: 'AI Assistant', desc: 'Chat with Tusk, your AI-powered campus guide who knows everything about UArk!' },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 text-center hover:shadow-xl transition-all transform hover:scale-105 slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-red-700 via-red-800 to-red-700 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-2xl mb-8 text-gray-100 font-light">
            Join thousands of UArk students staying connected
          </p>

          <div className="flex justify-center gap-10 mb-10 text-white">
            <div className="text-center">
              <div className="text-4xl font-extrabold">
                <Counter to={5000} duration={1300} />+
              </div>
              <div className="text-sm text-gray-200">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold">
                <Counter to={200} duration={1100} />+
              </div>
              <div className="text-sm text-gray-200">Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold">
                <Counter to={500} duration={1200} />+
              </div>
              <div className="text-sm text-gray-200">Events/Year</div>
            </div>
          </div>

          <button
            onClick={() => setCurrentPage('signup')}
            className="bg-white text-red-700 px-12 py-5 rounded-full font-bold transition-all text-xl inline-flex items-center gap-3 transform hover:scale-105 shadow-2xl"
          >
            Create Free Account <span>→</span>
          </button>

          <p className="mt-6 text-sm text-gray-200">
            ✓ Free forever • ✓ No credit card required • ✓ Join in 30 seconds
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;