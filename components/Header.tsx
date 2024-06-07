

'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 h-30 py-6 shadow-md fixed w-full z-10 scroll-behavior: smooth">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold"> <a href='#'>Product</a></div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-emerald-50 focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.36 6.64a.8.8 0 00-1.13-1.13L12 10.77 6.77 5.51a.8.8 0 00-1.13 1.13L10.77 12l-5.13 5.13a.8.8 0 001.13 1.13L12 13.23l5.23 5.23a.8.8 0 001.13-1.13L13.23 12l5.13-5.36z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <ul className={`text-white lg:flex space-x-4 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <li>
            <Link href="#hero" className="hover:underline block lg:inline-block">
             <h2>Home</h2> 
            </Link>
          </li>
          <li>
            <Link href="#features" className="hover:underline block lg:inline-block">
              Features
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className="hover:underline block lg:inline-block">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:underline block lg:inline-block">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
