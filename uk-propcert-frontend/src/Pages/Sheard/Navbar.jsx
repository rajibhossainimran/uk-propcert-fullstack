import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const isLoggedIn = localStorage.getItem("accessToken");
  const userRole = localStorage.getItem("userRole");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userRole");
    navigate("/login");
    setShowDropdown(false);
    setIsOpen(false);
  };

  const menuItems = [
    { path: "/service", text: "Services" },
    { path: "/faqs", text: "FAQs" },
    { path: "/blogs", text: "Blog" },
    { path: "/about", text: "About Us" },
    { path: "/contact", text: "Contact Us" },
  ];

  const AuthSection = () => (
    <div className="flex items-center gap-4">
      <Link to="/ordetracking">
        <button className="border border-lime-600 text-lime-700 px-4 py-2 rounded-full hover:bg-lime-100">
          Track order
        </button>
      </Link>
      <Link to="/propertySelector">
        <button className="bg-lime-600 text-white px-4 py-2 rounded-full hover:bg-lime-500">
          Get a quote
        </button>
      </Link>

      {isLoggedIn ? (
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-10 h-10 rounded-full bg-lime-600 text-white flex items-center justify-center hover:bg-lime-700 relative"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-800">John Doe</p>
                <p className="text-xs text-gray-500">john@example.com</p>
              </div>
              <Link
                to={userRole === 'admin' ? '/admin/dashboard' :
                  userRole === 'inspector' ? '/inspector/dashboard' :
                    '/mydashboard'}
                className="block px-4 py-2 text-gray-800 hover:bg-lime-50 text-sm"
                onClick={() => {
                  setShowDropdown(false);
                  setIsOpen(false);
                }}
              >
                Dashboard
              </Link>
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-800 hover:bg-lime-50 text-sm"
                onClick={() => {
                  setShowDropdown(false);
                  setIsOpen(false);
                }}
              >
                Profile Settings
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-gray-800 hover:bg-lime-50 text-sm"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link
          to="/login"
          className="bg-lime-600 px-4 py-2 rounded-md text-white hover:bg-lime-700"
        >
          Login
        </Link>
      )}
    </div>
  );

  return (
    <nav className="bg-white shadow-md fixed z-30 w-full top-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-lime-700 font-bold text-xl">
            UK PROPCERT
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex space-x-6 text-lime-700 font-medium">
              <ul className="list-none flex gap-8">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="hover:text-lime-800 font-semibold text-sm hover:bg-lime-100 rounded-3xl py-1 px-2 block"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <AuthSection />
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="text-lime-800 text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="px-2 pt-2 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 text-lime-800 hover:bg-lime-100 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.text}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200">
              {isLoggedIn ? (
                <div className="flex justify-center">
                  <div className="flex items-center gap-4">
                    <Link to="/ordetracking">
                      <button className="border border-lime-600 text-lime-700 px-4 py-2 rounded-full hover:bg-lime-100">
                        Track order
                      </button>
                    </Link>
                    <Link to="/propertySelector">
                      <button className="bg-lime-600 text-white px-4 py-2 rounded-full hover:bg-lime-500">
                        Get a quote
                      </button>
                    </Link>

                    {isLoggedIn ? (
                      <div className="relative" ref={dropdownRef}>
                        <button
                          onClick={() => setShowDropdown(!showDropdown)}
                          className="w-10 h-10 rounded-full bg-lime-600 text-white flex items-center justify-center hover:bg-lime-700 relative"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        </button>

                        {showDropdown && (
                          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                            <div className="px-4 py-2 border-b border-gray-100">
                              <p className="text-sm font-medium text-gray-800">John Doe</p>
                              <p className="text-xs text-gray-500">john@example.com</p>
                            </div>
                            <Link
                              to={userRole === 'admin' ? '/admin/dashboard' :
                                userRole === 'inspector' ? '/inspector/dashboard' :
                                  '/mydashboard'}
                              className="block px-4 py-2 text-gray-800 hover:bg-lime-50 text-sm"
                              onClick={() => {
                                setShowDropdown(false);
                                setIsOpen(false);
                              }}
                            >
                              Dashboard
                            </Link>
                            <Link
                              to="/profile"
                              className="block px-4 py-2 text-gray-800 hover:bg-lime-50 text-sm"
                              onClick={() => {
                                setShowDropdown(false);
                                setIsOpen(false);
                              }}
                            >
                              Profile Settings
                            </Link>
                            <button
                              onClick={handleLogout}
                              className="w-full text-left px-4 py-2 text-gray-800 hover:bg-lime-50 text-sm"
                            >
                              Logout
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to="/login"
                        className="bg-lime-600 px-4 py-2 rounded-md text-white hover:bg-lime-700"
                      >
                        Login
                      </Link>
                    )}
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="block w-full text-center bg-lime-600 text-white px-4 py-2 rounded-md hover:bg-lime-700"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;