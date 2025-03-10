import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/Background.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Contact Form Submission from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = `mailto:library@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <div className="bg-gradient-to-br from-blue-100 bg-opacity-50 min-h-screen flex flex-col items-center py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">
          Contact Us
        </h2>

        <p className="text-lg text-gray-800 max-w-2xl text-center mb-8">
          If you have any inquiries or need assistance, please reach out using the form below or through our contact details.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <label className="text-gray-700 font-medium">Name:</label>
            <input
              type="text"
              name="name"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />

            <label className="text-gray-700 font-medium">Email:</label>
            <input
              type="email"
              name="email"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />

            <label className="text-gray-700 font-medium">Message:</label>
            <textarea
              name="message"
              className="border border-gray-300 p-2 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
