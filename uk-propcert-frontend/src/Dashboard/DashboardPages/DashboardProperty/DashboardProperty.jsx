import { useState } from 'react';
import { FaEye, FaTimes } from 'react-icons/fa';

const DashboardProperty = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: 'John Doe',
      date: '2024-03-20',
      time: '10:00 AM',
      doctor: 'Dr. Smith',
      status: 'Confirmed',
    },
    {
      id: 2,
      patientName: 'Jane Smith',
      date: '2024-03-20',
      time: '11:30 AM',
      doctor: 'Dr. Johnson',
      status: 'Pending',
    },
    // Add 8 more appointment objects here...
    {
      id: 10,
      patientName: 'Mike Johnson',
      date: '2024-03-21',
      time: '3:00 PM',
      doctor: 'Dr. Wilson',
      status: 'Cancelled',
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto mt-28">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Appointments List</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{appointment.patientName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.doctor}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(appointment.status)}`}>
                      {appointment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-4">
                      <FaEye className="inline-block" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <FaTimes className="inline-block" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProperty;