import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">
        Welcome to  Technology  Library 
      </h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        Manage books, track borrowed items, and streamline library operations with ease.
      </p>
      <div className="flex space-x-4">
        <Link to="/register" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-500">
          Get Started
        </Link>
        <Link to="/login" className="bg-gray-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700">
          Login
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
