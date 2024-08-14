import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-blue-50 p-4 shadow z-50 font-gilroy">
        
        {/* Top Row: Contact Information and Extra Links */}
        <div className="flex flex-col mb-2">
          <div className="flex justify-between items-center mb-2 text-sm text-white" style={{ fontFamily: 'Gilroy' }}>
            <div className="flex space-x-4">
              <span>Call Us: 1-877-794-9511</span>
              <span>Email Us</span>
            </div>
            <div className="flex space-x-3">
              <span className="hover:text-white cursor-pointer" style={{ fontFamily: 'Gilroy' }}>Services</span>
              <span className="hover:text-white cursor-pointer" style={{ fontFamily: 'Gilroy' }}>Attorneys</span>
              <span className="hover:text-white cursor-pointer" style={{ fontFamily: 'Gilroy' }}>Support</span>
              <span className="hover:text-white cursor-pointer" style={{ fontFamily: 'Gilroy' }}>Login</span>
            </div>
          </div>
        </div>

        {/* Middle Row: Logo, Search Bar, and Search Button */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="h-20 w-48 mr-14">
            <img src="./images/logi.png" alt="logo" className="h-full w-full object-contain" />
          </div>

          {/* Search Bar and Search Button */}
          <div className="flex-1 relative flex items-center">
            <div className="flex items-center border rounded-lg p-2 max-w-md w-full bg-white">
              <FaSearch className="text-gray-500 mr-4" />
              <input
                type="text"
                placeholder="Search Trademark Here eg. Mickey Mouse"
                className="w-full border-none outline-none text-gray-500 bg-white"
                style={{ fontFamily: 'Gilroy' }}
              />
            </div>

            <div className="flex space-x-4 ml-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md" style={{ fontFamily: 'Gilroy' }}>
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
