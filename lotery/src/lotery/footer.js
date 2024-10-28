import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-6">
      <div className="container mx-auto px-4 text-gray-700">
        <div className="border-b border-red-600 pb-4">
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <p className="mb-1">VIT- TE- YOJNA BHAWAN, PLOT NO 2,</p>
          <p className="mb-1">SECTOR 33-A CHANDIGARH 160020</p>
          <p className="mb-1">Phone No.: <a href="tel:+918797527031" className="text-blue-600">+91 8797527031</a></p>
          <p className="mb-1">Email:</p>
        </div>
        
        <div className="border-b border-red-600 py-4">
          <p className="mb-1">&copy; All rights reserved | Punjab State Lotteries</p>
          <p className="mb-1">Designed & Developed by <span className="text-red-600">NIC Punjab</span></p>
        </div>

        <div className="border-b border-red-600 py-4">
          <h2 className="text-lg font-bold mb-2">Newsletter</h2>
          <p className="mb-1">Stay updated with our latest</p>
          <div className="flex items-center mt-2">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-2 w-full border border-gray-400 rounded-l"
            />
            <button className="p-2 bg-red-600 text-white rounded-r">→</button>
          </div>
        </div>

        <div className="mt-4 flex items-center">
          <h2 className="text-lg font-bold">Follow Us</h2>
          <button className="ml-auto bg-red-600 text-white p-2 rounded-full">
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
