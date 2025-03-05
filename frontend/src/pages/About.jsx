import React from 'react';
import Navbar from '../components/Navbar'; 
import backgroundImage from '../assets/Background.jpg';

const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-gradient-to-br from-blue-100 bg-opacity-50 min-h-screen flex flex-col">
        <Navbar /> 
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center max-w-4xl p-8">
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-8">
              About the Technology Library
            </h1>
            <p className="text-lg md:text-xl text-gray-950 mb-6">
              More than just a repository of information, the Technology Library is a dynamic hub where innovation and learning converge. 
              We are dedicated to providing a curated collection of resources that empower individuals and organizations to thrive in the ever-evolving technological landscape.
            </p>
            <p className="text-lg md:text-xl text-gray-950 mb-8">
              Our mission is to foster a community of lifelong learners, connecting them with the tools and knowledge they need to succeed. 
              We strive to be a catalyst for growth, discovery, and collaboration, inspiring the next generation of tech leaders and innovators.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Our Values
            </h2>
            <ul className="text-lg md:text-xl text-gray-950 list-none  list-inside mb-8">
              <li>Accessibility: Providing equitable access to information and resources for all.</li>
              <li>Innovation: Embracing cutting-edge technologies and fostering a culture of experimentation.</li>
              <li>Collaboration: Building partnerships and fostering a sense of community among our users.</li>
              <li>Excellence: Striving for the highest standards in our services and resources.</li>
            </ul>

            <button className="text-white font-semibold bg-blue-600 hover:bg-indigo-600 px-6 py-3 rounded-lg text-lg transition-colors duration-300">
              Learn More
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;