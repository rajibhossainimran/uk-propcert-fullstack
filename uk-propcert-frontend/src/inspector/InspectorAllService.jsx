import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InspectorAllService = () => {
  const [completedServices, setCompletedServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = localStorage.getItem("userId");

  // Fetch completed services data
  useEffect(() => {
    if (!userId) return;

    const fetchCompletedServices = async () => {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/completedservices/${userId}`
        );
        setCompletedServices(data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching completed services");
        setLoading(false);
        toast.error("Failed to load services");
      }
    };

    fetchCompletedServices();
  }, [userId]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Completed Services <span>{completedServices.length}</span></h1>
        </div>

        {/* Main Content */}
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lime-700 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading completed services...</p>
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
                  <th className="px-4 py-4 text-left ">ID</th>
                  <th className="px-4 py-4 text-left">Service Name</th>
                  <th className="px-4 py-4 text-left">Status</th>
                  <th className="px-4 py-4 text-left">Date Completed</th>
                </tr>
              </thead>
              <tbody>
                {completedServices.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center py-4 text-gray-500">
                      No completed services found
                    </td>
                  </tr>
                ) : (
                  completedServices.map((service) => (
                    <tr key={service.id} className="border-t hover:bg-lime-100">
                      <td className="px-4 py-4 text-lime-800">{service.booking_id}</td>
                      <td className="px-4 py-4">{service.name}</td>
                      <td className="px-4 py-4">${service.status}</td>
                      <td className="px-4 py-4">{new Date(service.updated_at).toLocaleDateString()}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default InspectorAllService;
