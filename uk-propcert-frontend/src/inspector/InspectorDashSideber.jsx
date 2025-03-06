import { FiHome, FiFileText, FiSettings, FiArrowLeft } from 'react-icons/fi';
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const InspectorDashSideber = ({ activeTab, setActiveTab, isMobileMenuOpen }) => {
  return (
    <div className={`fixed md:relative md:block w-64 bg-white h-screen p-4 shadow-lg transform transition-transform duration-300 ${
      isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
    }`}>
      <div className="mb-8">
        <h2 className="text-xl font-bold text-lime-700">UK PROPCERT</h2>
      </div>
      <nav className="space-y-2">
        <Link to="/inspector/dashboard" className={`w-full flex items-center space-x-2 p-2 rounded-lg ${activeTab === 'dashboard' ? 'bg-lime-100 text-lime-700' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => setActiveTab('/mydashboard/dashboard')}>
          <FiHome className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        <Link to="all-services" className={`w-full flex items-center space-x-2 p-2 rounded-lg ${activeTab === 'documents' ? 'bg-lime-100 text-lime-700' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => setActiveTab('documents')}>
          <FiFileText className="w-5 h-5" />
          <span>Done Services</span>
        </Link>
        <button className={`w-full flex items-center space-x-2 p-2 rounded-lg ${activeTab === 'settings' ? 'bg-lime-100 text-lime-700' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => setActiveTab('settings')}>
          <FiSettings className="w-5 h-5" />
          <span>Settings</span>
        </button>
        <Link to='/' className={`w-full flex items-center space-x-2 p-2 rounded-lg ${activeTab === 'home' ? 'bg-lime-100 text-lime-700' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => setActiveTab('home')}>
          <FiArrowLeft className="w-5 h-5" />
          <span>Home</span>
        </Link>
        <Link to='/logout' className={`w-full flex items-center space-x-2 p-2 rounded-lg ${activeTab === 'home' ? 'bg-lime-100 text-lime-700' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => setActiveTab('home')}>
          <RiLogoutCircleLine className="w-5 h-5 text-red-700" />
          <span>LOGOUT</span>
        </Link>
      </nav>
    </div>
  );
};

export default InspectorDashSideber;