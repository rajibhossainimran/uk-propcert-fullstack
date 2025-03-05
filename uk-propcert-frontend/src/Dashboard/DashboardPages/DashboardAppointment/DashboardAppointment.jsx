import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DashboardAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [statusFilter, setStatusFilter] = useState("pending");
  const [certifiers, setCertifiers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [selectedCertifier, setSelectedCertifier] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCompleteModal, setShowCompleteModal] = useState(false);

  // Fetch appointments
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://127.0.0.1:8000/api/appointment/${statusFilter}`
        );
        setAppointments(response.data);
      } catch (error) {
        toast.error("Failed to fetch appointments");
      } finally {
        setLoading(false);
      }
    };
    fetchAppointments();
  }, [statusFilter]);

  // Fetch certifiers
  useEffect(() => {
    const fetchCertifiers = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/inspectors");
        setCertifiers(response.data.data);
      } catch (error) {
        toast.error("Failed to load certifiers");
      }
    };
    fetchCertifiers();
  }, []);

  // Handle approval with certifier assignment
  const handleApprove = async () => {
    if (!selectedAppointment || !selectedCertifier) return;

    try {
      setUpdatingId(selectedAppointment.id);
      
      const response = await axios.put(
        `http://127.0.0.1:8000/api/appointment-services/${selectedAppointment.id}/status`,
        {
          status: "approved",
          certifier: selectedCertifier
        }
      );

      // Update local state
      setAppointments(prev => prev.map(app => 
        app.id === selectedAppointment.id ? response.data : app
      ));
      
      toast.success("Certifier assigned and appointment approved");
    } catch (error) {
      toast.error("Failed to update appointment");
      console.error("Update error:", error.response?.data);
    } finally {
      setUpdatingId(null);
      setSelectedAppointment(null);
      setSelectedCertifier("");
      setShowConfirmModal(false);
    }
  };

  // Handle completion
  const handleComplete = async () => {
    if (!selectedAppointment) return;

    try {
      setUpdatingId(selectedAppointment.id);
      
      const response = await axios.put(
        `http://127.0.0.1:8000/api/appointment-services/${selectedAppointment.id}/status`,
        {
          status: "completed"
        }
      );

      // Update local state
      setAppointments(prev => prev.map(app => 
        app.id === selectedAppointment.id ? response.data : app
      ));
      
      toast.success("Appointment marked as completed");
    } catch (error) {
      toast.error("Failed to complete appointment");
      console.error("Completion error:", error.response?.data);
    } finally {
      setUpdatingId(null);
      setSelectedAppointment(null);
      setShowCompleteModal(false);
    }
  };

  // Status style configuration
  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-800",
    approved: "bg-green-100 text-green-800",
    completed: "bg-purple-100 text-purple-800",
  };

  // Approval Modal
  const ConfirmModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 className="text-lg font-medium mb-4">Approve Appointment</h3>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Certifier
          </label>
          <select
            value={selectedCertifier}
            onChange={(e) => setSelectedCertifier(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={updatingId === selectedAppointment?.id}
          >
            <option value="">Choose a certifier...</option>
            {certifiers.map(certifier => (
              <option key={certifier.id} value={certifier.id}>
                {certifier.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={() => setShowConfirmModal(false)}
            className="px-4 py-2 text-gray-500 hover:text-gray-700"
            disabled={updatingId === selectedAppointment?.id}
          >
            Cancel
          </button>
          <button
            onClick={handleApprove}
            disabled={!selectedCertifier || updatingId === selectedAppointment?.id}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-lime-600 disabled:opacity-50"
          >
            {updatingId ? "Saving..." : "Confirm Approval"}
          </button>
        </div>
      </div>
    </div>
  );

  // Completion Modal
  const CompleteModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 className="text-lg font-medium mb-4">Complete Appointment</h3>
        <p className="text-gray-600 mb-6">
          Are you sure you want to mark appointment #{selectedAppointment?.id} as completed?
        </p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={() => setShowCompleteModal(false)}
            className="px-4 py-2 text-gray-500 hover:text-gray-700"
            disabled={updatingId === selectedAppointment?.id}
          >
            Cancel
          </button>
          <button
            onClick={handleComplete}
            disabled={updatingId === selectedAppointment?.id}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50"
          >
            {updatingId ? "Completing..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-sm my-20">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {showConfirmModal && <ConfirmModal />}
      {showCompleteModal && <CompleteModal />}

      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-lime-900">
          Appointment Management
        </h1>
        <p className="text-gray-500 mt-2">
          Manage and assign property certifications
        </p>
      </div>

      {/* Status Filter */}
      <div className="flex space-x-3 mb-8 border-b pb-6">
        {["pending", "approved", "completed"].map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              statusFilter === status
                ? "bg-lime-700 text-white"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Appointments Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certifier</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan="6" className="px-6 py-8 text-center">
                  <div className="animate-pulse space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto"></div>
                  </div>
                </td>
              </tr>
            ) : appointments.length > 0 ? (
              appointments.map((appointment) => (
                <tr key={appointment.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-lime-700">
                    #{appointment.booking_id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {appointment.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    £{appointment.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-sm ${statusStyles[appointment.status]}`}>
                      {appointment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {certifiers.find(c => c.id === appointment.certifier)?.name || "Not assigned"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-3">
                      {appointment.status === "pending" && (
                        <button
                          onClick={() => {
                            setSelectedAppointment(appointment);
                            setShowConfirmModal(true);
                          }}
                          className="text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md"
                        >
                          Assign Certifier
                        </button>
                      )}
                      {appointment.status === "approved" && (
                        <button
                          onClick={() => {
                            setSelectedAppointment(appointment);
                            setShowCompleteModal(true);
                          }}
                          className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md"
                        >
                          Mark Complete
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                  No appointments found in {statusFilter} status
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardAppointment;