import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-800 text-white">
      <div className="container mx-auto max-w-6xl px-5 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">PsychiatryCenter</h3>
            <p className="text-indigo-200">Providing quality therapy services to improve your well-being.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-indigo-200 hover:text-white transition duration-300">Home</a></li>
              <li><a href="/services" className="text-indigo-200 hover:text-white transition duration-300">Services</a></li>
              <li><a href="/about" className="text-indigo-200 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="/contact" className="text-indigo-200 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-indigo-200 not-italic">
              <p>123 Therapy Street</p>
              <p>Wellness City, WC 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@PsychiatryCenter.com</p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-indigo-700 text-center text-indigo-300">
          <p>&copy; 2023 PsychiatryCenter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
