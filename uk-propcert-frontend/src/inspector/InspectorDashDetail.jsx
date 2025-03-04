import { useState } from 'react';
import { 
  FiHome, 
  FiFileText, 
  FiSettings, 
  FiBell, 
  FiClock,
  FiCheckCircle,
  FiDollarSign,
  FiMenu,
  FiArrowLeft
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const InspectorDashDetail = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Dummy data - replace with real data from your API
  const ongoingServices = [
    { id: 1, name: 'Structural Survey', status: 'In Progress', progress: 60 },
    { id: 2, name: 'Electrical Safety Check', status: 'Pending', progress: 20 },
  ];

  const recentDocuments = [
    { id: 1, name: 'Survey Report.pdf', date: '2024-02-15' },
    { id: 2, name: 'Payment Receipt.pdf', date: '2024-02-10' },
  ];

  const userRole = localStorage.getItem("userRole");
  const userEmail = localStorage.getItem("email");
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 right-4 p-2 bg-white rounded-lg shadow-sm z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <FiMenu className="w-6 h-6 text-lime-700" />
      </button>

      <div className="flex">
        

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8">
          {/* Header */}
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Welcome back, {userRole}</h1>
              <p className='text-sm text-gray-600 py-3'>{userEmail}</p>
              <p className="text-gray-600">Here's your certification overview</p>
            </div>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <FiBell className="w-6 h-6" />
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-lime-100 rounded-full">
                  <FiCheckCircle className="w-6 h-6 text-lime-700" />
                </div>
                <div>
                  <p className="text-gray-500">Completed Certifications</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-lime-100 rounded-full">
                  <FiClock className="w-6 h-6 text-lime-700" />
                </div>
                <div>
                  <p className="text-gray-500">Ongoing Services</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-lime-100 rounded-full">
                  <FiDollarSign className="w-6 h-6 text-lime-700" />
                </div>
                <div>
                  <p className="text-gray-500">Total Spent</p>
                  <p className="text-2xl font-bold">£2,450</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ongoing Services */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
            <h2 className="text-xl font-semibold mb-4">Ongoing Services</h2>
            <div className="space-y-4">
              {ongoingServices.map((service) => (
                <div key={service.id} className="border-b pb-4 last:border-0">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">{service.name}</h3>
                    <span className="text-sm text-lime-700">{service.status}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-lime-600 h-2 rounded-full"
                      style={{ width: `${service.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Documents */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h2 className="text-xl font-semibold mb-4">Recent Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recentDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-3">
                    <FiFileText className="w-5 h-5 text-lime-700" />
                    <div>
                      <p className="font-medium">{doc.name}</p>
                      <p className="text-sm text-gray-500">{doc.date}</p>
                    </div>
                  </div>
                  <button className="text-lime-700 hover:text-lime-800">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspectorDashDetail;
