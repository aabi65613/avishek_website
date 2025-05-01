import React from 'react';

const ContactPageContent = () => {
  const address = "Shyamnagar, Laxmiraya Club, Kolkata";
  const phone = "7059068366"; // Updated phone number

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Our Address</h2>
          <p className="text-gray-600">{address}</p>
          {/* Placeholder for a map embed */}
          <div className="mt-4 h-64 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            (Map Placeholder)
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Phone Number</h2>
          <p className="text-gray-600">
            <a href={`tel:${phone}`} className="text-blue-600 hover:underline">{phone}</a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Send us a Message</h2>
          {/* Basic contact form placeholder */}
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPageContent;

