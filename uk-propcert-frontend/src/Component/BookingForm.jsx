import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get selected services from state
  const selectedServices = location.state?.selectedServices || [];

  // State for personal details form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyAddress: "",
    propertyType: "house",
    certificationType: "EPC",
    preferredDate: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // State for selected services
  const [services, setServices] = useState(
    selectedServices.map((service) => ({
      id: service.id,
      name: service.name,
      price: Number(service.price),
    }))
  );

  // Calculate Total Price
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = services.reduce((sum, service) => sum + service.price, 0);
    setTotalPrice(total);
  }, [services]);

  // Handle personal form input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Handle service input change
  const handleServiceChange = (index, field, value) => {
    const updatedServices = [...services];
    updatedServices[index][field] = field === "price" ? Number(value) : value;
    setServices(updatedServices);
  };

  // Validate form before submission
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Full Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.propertyAddress) newErrors.propertyAddress = "Address is required.";
    if (!formData.preferredDate) newErrors.preferredDate = "Please select a date.";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      console.log("Form submitted:", formData);
      console.log("Selected Services:", services);
      setSubmitted(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        {submitted ? (
          <div className="text-green-700 bg-green-100 p-4 rounded-lg text-center">
            🎉 Your booking request has been received! We will contact you soon.
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
              Property Certification Booking
            </h2>
  
            {/* Show Selected Services */}
            {services.length > 0 ? (
              services.map((service, index) => (
                <div key={service.id} className="mb-6 bg-white p-4 rounded-lg shadow-md">
                  <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">Service Name</label>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-md focus:ring focus:ring-lime-500"
                      value={service.name}
                      onChange={(e) => handleServiceChange(index, "name", e.target.value)}
                    />
                  </div>
  
                  <div className="mb-4">
                    <label className="block text-lg font-medium mb-2">Price (£)</label>
                    <input
                      type="number"
                      className="w-full p-3 border rounded-md focus:ring focus:ring-lime-500"
                      value={service.price}
                      onChange={(e) => handleServiceChange(index, "price", e.target.value)}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-red-500 text-center">No services selected!</p>
            )}
  
            {/* Total Price */}
            <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
              <label className="block text-lg font-medium mb-2">Total Price (£)</label>
              <input
                type="text"
                className="w-full p-3 border rounded-md bg-gray-100"
                value={totalPrice}
                readOnly
              />
            </div>
  
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 border-gray-300"
                    required
                  />
                </div>
  
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 border-gray-300"
                    required
                  />
                </div>
              </div>
  
              {/* Phone & Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 border-gray-300"
                  required
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-700">Property Address *</label>
                <textarea
                  name="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 border-gray-300"
                  rows="3"
                  required
                />
              </div>
  
              {/* Preferred Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Date *</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 border-gray-300"
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>
  
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
                disabled={loading}
              >
                {loading ? "Processing..." : "Request Booking"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
  
};

export default BookingForm;
