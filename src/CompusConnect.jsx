import { useState } from 'react';

function CampusConnect() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const sampleEvents = [
    {
      id: 1,
      title: 'Engineering Career Fair',
      category: 'career',
      date: 'January 20, 2026',
      time: '10:00 AM - 4:00 PM',
      location: 'Bud Walton Arena',
      description: 'Connect with top employers looking for engineering talent',
      organization: 'Career Center',
      interestedCount: 127
    },
    {
      id: 2,
      title: 'Student Org Fair',
      category: 'social',
      date: 'January 22, 2026',
      time: '2:00 PM - 6:00 PM',
      location: 'Arkansas Union',
      description: 'Explore 200+ student organizations and find your community',
      organization: 'Student Activities',
      interestedCount: 89
    },
    {
      id: 3,
      title: 'Resume Workshop',
      category: 'career',
      date: 'January 25, 2026',
      time: '4:00 PM - 5:30 PM',
      location: 'Career Center',
      description: 'Get professional feedback on your resume from career advisors',
      organization: 'Career Center',
      interestedCount: 45
    },
    {
      id: 4,
      title: 'Razorback Basketball Game',
      category: 'sports',
      date: 'January 18, 2026',
      time: '7:00 PM',
      location: 'Bud Walton Arena',
      description: 'Cheer on the Hogs against conference rivals!',
      organization: 'Athletics',
      interestedCount: 234
    },
    {
      id: 5,
      title: 'Hackathon 2026',
      category: 'academic',
      date: 'February 1-2, 2026',
      time: '24 Hours',
      location: 'Engineering Building',
      description: '24-hour coding competition with prizes and free food',
      organization: 'CS Club',
      interestedCount: 156
    },
    {
      id: 6,
      title: 'Community Service Day',
      category: 'social',
      date: 'January 28, 2026',
      time: '9:00 AM - 2:00 PM',
      location: 'Various Locations',
      description: 'Volunteer with local organizations and make a difference',
      organization: 'Volunteer Action Center',
      interestedCount: 78
    }
  ];

  const sampleOrgs = [
    {
      id: 1,
      name: 'Computer Science Club',
      category: 'academic',
      description: 'Connect with fellow CS students, work on projects, and prepare for tech careers',
      members: 156,
    },
    {
      id: 2,
      name: 'Engineering Student Council',
      category: 'academic',
      description: 'Representing engineering students and organizing professional development events',
      members: 89,
    },
    {
      id: 3,
      name: 'Intramural Sports League',
      category: 'sports',
      description: 'Join recreational sports teams and compete with other students',
      members: 234,
    },
    {
      id: 4,
      name: 'Student Government',
      category: 'social',
      description: 'Be the voice of students and make positive changes on campus',
      members: 45,
    },
    {
      id: 5,
      name: 'Volunteer Action Center',
      category: 'social',
      description: 'Make a difference in the community through volunteer opportunities',
      members: 178,
    },
    {
      id: 6,
      name: 'Business Leaders Society',
      category: 'career',
      description: 'Network with business professionals and develop leadership skills',
      members: 112,
    }
  ];

  const categories = [
    { value: 'all', label: 'All', color: 'bg-gray-600' },
    { value: 'academic', label: 'Academic', color: 'bg-blue-600' },
    { value: 'career', label: 'Career', color: 'bg-green-600' },
    { value: 'social', label: 'Social', color: 'bg-purple-600' },
    { value: 'sports', label: 'Sports', color: 'bg-orange-600' },
  ];

  const getCategoryColor = (category) => {
    const cat = categories.find(c => c.value === category);
    return cat ? cat.color : 'bg-gray-600';
  };

  const filteredEvents = sampleEvents.filter(event => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredOrgs = selectedCategory === 'all' 
    ? sampleOrgs 
    : sampleOrgs.filter(org => org.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-red-800 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button 
                onClick={() => setCurrentPage('home')}
                className="flex items-center space-x-3"
              >
                <img 
                  src="/images/razor.png" 
                  alt="Razorbacks" 
                  className="h-10 w-10 object-contain"
                />
                <span className="text-2xl font-bold text-white">
                  Campus Connect
                </span>
              </button>
            </div>

            <div className="flex items-center space-x-6">
              <button 
                onClick={() => { setCurrentPage('events'); setSelectedCategory('all'); }}
                className="text-white hover:text-gray-200 transition-colors font-medium"
              >
                Events
              </button>
              <button 
                onClick={() => { setCurrentPage('organizations'); setSelectedCategory('all'); }}
                className="text-white hover:text-gray-200 transition-colors font-medium"
              >
                Organizations
              </button>
              <button className="bg-white text-red-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Page */}
      {currentPage === 'home' && (
        <div>
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-red-800 to-red-700 text-white">
            <div className="max-w-7xl mx-auto px-4 py-24">
              <div className="text-center">
                <img 
                  src="/images/razor.png" 
                  alt="Arkansas Razorbacks" 
                  className="h-32 w-32 mx-auto mb-6 object-contain drop-shadow-lg"
                />
                <h1 className="text-5xl font-bold mb-6">
                  Welcome to Campus Connect
                </h1>
                <p className="text-xl mb-8 text-gray-100">
                  Your hub for UArk events, organizations, and opportunities
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => setCurrentPage('events')}
                    className="bg-white text-red-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                  >
                    Explore Events
                  </button>
                  <button
                    onClick={() => setCurrentPage('organizations')}
                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-800 transition-colors text-lg"
                  >
                    Find Organizations
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Campus Connect?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">📅</div>
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="text-gray-600">
                  Never miss important campus events, career fairs, and social gatherings
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-3">Connect</h3>
                <p className="text-gray-600">
                  Discover and join student organizations that match your interests
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">Personalized</h3>
                <p className="text-gray-600">
                  Get AI-powered recommendations based on your major and interests
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of UArk students staying connected
              </p>
              <button className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors text-lg">
                Create Free Account
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Events Page */}
      {currentPage === 'events' && (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Upcoming Events</h1>
            <p className="text-gray-600">Discover what's happening on campus</p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
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
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.value
                      ? `${category.color} text-white`
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className={`${getCategoryColor(event.category)} text-white text-sm px-3 py-1 rounded-full`}>
                      {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500">
                      👥 {event.interestedCount}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  
                  <div className="space-y-1 mb-4 text-sm text-gray-600">
                    <p>📅 {event.date}</p>
                    <p>🕐 {event.time}</p>
                    <p>📍 {event.location}</p>
                    <p className="text-xs text-gray-500">by {event.organization}</p>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-red-800 text-white py-2 rounded-lg hover:bg-red-900 transition-colors">
                      I'm Interested
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No events found matching your criteria</p>
            </div>
          )}
        </div>
      )}

      {/* Organizations Page */}
      {currentPage === 'organizations' && (
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Student Organizations</h1>
            <p className="text-gray-600">Find your community at UArk</p>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-red-800 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredOrgs.map((org) => (
              <div
                key={org.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold">{org.name}</h3>
                  <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                    {org.category}
                  </span>
                </div>

                <p className="text-gray-700 mb-4">{org.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    👥 {org.members} members
                  </span>
                  <button className="bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-900 transition-colors">
                    Join
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CampusConnect;
