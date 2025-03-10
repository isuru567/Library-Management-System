import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import backgroundImage from '../assets/Background.jpg';
//import { Link } from 'react-router-dom';

const ServicePage = () => {
  const [selectedService, setSelectedService] = useState(null);
  
  const services = [
    {
      id: 1,
      title: 'Book Borrowing',
      description: 'Borrow books from our extensive collection with flexible return periods.',
      icon: '📚',
      details: 'Members can borrow up to 5 books at a time for a period of 14 days. Extensions can be requested online or in person at the library desk. Late returns may incur fees as per library policy.'
    },
    {
      id: 2,
      title: 'Digital Resources',
      description: 'Access e-books, audiobooks, and research journals from anywhere.',
      icon: '💻',
      details: 'Our digital collection includes thousands of e-books, audiobooks, and access to premium research databases. Members can access these resources 24/7 using their library credentials through our dedicated mobile app or website.'
    },
    {
      id: 3,
      title: 'Study Spaces',
      description: 'Reserve quiet study rooms and collaborative workspaces.',
      icon: '🪑',
      details: 'The library offers various study environments including individual carrels, group study rooms, and open collaborative spaces. Rooms can be booked up to 2 weeks in advance through our online reservation system.'
    },
    {
      id: 4,
      title: 'Research Assistance',
      description: 'Get expert help with academic research and citations.',
      icon: '🔍',
      details: 'Our librarians are available to assist with research queries, literature reviews, and citation management. Schedule a one-on-one consultation or attend one of our regular workshops on research methodologies and tools.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 "
    style={{ backgroundImage: `url(${backgroundImage})` }}>

      <Navbar />
    <div className="bg-gradient-to-br from-blue-100 bg-opacity-50 min-h-screen flex flex-col">
      

      {/* Main Content */}
      <main className="container mx-auto px-4 py-10">
        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all hover:shadow-lg"
              onClick={() => setSelectedService(service)}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Service Details */}
        {selectedService && (
          <div className="mt-12 bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <span className="text-4xl mr-4">{selectedService.icon}</span>
                <h2 className="text-2xl font-bold text-gray-800">{selectedService.title}</h2>
              </div>
              <button 
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="mt-4 text-gray-700 leading-relaxed">{selectedService.details}</p>
            <div className="mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
              Book Now
              </button>
            </div>
          </div>
        )}

        {/* Additional Info Section */}
        <section className="mt-16">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 md:pr-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Membership Requirements</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Valid ID card or proof of address</li>
                  <li>Completed membership application form</li>
                  <li>Annual membership fee payment</li>
                  <li>Photo for your library card</li>
                </ul>
                <div className="mt-6">
                  
                </div>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Opening Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200 mt-2">
                    <span>Public Holidays</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      </div>
    </div>
  );
};

export default ServicePage;