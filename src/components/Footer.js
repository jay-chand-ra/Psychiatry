import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-5 text-center mt-10">
      <p>© 2024 Psychiatry Center. All rights reserved.</p>
      <div className="mt-2">
        <a href="#contact" className="hover:text-blue-200">Contact Us</a> | 
        <a href="#privacy" className="hover:text-blue-200">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
