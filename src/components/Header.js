import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 p-5 text-white shadow-md">
      <h1 className="text-3xl font-bold">Psychiatry Center</h1>
      <nav>
        <ul className="flex space-x-5 mt-3">
          <li><a href="#services" className="hover:text-blue-200">Services</a></li>
          <li><a href="#founder-message" className="hover:text-blue-200">Founder’s Message</a></li>
          <li><a href="#testimonials" className="hover:text-blue-200">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
