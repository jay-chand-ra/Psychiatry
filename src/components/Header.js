import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <header className="bg-indigo-700 text-white shadow-md relative">
      <div className="container mx-auto max-w-6xl px-5 py-4">
        <nav className="flex flex-wrap justify-between items-center">
          <a href="/" className="text-2xl font-bold text-white hover:text-indigo-200 transition duration-300">
            PsychiatryCenter
          </a>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
          <ul className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-6 w-full md:w-auto mt-4 md:mt-0 bg-indigo-700 md:bg-transparent`}>
            <li><button onClick={() => scrollToSection('founder-message')} className="block w-full text-left py-2 px-4 md:px-0 hover:bg-indigo-600 md:hover:bg-transparent hover:text-indigo-200 transition duration-300">Home</button></li>
            <li><button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 px-4 md:px-0 hover:bg-indigo-600 md:hover:bg-transparent hover:text-indigo-200 transition duration-300">Services</button></li>
            <li><button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 px-4 md:px-0 hover:bg-indigo-600 md:hover:bg-transparent hover:text-indigo-200 transition duration-300">Testimonials</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 px-4 md:px-0 hover:bg-indigo-600 md:hover:bg-transparent hover:text-indigo-200 transition duration-300">Contact</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
