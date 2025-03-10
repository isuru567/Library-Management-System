import React from 'react';
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/Background.jpg'; 
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-gradient-to-br from-blue-100 bg-opacity-50 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center max-w-4xl p-8">
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-8">
              Welcome to the Technology Library
            </h1>
            <p className="text-lg md:text-xl text-gray-900 mb-6">
              Explore the frontiers of knowledge. A world of advanced research and digital discovery awaits.
            </p>
            <p className="text-lg md:text-xl text-gray-900 mb-8">
              Your learning journey, simplified. Access, manage, and expand your horizons with ease.
            </p>
            <div className=" ">
            <Link to= "/Services" className="text-white font-semibold bg-blue-600 hover:bg-indigo-600 px-6 py-3 rounded-lg text-lg transition-colors duration-300">
              Explore Our Services
            </Link >
            
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;