import { useState, useEffect } from "react";
import axios from "axios";
import { ukprop } from "../../Url/config";

// Modal component to show service details
const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-70 z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg w-1/2 transform transition-all duration-300 hover:scale-105">
      <h3 className="text-2xl font-semibold text-lime-700">{service.name}</h3>
      <p className="text-gray-600 mt-4 text-lg">{service.description}</p>
      <p className="text-gray-900 font-medium mt-4 text-xl">Price: ${service.price}</p>
      <div className="flex justify-end">
        <button
          className="mt-6 bg-red-400 hover:bg-red-500 text-white py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default function Service() {
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [services, setServices] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState(null); // New state for modal

  // Fetch categories
  useEffect(() => {
    axios.get(`${ukprop}/categories`)
      .then(response => {
        setCategories(response.data);
        if (response.data.length > 0) {
          setActiveTab(response.data[0].id);
        }
      })
      .catch(error => {
        console.error("Error fetching categories:", error);
        setError("Failed to fetch categories.");
      });
  }, []);

  // Fetch services based on categories
  useEffect(() => {
    if (categories.length > 0) {
      axios.get(`${ukprop}/services`)
        .then(response => {
          const categorizedServices = {};
          categories.forEach(category => {
            categorizedServices[category.id] = response.data.filter(
              service => service.category_id === category.id
            );
          });

          setServices(categorizedServices);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching services:", error);
          setError("Failed to fetch services.");
          setLoading(false);
        });
    }
  }, [categories, activeTab]);

  // Open modal with selected service details
  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="w-full mx-auto p-5">
      <h2 className="py-12 text-5xl font-semibold text-lime-700 mb-8 text-center">
        Services
      </h2>

      {/* Tabs */}
      <div className="flex md:flex-row flex-col">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-12 py-2 font-semibold text-xl transition-all duration-300 ${
              activeTab === category.id
                ? "rounded-t-[50px] text-white bg-lime-600 border border-lime-600" 
                : "rounded-t-[50px] text-lime-800 border border-lime-600 bg-lime-100 hover:bg-lime-300"
            }`}
            onClick={() => setActiveTab(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Loading & Error Handling */}
      {loading && <p className="text-center text-xl text-gray-500 mt-6">Loading services...</p>}
      {error && <p className="text-center text-red-500 mt-6">{error}</p>}

      {/* Grid Content */}
      {!loading && !error && (
        <div className="bg-white border border-lime-600 rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {services[activeTab]?.length > 0 ? (
              services[activeTab].map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleServiceClick(service)} // Open modal
                  className="flex justify-center items-center py-3 px-3 bg-gray-100 hover:bg-lime-700 rounded-3xl shadow-md hover:text-white group cursor-pointer"
                >
                  <span className="font-semibold text-gray-600 group-hover:text-white text-xl">
                    {service.name}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-3">No services available.</p>
            )}
          </div>
        </div>
      )}

      {/* Service Modal */}
      <ServiceModal service={selectedService} onClose={closeModal} />
    </div>
  );
}
