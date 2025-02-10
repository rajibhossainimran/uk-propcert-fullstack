import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faBars, faMoon, faSun, faBell, faCalendarDays,faRightFromBracket, faTicket, faCircleInfo, faUser} from "@fortawesome/free-solid-svg-icons";
import { faGear, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const NavbarDashboard = () => {
  const getInitialTheme = () => {
    if (typeof window !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme") === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme());

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  const [isOpen, setIsOpen] = useState(false);

  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const notifRef = useRef(null);

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setIsNotifOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

    return (
        <div className='fixed bg-white bg-opacity-75 w-[100%] dark:bg-gray-700 z-10 backdrop-blur-sm '>
            <div className='flex justify-between py-4 px-8 shadow-lg items-center'>
                <div className="">
                    <div className="">
                        <button id='nav-toggle' className="text-gray-700" >
                            <FontAwesomeIcon icon={faBars} size='2x'/>
                        </button>
                    </div>
                </div>
                <div className=''>
                    <input type="text" placeholder="Search..." className="border outline-none px-3 py-2 w-72 rounded-lg " />
                </div>
                <div className='flex mr-72 gap-8 items-center'>
                    <div>
                      <button onClick={() => setDarkMode(!darkMode)} className="text-2xl">
                        {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
                      </button>
                    </div>
                    {/* Notification Button And Popup */}
                    <div>
                      <button onClick={() => setIsNotifOpen(!isNotifOpen)}><FontAwesomeIcon icon={faBell} className="text-2xl" /></button>
                      <AnimatePresence>
                        {isNotifOpen && (
                          <motion.div
                            ref={notifRef}
                            className="absolute right-[320px] mt-7 w-80 bg-white dark:bg-gray-900 shadow-xl rounded-lg"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                          >
                            {/* Header */}
                            <div className="flex justify-between items-center px-4 py-3 border-b">
                              <h3 className="font-semibold text-gray-800 dark:text-white">Notifications</h3>
                              <button className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                                Clear All
                              </button>
                            </div>

                            {/* Notification List */}
                            <div className="p-4 space-y-4">
                              {/* 📌 Single Notification */}
                              <div className="flex items-start space-x-3">
                                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                                  D
                                </div>
                                <div className="text-sm">
                                  <p className="font-semibold text-gray-800 dark:text-white">Donoghue Susan</p>
                                  <p className="text-gray-600 dark:text-gray-300">Hi, How are you? What about our next meeting?</p>
                                </div>
                              </div>

                              {/* Another Notification */}
                              <div className="flex items-start space-x-3">
                                <img
                                  src="https://randomuser.me/api/portraits/women/44.jpg"
                                  alt="User"
                                  className="w-10 h-10 rounded-full"
                                />
                                <div className="text-sm">
                                  <p className="font-semibold text-gray-800 dark:text-white">Jacob Gines</p>
                                  <p className="text-gray-600 dark:text-gray-300">
                                    Answered to your comment on the cash flow forecast’s graph <span>🔔</span>.
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* View All Button */}
                            <div className="p-4 border-t">
                              <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
                                View All Notifications →
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    {/* Setting button and Popup */}
                    <div className='z-30'>
                      <button onClick={() => setIsOpen(true)}><FontAwesomeIcon icon={faGear} className='text-2xl' /></button>
                       {/* Theme Settings Popup */}
                        <AnimatePresence>
                            {isOpen && (
                              <motion.div 
                                className="fixed inset-0 bg-black h-[100vh] bg-opacity-50 flex justify-end"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {/* Theme Settings Popup */}
                                <motion.div
                                  className="w-80 h-[100vh] bg-white  shadow-lg  rounded-l-xl p-5"
                                  initial={{ x: "100%" }}  // Start from outside the screen
                                  animate={{ x: -285 }}        // Slide in
                                  exit={{ x: "100%" }}      // Slide out
                                  transition={{ duration: 0.4, ease: "easeInOut" }}
                                >
                                  {/* Header */}
                                  <div className="flex justify-between items-center  border-b pb-2">
                                    <h2 className="text-lg font-semibold text-black rounded-lg">Theme Settings</h2>
                                    <button onClick={() => setIsOpen(false)}>
                                      <FontAwesomeIcon icon={faTimes} className="text-gray-500 hover:text-gray-800 text-xl" />
                                    </button>
                                  </div>

                                  {/* Theme Options */}
                                  <div className="mt-4 space-y-4">
                                    {/* Color Scheme */}
                                    <div>
                                      <h3 className="text-gray-700 font-medium">Color Scheme</h3>
                                      <div className="flex flex-col space-y-4 mt-2">
                                        <label className="flex items-center space-x-2">
                                          <input type="radio" name="colorScheme" className="form-radio text-purple-600" defaultChecked />
                                          <span>Light</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                          <input type="radio" name="colorScheme" className="form-radio text-purple-600" />
                                          <span>Dark</span>
                                        </label>
                                      </div>
                                    </div>

                                    {/* Topbar Color */}
                                    <div>
                                      <h3 className="text-gray-700 font-medium">Topbar Color</h3>
                                      <div className="flex flex-col space-y-4 mt-2">
                                        <label className="flex items-center space-x-2">
                                          <input type="radio" name="topbarColor" className="form-radio text-purple-600" defaultChecked />
                                          <span>Light</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                          <input type="radio" name="topbarColor" className="form-radio text-purple-600" />
                                          <span>Dark</span>
                                        </label>
                                      </div>
                                    </div>

                                    {/* Menu Color */}
                                    <div>
                                      <h3 className="text-gray-700 font-medium">Menu Color</h3>
                                      <div className="flex flex-col space-y-4 mt-2">
                                        <label className="flex items-center space-x-2">
                                          <input type="radio" name="menuColor" className="form-radio text-purple-600" />
                                          <span>Light</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                          <input type="radio" name="menuColor" className="form-radio text-purple-600" defaultChecked />
                                          <span>Dark</span>
                                        </label>
                                      </div>
                                    </div>

                                    {/* Sidebar Size */}
                                    <div>
                                      <h3 className="text-gray-700 font-medium">Sidebar Size</h3>
                                      <div className="flex flex-col space-y-4 mt-2 mb-10">
                                        <label className="flex items-center space-x-2">
                                          <input type="radio" name="sidebarSize" className="form-radio text-purple-600" defaultChecked />
                                          <span>Default</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                          <input type="radio" name="sidebarSize" className="form-radio text-purple-600" />
                                          <span>Condensed</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                          <input type="radio" name="sidebarSize" className="form-radio text-purple-600" />
                                          <span>Hidden</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                          <input type="radio" name="sidebarSize" className="form-radio text-purple-600" />
                                          <span>Small Hover Active</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                          <input type="radio" name="sidebarSize" className="form-radio text-purple-600" />
                                          <span>Small Hover</span>
                                        </label>
                                      </div>
                                    </div>

                                    {/* Reset Button */}
                                    <button className="w-full bg-red-500 text-white py-2 rounded-md  hover:bg-red-600">
                                      Reset
                                    </button>
                                  </div>
                                </motion.div>
                              </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div>
                      <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                          <div className="w-10 rounded-full">
                            <img
                              alt="Tailwind CSS Navbar component"
                              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                          </div>
                        </div>
                        <ul
                          tabIndex={0}
                          className="menu menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-56 p-2 shadow-md">
                          <li className='font-semibold'><a href=""><FontAwesomeIcon icon={faCalendarDays}/> My Schedules</a></li>
                          <li className='font-semibold'><a href=""><FontAwesomeIcon icon={faTicket}/> Pricing</a></li>
                          <li className='font-semibold'><a href=""><FontAwesomeIcon icon={faCircleInfo} /> Help</a></li>
                          <li className='font-semibold'><a href=""><FontAwesomeIcon icon={faUser}/> Update Profile</a></li>
                          <hr />
                          <li className='font-semibold'><a href=""><FontAwesomeIcon icon={faRightFromBracket}/> Logout</a></li>
                        </ul>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarDashboard;
