import { useState, useEffect } from "react";

const Demo = () => {
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
    if (appointments2.length === 0) return; // ✅ Prevents fetching on first render

    const fetchData = async () => {
      setLoading(true);
      try {
        const bookingIds = appointments2.map(item => item.booking_id);

        const responses = await Promise.all(
          bookingIds.map(id =>
            fetch(`${apiBaseUrl}${id}`).then(res => res.json())
          )
        );

        // Flatten the nested arrays
        setAppointments(responses.flat());
      } catch (error) {
        setError("Error fetching appointment services.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [appointments2]); // ✅ Runs only when `appointments2` updates

  console.log(appointments);

  return (
    <div className="container mx-auto p-6 mt-20">
      <h2 className="text-2xl font-bold mb-4 text-lime-900"> Services Certicicates</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="bg-white border rounded-lg shadow-lg p-4">
              <h3 className="text-lg font-bold mb-2 text-lime-800">{appointment.name}</h3>
              <p className="text-gray-600 text-sm">{appointment.description}</p>

              <div className="mt-3">
                <p className="py-2"><span className="font-semibold py-2">Booking ID:</span> {appointment.booking_id}</p>
                <p className="py-2">
                  <span className="font-semibold py-2">Status:</span>{" "}
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      appointment.status === "completed"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </p>
                <p className="py-2"><span className="font-semibold">Price:</span> ${appointment.price}</p>
                <p className="py-2"><span className="font-semibold">Issued:</span> {appointment.issued}</p>
                <p className="py-2"><span className="font-semibold">Expire:</span> {appointment.expire}</p>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-sm">Certificate URL:</span>
                  <input
                    type="text"
                    value={appointment.certificate_img}
                    readOnly
                    className="w-full border px-2 py-1 text-sm bg-gray-100 rounded"
                  />
                  <button
                    onClick={() => navigator.clipboard.writeText(appointment.certificate_img)}
                    className="bg-blue-500 text-white px-2 py-1 text-xs rounded hover:bg-blue-600"
                  >
                    Copy
                  </button>
                </div>

              </div>

              {appointment.certificate_img && (
                <div className="mt-3">
                  <img
                    src={appointment.certificate_img}
                    alt="Certificate"
                    className="w-full h-40 object-cover rounded-lg"
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

export default Demo;
