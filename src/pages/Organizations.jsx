import React, { useState } from 'react';

function Organizations() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const sampleOrgs = [
    { id: 1, name: 'Computer Science Club', category: 'academic', description: 'Connect with fellow CS students, work on projects, and prepare for tech careers', members: 156 },
    { id: 2, name: 'Engineering Student Council', category: 'academic', description: 'Representing engineering students and organizing professional development events', members: 89 },
    { id: 3, name: 'Intramural Sports League', category: 'sports', description: 'Join recreational sports teams and compete with other students', members: 234 },
    { id: 4, name: 'Student Government', category: 'social', description: 'Be the voice of students and make positive changes on campus', members: 45 },
    { id: 5, name: 'Volunteer Action Center', category: 'social', description: 'Make a difference in the community through volunteer opportunities', members: 178 },
    { id: 6, name: 'Business Leaders Society', category: 'career', description: 'Network with business professionals and develop leadership skills', members: 112 },
  ];

  const categories = [
    { value: 'all', label: 'All Events', color: 'bg-gray-600' },
    { value: 'academic', label: 'Academic', color: 'bg-blue-600' },
    { value: 'career', label: 'Career', color: 'bg-green-600' },
    { value: 'social', label: 'Social', color: 'bg-purple-600' },
    { value: 'sports', label: 'Sports', color: 'bg-orange-600' },
  ];

  const filteredOrgs = selectedCategory === 'all' ? sampleOrgs : sampleOrgs.filter((org) => org.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Student Organizations</h1>
          <p className="text-gray-700">Find your community at UArk</p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 ${
                selectedCategory === category.value
                  ? 'bg-red-700 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredOrgs.map((org, idx) => (
            <div key={org.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all transform hover:scale-105 slide-up" style={{ animationDelay: `${idx * 0.05}s` }}>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold">{org.name}</h3>
                <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">{org.category}</span>
              </div>
              <p className="text-gray-700 mb-4">{org.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  {org.members} members
                </span>
                <button className="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition-all transform hover:scale-105">
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Organizations;