import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  FiHome,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiCalendar,
  FiFileText,
  FiSettings,
  FiUser,
  FiMapPin,
  FiAlertCircle
} from 'react-icons/fi';

const Demo = () => {
  const [inspections, setInspections] = useState([]);
  const [selectedInspection, setSelectedInspection] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const userId = localStorage.getItem("userId");

  // Mock data - replace with API calls
  const mockInspections = [
    {
      id: 1,
      propertyAddress: "123 Main St, London",
      date: "2024-03-20",
      type: "Gas Safety Check",
      status: "completed",
      reportUrl: "/reports/1.pdf"
    },
    {
      id: 2,
      propertyAddress: "45 Oak Rd, Manchester",
      date: "2024-03-22",
      type: "Electrical Inspection",
      status: "pending"
    },
    {
      id: 3,
      propertyAddress: "78 Pine Ave, Birmingham",
      date: "2024-03-25",
      type: "Fire Risk Assessment",
      status: "scheduled"
    }
  ];

  // Stats calculations
  const totalInspections = mockInspections.length;
  const completedInspections = mockInspections.filter(i => i.status === 'completed').length;
  const pendingInspections = mockInspections.filter(i => i.status === 'pending').length;
  const totalEarnings = completedInspections * 150; // Assuming £150 per inspection

  useEffect(() => {
    // Fetch inspector's inspections from API
    const fetchInspections = async () => {
      try {
        // const response = await axios.get(`/api/inspectors/${userId}/inspections`);
        setInspections(mockInspections);
      } catch (error) {
        console.error("Error fetching inspections:", error);
      }
    };
    
    fetchInspections();
  }, [userId]);

  const InspectionDetailsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FiFileText className="text-lime-700" />
            Inspection Details
          </h3>
          
          {selectedInspection && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FiMapPin className="text-gray-600" />
                <p className="font-medium">{selectedInspection.propertyAddress}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-gray-600" />
                  <span>Date: {selectedInspection.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiAlertCircle className="text-gray-600" />
                  <span>Type: {selectedInspection.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-gray-600" />
                  <span>Status: 
                    <span className={`ml-2 px-2 py-1 rounded-full text-sm ${
                      selectedInspection.status === 'completed' ? 'bg-green-100 text-green-800' :
                      selectedInspection.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {selectedInspection.status}
                    </span>
                  </span>
                </div>
              </div>

              {selectedInspection.reportUrl && (
                <a
                  href={selectedInspection.reportUrl}
                  className="inline-flex items-center gap-2 text-lime-700 hover:text-lime-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiFileText /> Download Full Report
                </a>
              )}

              <button
                onClick={() => setShowDetailsModal(false)}
                className="mt-4 w-full bg-lime-700 text-white py-2 rounded-lg hover:bg-lime-800"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Property Inspector Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, {localStorage.getItem("userName")}</p>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <FiSettings className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-lime-100 rounded-full">
                <FiCheckCircle className="w-6 h-6 text-lime-700" />
              </div>
              <div>
                <p className="text-gray-500">Completed</p>
                <p className="text-2xl font-bold">{completedInspections}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-lime-100 rounded-full">
                <FiClock className="w-6 h-6 text-lime-700" />
              </div>
              <div>
                <p className="text-gray-500">Pending</p>
                <p className="text-2xl font-bold">{pendingInspections}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-lime-100 rounded-full">
                <FiDollarSign className="w-6 h-6 text-lime-700" />
              </div>
              <div>
                <p className="text-gray-500">Earnings</p>
                <p className="text-2xl font-bold">£{totalEarnings}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-lime-100 rounded-full">
                <FiHome className="w-6 h-6 text-lime-700" />
              </div>
              <div>
                <p className="text-gray-500">Total</p>
                <p className="text-2xl font-bold">{totalInspections}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Inspections */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FiCalendar className="text-lime-700" />
                Upcoming Inspections
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b">
                      <th className="pb-3">Property</th>
                      <th className="pb-3">Date</th>
                      <th className="pb-3">Type</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockInspections.map((inspection) => (
                      <tr key={inspection.id} className="border-b hover:bg-gray-50">
                        <td className="py-3">{inspection.propertyAddress}</td>
                        <td className="py-3">{inspection.date}</td>
                        <td className="py-3">{inspection.type}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            inspection.status === 'completed' ? 'bg-green-100 text-green-800' :
                            inspection.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {inspection.status}
                          </span>
                        </td>
                        <td className="py-3">
                          <button
                            onClick={() => {
                              setSelectedInspection(inspection);
                              setShowDetailsModal(true);
                            }}
                            className="text-lime-700 hover:text-lime-800"
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Schedule Calendar */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FiCalendar className="text-lime-700" />
              Inspection Calendar
            </h2>
            <div className="space-y-3">
              {mockInspections.map((inspection) => (
                <div key={inspection.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded">
                  <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                  <div>
                    <p className="font-medium">{inspection.type}</p>
                    <p className="text-sm text-gray-600">{inspection.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {showDetailsModal && <InspectionDetailsModal />}
      </div>
    </div>
  );
};

export default Demo;