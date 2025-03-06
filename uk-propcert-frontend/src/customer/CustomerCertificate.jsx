import { useState, useEffect } from "react";

const CustomerCertificate = () => {
  const [appointments2, setAppointments2] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem("userId");
  const apiBaseUrl = "http://127.0.0.1:8000/api/appointmentServices/";

  // ✅ Fetch Appointments (First API Call)
  useEffect(() => {
    const fetchAppointments = async () => {
      if (!userId) {
        setError("User ID not found.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/appointment-services/${userId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setAppointments2(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAppointments();
  }, [userId]);

  // ✅ Fetch Detailed Services (Second API Call after `appointments2` is ready)
  useEffect(() => {
    if (appointments2.length === 0) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const bookingIds = appointments2.map(item => item.booking_id);

        const responses = await Promise.all(
          bookingIds.map(id =>
            fetch(`${apiBaseUrl}${id}`).then(res => res.json())
          )
        );

        setAppointments(responses.flat());
      } catch (error) {
        setError("Error fetching appointment services.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [appointments2]);

  // ✅ Filter Completed Appointments
  const completedAppointments = appointments.filter(
    (appointment) => appointment.status === "completed"
  );

  return (
    <div className="container mx-auto p-6 mt-20">
      <h2 className="text-3xl font-bold mb-6 text-center text-lime-900">
        Completed Service Certificates
      </h2>

      {loading ? (
        <p className="text-center text-gray-500 text-lg">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500 text-lg">{error}</p>
      ) : completedAppointments.length === 0 ? (
        <p className="text-center text-gray-700 text-lg">No completed services found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white border-l-4 border-green-500 rounded-lg shadow-lg p-5 transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2 text-lime-800">
                {appointment.name}
              </h3>
              <p className="text-gray-600 text-sm">{appointment.description}</p>

              <div className="mt-4 space-y-2 text-sm">
                <p><span className="font-semibold text-gray-700">Booking ID:</span> {appointment.booking_id}</p>
                <p>
                  <span className="font-semibold text-gray-700">Status:</span>{" "}
                  <span className="px-3 py-1 text-xs font-medium uppercase tracking-wide rounded-full bg-green-500 text-white">
                    {appointment.status}
                  </span>
                </p>
                <p><span className="font-semibold">Price:</span> ${appointment.price}</p>
                <p><span className="font-semibold">Issued:</span> {appointment.issued}</p>
                <p><span className="font-semibold">Expire:</span> {appointment.expire}</p>

                {/* Certificate URL with Copy Button */}
                <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md mt-2">
                  <input
                    type="text"
                    value={appointment.certificate_img}
                    readOnly
                    className="w-full text-xs border-none bg-transparent text-gray-600 outline-none"
                  />
                  <button
                    onClick={() => navigator.clipboard.writeText(appointment.certificate_img)}
                    className="p-1 rounded bg-blue-500 hover:bg-blue-600 text-white transition"
                  >
                    Copy
                  </button>
                </div>
              </div>

              {/* Certificate Image */}
              {appointment.certificate_img && (
                <div className="mt-4">
                  <img
                    src={appointment.certificate_img}
                    alt="Certificate"
                    className="w-full h-40 object-cover rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomerCertificate;
