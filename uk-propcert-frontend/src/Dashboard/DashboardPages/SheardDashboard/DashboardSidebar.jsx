import { useState } from "react";
import { FaHome, FaUserTie, FaUsers, FaShoppingCart, FaExchangeAlt, FaStar, FaEnvelope, FaInbox, FaFileAlt, FaLock, FaCogs } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";


const DashboardSidebar = () => {

  const navLinks = <>
  <li className="hover:bg-gray-800 mb-2 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer">
      <NavLink to={'dashboard'} className="flex items-center">
          <FaHome />
          <span className="ml-5">Dashboards</span>
      </NavLink>
  </li>
  <li className="hover:bg-gray-800 mb-2 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer">
      <NavLink to={'dashboardproperty'} className="flex items-center">
          <FaUserTie />
          <span className="ml-5">Appointments</span>
      </NavLink>
  </li>
  <li className="hover:bg-gray-800 mb-2 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer">
      <NavLink to={'categories'} className="flex items-center">
          <FaUsers />
          <span className="ml-5">Category</span>
      </NavLink>
  </li>
  <li className="hover:bg-gray-800 mb-2 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer">
      <NavLink to={'manage-service'} className="flex items-center">
          <FaUsers />
          <span className="ml-5">Manage Service</span>
      </NavLink>
  </li>
  <li className="hover:bg-gray-800 mb-2 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer">
      <NavLink to={'/'} className="flex items-center">
          <FaShoppingCart />
          <span className="ml-5">Feedback</span>
      </NavLink>
  </li>
  <li className="hover:bg-gray-800 mb-2 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer">
      <NavLink to={'/'} className="flex items-center">
          <FaExchangeAlt />
          <span className="ml-5">Home</span>
      </NavLink>
  </li>
  
  
</>
    return (
        <div>
            <div id="sidebar" className={`h-[100vh] fixed bg-lime-950 text-white w-72 p-5 transition-all duration-300`}>
              <div className="flex items-center space-x-3">
                <div className="bg-gray-500 p-2 rounded-full">
                  <FaHome size={24} />
                </div>
                <h1 className="text-xl font-bold">Dashboard</h1>
              </div>
              <p className="text-gray-400 mt-8 mb-5 text-base">MENU</p>
              <ul className="text-lg" >
                {navLinks}
              </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;