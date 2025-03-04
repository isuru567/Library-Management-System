import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation on component mount
  },);

  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-300 min-h-screen ">
      <div>
        <Navbar />
        <div className="mt-16 text-center">
          <h1 className="text-4xl font-extrabold text-blue-800 mb-6">
            Welcome to Technology Library
          </h1>
          <div
            className={`inline-block text-2xl font-semibold text-indigo-600 transition-opacity duration-100 ${
              animate ? 'opacity-100' : 'opacity-0' // Corrected line
            }`}
            style={{ opacity: 0.5 }} // Added initial opacity
          >
            Your Gateway to Knowledge! 📚✨
          </div>
          <p className="mt-8 text-lg text-gray-700 max-w-2xl mx-auto">
            Explore a vast collection of books, research materials, and digital resources.
          </p>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Search, borrow, and manage your favorite reads with ease. Start your journey towards endless learning today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;