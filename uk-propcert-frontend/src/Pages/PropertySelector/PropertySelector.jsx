import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ukprop } from "../../Url/config";

const PropertySelector = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState({});
  const [selectedServices, setSelectedServices] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Fetch categories (property types)
  useEffect(() => {
    axios
      .get(`${ukprop}/categories`)
      .then((response) => {
        setCategories(response.data);
        if (response.data.length > 0) {
          setSelectedType(response.data[0].id);
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setError("Failed to fetch categories.");
      });
  }, []);

  // Fetch services based on categories
  useEffect(() => {
    if (categories.length > 0) {
      axios
        .get(`${ukprop}/services`)
        .then((response) => {
          const categorizedServices = {};
          categories.forEach((category) => {
            categorizedServices[category.id] = response.data.filter(
              (service) => service.category_id === category.id
            );
          });

          setServices(categorizedServices);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching services:", error);
          setError("Failed to fetch services.");
          setLoading(false);
        });
    }
  }, [categories]);

  // Handle service selection
  const toggleServiceSelection = (serviceId) => {
    setSelectedServices((prevSelected) => {
      const updatedSelection = new Set(prevSelected);
      if (updatedSelection.has(serviceId)) {
        updatedSelection.delete(serviceId);
      } else {
        updatedSelection.add(serviceId);
      }
      return updatedSelection;
    });
  };

  // Get services based on selected category
  const getDisplayedServices = () => {
    if (!selectedType) return [];

    if (selectedType === "New Build / Conversion") {
      return Object.values(services).flat();
    }

    return services[selectedType] || [];
  };

  // Handle Next Button Click
  const handleNext = () => {
    if (selectedServices.size === 0) {
      alert("Please select at least one service.");
      return;
    }
  
    // Get full service details instead of only IDs
    const selectedServiceDetails = getDisplayedServices().filter(service =>
      selectedServices.has(service.id)
    );
  
    // Navigate to BookingForm with selected services
    navigate("/booking", { state: { selectedServices: selectedServiceDetails } });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Select Your Property Type</h1>

      {/* Property Type Selection */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedType(category.id)}
            className={`px-6 py-3 text-lg font-semibold rounded-lg transition-all shadow-md ${
              selectedType === category.id ? "bg-lime-600 text-white" : "bg-white text-gray-800 hover:bg-gray-200"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Loading & Error Handling */}
      {loading && <p className="text-center text-xl text-gray-500 mt-6">Loading services...</p>}
      {error && <p className="text-center text-red-500 mt-6">{error}</p>}

      {/* Services List with Checkboxes */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {getDisplayedServices().map((service) => (
            <div
              key={service.id}
              onClick={() => toggleServiceSelection(service.id)}
              className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-all shadow-md ${
                selectedServices.has(service.id)
                  ? "bg-lime-600 text-white border-lime-600 shadow-lg"
                  : "bg-white text-gray-800 hover:shadow-lg border"
              }`}
            >
              <input
                type="checkbox"
                checked={selectedServices.has(service.id)}
                onChange={() => toggleServiceSelection(service.id)}
                className="w-5 h-5 rounded focus:ring-lime-500 cursor-pointer"
              />
              <span className="text-lg font-medium">{service.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* Next Button */}
      <div className="mt-8 flex justify-center">
        <button
          className={`px-8 py-3 text-lg font-semibold rounded-lg transition-all ${
            selectedServices.size > 0
              ? "bg-lime-600 text-white hover:bg-lime-700 shadow-lg"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
          onClick={handleNext}
          disabled={selectedServices.size === 0}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PropertySelector;
