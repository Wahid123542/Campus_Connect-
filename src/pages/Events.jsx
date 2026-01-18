import React, { useState } from 'react';

function Events({ interestedEvents, handleInterested }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showEventDetail, setShowEventDetail] = useState(null);

  const sampleEvents = [
    { id: 1, title: 'Engineering Career Fair', category: 'career', date: 'January 20, 2026', time: '10:00 AM - 4:00 PM', location: 'Bud Walton Arena', description: 'Connect with top employers looking for engineering talent', organization: 'Career Center', interestedCount: 127 },
    { id: 2, title: 'Student Org Fair', category: 'social', date: 'January 22, 2026', time: '2:00 PM - 6:00 PM', location: 'Arkansas Union', description: 'Explore 200+ student organizations and find your community', organization: 'Student Activities', interestedCount: 89 },
    { id: 3, title: 'Resume Workshop', category: 'career', date: 'January 25, 2026', time: '4:00 PM - 5:30 PM', location: 'Career Center', description: 'Get professional feedback on your resume from career advisors', organization: 'Career Center', interestedCount: 45 },
    { id: 4, title: 'Razorback Basketball Game', category: 'sports', date: 'January 18, 2026', time: '7:00 PM', location: 'Bud Walton Arena', description: 'Cheer on the Hogs against conference rivals!', organization: 'Athletics', interestedCount: 234 },
    { id: 5, title: 'Hackathon 2026', category: 'academic', date: 'February 1-2, 2026', time: '24 Hours', location: 'Engineering Building', description: '24-hour coding competition with prizes and free food', organization: 'CS Club', interestedCount: 156 },
    { id: 6, title: 'Community Service Day', category: 'social', date: 'January 28, 2026', time: '9:00 AM - 2:00 PM', location: 'Various Locations', description: 'Volunteer with local organizations and make a difference', organization: 'Volunteer Action Center', interestedCount: 78 },
  ];

  const categories = [
    { value: 'all', label: 'All Events', color: 'bg-gray-600' },
    { value: 'academic', label: 'Academic', color: 'bg-blue-600' },
    { value: 'career', label: 'Career', color: 'bg-green-600' },
    { value: 'social', label: 'Social', color: 'bg-purple-600' },
    { value: 'sports', label: 'Sports', color: 'bg-orange-600' },
  ];

  const getCategoryColor = (category) => {
    const cat = categories.find((c) => c.value === category);
    return cat ? cat.color : 'bg-gray-600';
  };

  const filteredEvents = sampleEvents.filter((event) => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch = event.title.toLowerCase().includes(q) || event.description.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  // Event Detail Modal
  const EventDetailModal = ({ event, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl slide-up" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-gradient-to-r from-red-700 to-red-900 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold mb-2">{event.title}</h2>
              <p className="text-red-100">by {event.organization}</p>
            </div>
            <button onClick={onClose} className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex items-center gap-2">
            <span className={`${getCategoryColor(event.category)} text-white text-sm px-4 py-2 rounded-full font-medium`}>
              {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
            </span>
            <span className="text-gray-600 flex items-center gap-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              {event.interestedCount} interested
            </span>
          </div>

          <div className="space-y-3 text-gray-700">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl">📅</span>
              <div>
                <p className="font-semibold">Date</p>
                <p>{event.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl">🕐</span>
              <div>
                <p className="font-semibold">Time</p>
                <p>{event.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-semibold">Location</p>
                <p>{event.location}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">About This Event</h3>
            <p className="text-gray-700 leading-relaxed">{event.description}</p>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={() => handleInterested(event.id)}
              className={`flex-1 py-3 rounded-lg font-bold transition-all transform hover:scale-105 ${
                interestedEvents.includes(event.id)
                  ? 'bg-green-600 text-white'
                  : 'bg-red-700 text-white hover:bg-red-800'
              }`}
            >
              {interestedEvents.includes(event.id) ? '✓ You\'re Interested!' : 'I\'m Interested'}
            </button>
            <button className="px-6 py-3 border-2 border-red-700 text-red-700 rounded-lg font-bold hover:bg-red-50 transition-colors">
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Upcoming Events</h1>
          <p className="text-gray-700">Discover what's happening on campus</p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search events... or ask Tusk! 🐗"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
            />
            <svg className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 ${
                  selectedCategory === category.value
                    ? `${category.color} text-white shadow-lg scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, idx) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all transform hover:scale-105 slide-up" style={{ animationDelay: `${idx * 0.05}s` }}>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className={`${getCategoryColor(event.category)} text-white text-sm px-3 py-1 rounded-full`}>
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    {event.interestedCount}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <div className="space-y-1 mb-4 text-sm text-gray-600">
                  <p>📅 {event.date}</p>
                  <p>🕐 {event.time}</p>
                  <p>📍 {event.location}</p>
                  <p className="text-xs text-gray-500">by {event.organization}</p>
                </div>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleInterested(event.id)}
                    className={`flex-1 py-2 rounded-lg transition-all transform hover:scale-105 font-medium ${
                      interestedEvents.includes(event.id)
                        ? 'bg-green-600 text-white'
                        : 'bg-red-700 text-white hover:bg-red-800'
                    }`}
                  >
                    {interestedEvents.includes(event.id) ? '✓ Interested' : 'I\'m Interested'}
                  </button>
                  <button 
                    onClick={() => setShowEventDetail(event)}
                    className="px-4 py-2 border border-red-700 text-red-700 rounded-lg hover:bg-red-50 transition-colors flex items-center gap-1"
                    title="View Details"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showEventDetail && <EventDetailModal event={showEventDetail} onClose={() => setShowEventDetail(null)} />}
    </div>
  );
}

export default Events;