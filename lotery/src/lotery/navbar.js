import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full bg-red-500 text-white p-4 flex justify-between items-center z-50">
      {/* Logo */}
        <img className='w-[100px]' src='/images/lotery.jpg' alt='error' onClick={() => {navigate('/')}}/>

      {/* Menu Button */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <span className="text-3xl">&#9776;</span>
        </button>
      </div>

      {/* Menu Links */}
      <ul
        className={`${
          menuOpen ? 'block' : 'hidden'
        } lg:flex lg:space-x-8 text-sm font-medium lg:static absolute top-14 right-0 w-full lg:w-auto lg:bg-transparent bg-red-500 lg:flex-row flex-col lg:space-y-0 space-y-4 lg:p-0 p-4`}
      >
        <li>
          <a href="#home" className="hover:text-yellow-400">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-yellow-400">
            About
          </a>
        </li>
        <li>
          <a href="#results" className="hover:text-yellow-400">
            Results
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-yellow-400">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
