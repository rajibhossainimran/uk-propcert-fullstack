// CustomerDashboard.jsx
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import CustomerDashSidebar from './CustomerDashSidebar';
import { Outlet } from 'react-router-dom';

const CustomerDashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      <button className="md:hidden fixed top-4 right-4 p-2 bg-white rounded-lg shadow-sm z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <FiMenu className="w-6 h-6 text-lime-700" />
      </button>
      <div className="flex">
        <CustomerDashSidebar activeTab={activeTab} setActiveTab={setActiveTab} isMobileMenuOpen={isMobileMenuOpen} />
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;