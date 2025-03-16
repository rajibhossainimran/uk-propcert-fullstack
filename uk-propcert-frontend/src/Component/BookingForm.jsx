import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ukprop } from "../Url/config";
import { useLocation, useNavigate } from "react-router-dom";

const BookingForm = () => {

  const location = useLocation();
  const navigate = useNavigate();

//   get user id from local storage 
const userId = parseInt(localStorage.getItem("userId"));

  // Get selected services from location state
  const selectedServices = location.state?.selectedServices || [];
    console.log(selectedServices);

    const totalPrice = selectedServices.reduce((acc, service) => acc + parseFloat(service.price), 0);

    // booking id random number generator
    function generateRandom7DigitNumber() {
        return Math.floor(1000000 + Math.random() * 9000000);
    }
    let booking_id= generateRandom7DigitNumber();

    const [formData, setFormData] = useState({
        user_id: `${userId}`,
        booking_id: `${booking_id}`,
        name: "",
        email: "",
        phone: "",
        property_address: "",
        property_details: "",
        date: "",
        total_price: `${totalPrice}`
    });

    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          // First request: Create the appointment
          const response1 = await axios.post(`${ukprop}/appointments`, formData);
          console.log("Appointment Created Successfully:", response1.data);
  
          // Get the booking ID from the response (if needed)
          const bookingId = response1.data.booking_id;
  
          // Prepare the service data
          const formattedData = selectedServices.map(service => ({
              booking_id: bookingId,  // Use the booking ID from the first response
              name: service.name,
              description: service.description,
              price: service.price,
              service_id: service.id,
              certifier: service.certifier || null
          }));
  
          // Second request: Create the appointment services
          const response2 = await axios.post(`${ukprop}/appointment-services`, { services: formattedData });
          console.log("Appointment Services Added Successfully:", response2.data);
  
          toast.success("Booking successfully added!");
          setFormData({
              user_id: "",
              booking_id: "",
              name: "",
              email: "",
              phone: "",
              property_address: "",
              property_details: "",
              date: "",
              total_price: ""
          });
          navigate("/booking-success");
  
      } catch (error) {
          console.error("Error submitting form:", error.response?.data || error.message);
          toast.error("Failed to add booking. Please try again.");
      }
  };
    // console.log(formData);

    return (
        <>

<div className="p-5 mt-32 w-[90%] mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center text-lime-800 ">
        Selected Services
      </h2>

      {selectedServices.length === 0 ? (
        <p className="text-center text-gray-500">No services selected.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-lime-800 text-white">
              <tr>
                {/* <th className="p-3 text-left">ID</th> */}
                <th className="p-3 text-left">Service Name</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Price (£)</th>
              </tr>
            </thead>
            <tbody>
              {selectedServices.map((service, index) => (
                <tr
                  key={service.id}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-lime-50 hover:bg-white" : "bg-lime-100 hover:bg-white"
                  }`}
                >
                  
                  <td className="p-3 font-semibold text-gray-700">
                    {service.name}
                  </td>
                  <td className="p-3 text-gray-600">{service.category.name}</td>
                  <td className="p-3 text-sm text-gray-500">
                    {service.description}
                  </td>
                  <td className="p-3 font-bold text-green-600">£{service.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <p className="text-3xl my-4 text-lime-800">Total Price : <span className="font-bold text-green-600">£{totalPrice}</span></p>
    </div>

            <h1 className="text-3xl font-bold mb-4 text-center text-lime-800 mt-10">Fill Out the Booking Form</h1>
            <form onSubmit={handleSubmit} className="w-[60%] mx-auto p-6 bg-white  rounded-lg mt-5 mb-10 shadow-lg shadow-lime-300/50 border border-lime-500">
               
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium" htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium" htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium" htmlFor="phone">Phone</label>
                    <input type="text" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium" htmlFor="property_address">Property Address</label>
                    <textarea name="property_address" id="property_address" value={formData.property_address} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium" htmlFor="property_details">Property Details</label>
                    <textarea name="property_details" id="property_details" value={formData.property_details} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium" htmlFor="date">Date</label>
                    <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
                </div>
               
                <button type="submit" className="w-[40%] text-center block mx-auto bg-lime-600 text-white py-2 rounded my-8 hover:bg-lime-700">Submit</button>
            </form>
            <ToastContainer />
        </>
    );
};

export default BookingForm;
