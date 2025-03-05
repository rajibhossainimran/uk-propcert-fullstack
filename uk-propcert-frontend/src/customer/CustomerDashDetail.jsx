import { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  FiHome, 
  FiFileText, 
  FiSettings, 
  FiBell, 
  FiClock,
  FiCheckCircle,
  FiDollarSign,
  FiMenu,
  FiArrowLeft,
  FiX
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CustomerDashDetail = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [servicesModalOpen, setServicesModalOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  const userRole = localStorage.getItem("userRole");
  const userEmail = localStorage.getItem("email");
  const userId = localStorage.getItem("userId");

  // Fetch appointments using user_id 
  const fetchAppointmentsByUserId = async (userId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/appointment-services/${userId}`);
      setAppointments(response.data);
    } catch (error) {
      console.error("Error fetching appointments:", error.response?.data?.message || error.message);
    }
  };

  // Fetch services for a specific booking
  const fetchServicesByBookingId = async (bookingId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/appointmentServices/${bookingId}`);
      setSelectedServices(response.data);
      setServicesModalOpen(true);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchAppointmentsByUserId(userId);
    }
  }, [userId]);

  // Filter appointments
  const pendingAppointments = appointments.filter(item => item.order_status === "pending");
  const approvedAppointments = appointments.filter(item => item.order_status === "approved");
  const completedAppointments = appointments.filter(item => item.order_status === "completed");

  // Calculate stats
  const completedCertifications = completedAppointments.length;
  const ongoingServicesCount = approvedAppointments.length;
  const totalSpent = appointments.reduce((sum, item) => sum + parseFloat(item.total_price || 0), 0);

  // Services Modal Component
  const ServicesModal = () => {
    if (!servicesModalOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-xl font-semibold">Services Details</h3>
            <button 
              onClick={() => setServicesModalOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>
          
          <div className="p-4">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-2">Service Name</th>
                  <th className="pb-2">Price</th>
                  <th className="pb-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {selectedServices.map((service) => (
                  <tr key={service.id} className="border-b">
                    <td className="py-3 pr-4">
                      <div className="font-medium">{service.name}</div>
                      <div className="text-sm text-gray-600 mt-1">
                        {service.description}
                      </div>
                    </td>
                    <td className="py-3">£{service.price}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        service.status === 'approved' ? 'bg-green-100 text-green-800' :
                        service.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {service.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

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
                  <p className="text-2xl font-bold">{completedCertifications}</p>
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
                  <p className="text-2xl font-bold">{ongoingServicesCount}</p>
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
                  <p className="text-2xl font-bold">£{totalSpent.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Appointments Sections */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-xl font-semibold mb-4">Pending Appointments</h2>
              <AppointmentTableList 
                data={pendingAppointments} 
                fetchServices={fetchServicesByBookingId} 
              />
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-xl font-semibold mb-4">Approved Appointments</h2>
              <AppointmentTableList 
                data={approvedAppointments} 
                fetchServices={fetchServicesByBookingId} 
              />
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-xl font-semibold mb-4">Completed Appointments</h2>
              <AppointmentTableList 
                data={completedAppointments} 
                fetchServices={fetchServicesByBookingId} 
              />
            </div>
          </div>

          <ServicesModal />
        </div>
      </div>
    </div>
  );
};

// Appointment Table Component
const AppointmentTableList = ({ data, fetchServices }) => {
  if (data.length === 0) return <p className="text-gray-500 p-4">No appointments found</p>;

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50 text-left">
            <th className="p-3 text-sm font-semibold">Booking ID</th>
            <th className="p-3 text-sm font-semibold">Property Address</th>
            <th className="p-3 text-sm font-semibold">Total Price</th>
            <th className="p-3 text-sm font-semibold">Status</th>
            <th className="p-3 text-sm font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{item.booking_id}</td>
              <td className="p-3">{item.property_address}</td>
              <td className="p-3">£{item.total_price}</td>
              <td className="p-3">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  item.order_status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  item.order_status === 'approved' ? 'bg-blue-100 text-blue-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {item.order_status}
                </span>
              </td>
              <td className="p-3">
                <button
                  className="bg-lime-600 text-white px-3 py-1 rounded hover:bg-lime-700 text-sm"
                  onClick={() => fetchServices(item.booking_id)}
                >
                  View Services
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerDashDetail;