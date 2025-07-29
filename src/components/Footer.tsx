import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Factors Western</h3>
            <p className="text-gray-300 mb-4">
              Established in 1985 in Calgary, helping Canadian businesses convert receivables to cash and create reliable cash flow solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/industries" className="text-gray-300 hover:text-white transition-colors">Industries We Serve</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="text-gray-300 space-y-2">
              <p>Email: info@factorswestern.com</p>
              <p>Phone: (123) 456-7890</p>
              <p>Location: Calgary, AB</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; 2025 Factors Western. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 