import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Factors Western</h3>
            <p className="text-gray-300 mb-4">
              Established in 1985, Factors Western provides factoring solutions for Canadian businesses across various industries.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/industries" className="text-gray-300 hover:text-white transition-colors">Industries We Serve</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="text-gray-300 space-y-2">
              <p>Calgary, Alberta</p>
              <p>Phone: (403) 277-0330</p>
              <p>Fax: (403) 277-7066</p>
              <p>Email: info@factorswestern.com</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            © 2024 Factors Western. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 