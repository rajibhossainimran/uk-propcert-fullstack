import { useEffect, useState } from "react";
import axios from "axios";
import { FiBell, FiX } from "react-icons/fi";
import { Transition } from "@headlessui/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure to import Toastify CSS

const InspectorDashDetail = () => {
  // State management
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  // User data from localStorage
  const userId = localStorage.getItem("userId");
  const userRole = localStorage.getItem("userRole");
  const userEmail = localStorage.getItem("email");

  // Update status modal state
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [currentServiceId, setCurrentServiceId] = useState(null);
  const [formData, setFormData] = useState({
    certificate_img: '',
    issued: '',
    expire: '',
    submit_date: '',
    status: 'completed'
  });

  // Fetch approved services
  useEffect(() => {
    if (!userId) return;
    
    const fetchServices = async () => {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/approvedservices/${userId}`
        );
        setServices(data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching services");
        setLoading(false);
      }
    };

    fetchServices();
  }, [userId]);

  // Appointment details handler
  const fetchAppointmentDetails = async (bookingId) => {
    try {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/appointmentdetails/${bookingId}`
      );
      setAppointmentDetails(data);
      setIsAppointmentModalOpen(true);
    } catch (err) {
      setError("Failed to load appointment details");
    }
  };

  // Handle status update
  const handleUpdateStatusClick = (serviceId) => {
    setCurrentServiceId(serviceId);
    setIsUpdateModalOpen(true);
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://127.0.0.1:8000/api/appointment-services/${currentServiceId}/update-status`,
        formData
      );

      // Refresh services list
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/approvedservices/${userId}`
      );
      setServices(data);

      // Success message
      toast.success("Service status updated successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      setIsUpdateModalOpen(false);
      setFormData({
        certificate_img: '',
        issued: '',
        expire: '',
        submit_date: '',
        status: 'completed'
      });

    } catch (err) {
      setError(err.response?.data?.message || "Update failed");

      // Error message
       // Success message
       toast.success("Service status updated successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        {/* Header Section */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome back, {userRole}
            </h1>
            <p className="text-sm text-gray-600 py-3">{userEmail}</p>
          </div>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <FiBell className="w-6 h-6" />
          </button>
        </div>

        {/* Main Content */}
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lime-700 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading services...</p>
          </div>
        ) : error ? (
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <p className="text-red-600">{error}</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border rounded-lg">
              <thead className="bg-lime-200 text-lime-900">
                <tr>
                  <th className="px-4 py-4 text-left">Booking ID</th>
                  <th className="px-4 py-4 text-left">Service Name</th>
                  <th className="px-4 py-4 text-left">Status</th>
                  <th className="px-4 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center py-4 text-gray-500">
                      No approved services found
                    </td>
                  </tr>
                ) : (
                  services.map((service) => (
                    <tr key={service.id} className="border-t hover:bg-gray-50">
                      <td className="px-4 py-2">{service.booking_id}</td>
                      <td className="px-4 py-2">{service.name}</td>
                      <td className="px-4 py-2">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          service.status === 'completed' ? 'bg-green-100 text-green-800' :
                          service.status === 'approved' ? 'bg-blue-100 text-blue-800' :
                          service.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {service.status}
                        </span>
                      </td>
                      <td className="px-4 py-2 text-center space-x-2">
                        <button
                          onClick={() => fetchAppointmentDetails(service.booking_id)}
                          className="bg-lime-700 text-white px-4 py-2 rounded-lg hover:bg-lime-800 transition-colors"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => handleUpdateStatusClick(service.id)}
                          className="bg-sky-700 text-white px-4 py-2 rounded-lg hover:bg-sky-800 transition-colors"
                        >
                          Update Status
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Appointment Details Modal */}
        <Transition show={isAppointmentModalOpen} as="div">
          <Transition.Child
            as="div"
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
          >
            <div className="min-h-screen flex items-center justify-center p-4">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                className="bg-white rounded-lg shadow-xl transform transition-all w-full max-w-md"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-semibold text-lime-950">Appointment Details</h3>
                    <button 
                      onClick={() => setIsAppointmentModalOpen(false)}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <FiX className="w-6 h-6" />
                    </button>
                  </div>
                  {appointmentDetails ? (
                    <div className="space-y-3 text-gray-700">
                      <DetailItem label="Client Name" value={appointmentDetails.name} />
                      <DetailItem label="Email" value={appointmentDetails.email} />
                      <DetailItem label="Phone" value={appointmentDetails.phone} />
                      <DetailItem label="Location" value={appointmentDetails.address} />
                      <DetailItem label="Details" value={appointmentDetails.details} />
                      <DetailItem 
                        label="Date" 
                        value={new Date(appointmentDetails.date).toLocaleDateString()} 
                      />
                    </div>
                  ) : (
                    <div className="animate-pulse space-y-3">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-4 bg-gray-200 rounded" style={{ width: `${Math.random() * 40 + 60}%` }} />
                      ))}
                    </div>
                  )}
                </div>
              </Transition.Child>
            </div>
          </Transition.Child>
        </Transition>

          {/* Update Status Modal */}
<Transition show={isUpdateModalOpen}>
  <Transition.Child
    as="div"
    enter="ease-out duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    className="fixed inset-0 bg-black bg-opacity-50 z-50"
  >
    <div className="min-h-screen flex items-center justify-center p-4">
      <Transition.Child
        enter="ease-out duration-300"
        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enterTo="opacity-100 translate-y-0 sm:scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        className="bg-white rounded-lg shadow-xl transform transition-all w-full max-w-md"
      >
        <form onSubmit={handleSubmitUpdate} className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold">Complete Service</h3>
            <button 
              type="button"
              onClick={() => setIsUpdateModalOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Certificate Image URL
              </label>
              <input
                type="url"
                required
                className="w-full px-3 py-2 border rounded-lg"
                value={formData.certificate_img}
                onChange={(e) => setFormData({...formData, certificate_img: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Issued Date
              </label>
              <input
                type="date"
                required
                className="w-full px-3 py-2 border rounded-lg"
                value={formData.issued}
                onChange={(e) => setFormData({...formData, issued: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expire Date
              </label>
              <input
                type="date"
                required
                className="w-full px-3 py-2 border rounded-lg"
                value={formData.expire}
                onChange={(e) => setFormData({...formData, expire: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Submit Date
              </label>
              <input
                type="date"
                required
                className="w-full px-3 py-2 border rounded-lg"
                value={formData.submit_date}
                onChange={(e) => setFormData({...formData, submit_date: e.target.value})}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-lime-700 text-white py-2 px-4 rounded-lg hover:bg-lime-800 transition-colors"
            >
              Mark as Completed
            </button>
          </div>
        </form>
      </Transition.Child>
    </div>
  </Transition.Child>
</Transition>        
       
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }) => (
  <div className="flex justify-between items-start">
    <span className="font-medium text-lime-800 text-[16px] w-1/3">{label}:</span>
    <span className="text-gray-600 text-right w-2/3">{value || '-'}</span>
  </div>
);

export default InspectorDashDetail;