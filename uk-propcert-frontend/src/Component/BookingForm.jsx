import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ukprop } from "../Url/config";
import { useLocation, useNavigate } from "react-router-dom";

const BookingForm = () => {

  const location = useLocation();
  const navigate = useNavigate();

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
        user_id: "",
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
            const response = await axios.post(`${ukprop}/appointments`, formData);
            console.log("Form Submitted Successfully:", response.data);
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
        } catch (error) {
            console.error("Error submitting form:", error.response?.data || error.message);
            toast.error("Failed to add booking. Please try again.");
        }
    };
    console.log(formData);

    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-32">
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium" htmlFor="user_id">User ID</label>
                    <input type="text" name="user_id" id="user_id" value={formData.user_id} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
                </div>
                {/* <div className="mb-4">
                    <label className="block text-gray-700 font-medium" htmlFor="booking_id">Booking ID</label>
                    <input type="text" name="booking_id" id="booking_id" value={formData.booking_id} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
                </div> */}
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
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium" htmlFor="total_price">Total Price</label>
                    <input type="text" name="total_price" id="total_price" value={formData.total_price} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700">Submit</button>
            </form>
            <ToastContainer />
        </>
    );
};

export default BookingForm;
