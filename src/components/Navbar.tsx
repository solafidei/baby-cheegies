'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white text-xl font-bold">
              Factors Western
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-white hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/solutions" className="text-white hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors">
                Solutions
              </Link>
              <Link href="/faq" className="text-white hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors">
                FAQ
              </Link>
              <Link href="/industries" className="text-white hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors">
                Industries We Serve
              </Link>
              <Link href="/contact" className="text-white hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-red-400 focus:outline-none focus:text-red-400"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-90">
              <Link 
                href="/" 
                className="text-white hover:text-red-400 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/solutions" 
                className="text-white hover:text-red-400 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                href="/faq" 
                className="text-white hover:text-red-400 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="/industries" 
                className="text-white hover:text-red-400 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Industries We Serve
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-red-400 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 