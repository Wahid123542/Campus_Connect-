import React from 'react';
import razorLogo from '../razor.png'; // Adjust path based on where razor.png is

function Navbar({ currentPage, setCurrentPage }) {
  return (
    <nav className="bg-white shadow-xl border-b-4 border-red-700 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button onClick={() => setCurrentPage('home')} className="flex items-center space-x-3 group">
              <div className="h-14 w-14 bg-red-700 rounded-full border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <img 
                  src={razorLogo} 
                  alt="Razorback Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-3xl font-bold text-red-700 brand-fx">
                {'compusconnect'.split('').map((ch, i) => (
                  <span key={i}>{ch}</span>
                ))}
              </span>
            </button>
          </div>

          <div className="flex items-center space-x-3">
            {['home', 'events', 'organizations', 'login', 'signup'].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-7 py-3 rounded-full font-bold transition-all shadow-lg transform hover:scale-105 ${
                  currentPage === page
                    ? 'bg-red-700 text-white border-2 border-red-700'
                    : 'bg-red-700 text-white border-2 border-red-700 hover:bg-red-800'
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1).replace(/([A-Z])/g, ' $1')}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;