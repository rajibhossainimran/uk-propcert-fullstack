import { useEffect, useState } from "react";
import axios from "axios";

const ServiceList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categories")
      .then(response => setCategories(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="mt-20">Services by Category</h2>
      {categories.map(category => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          <ServiceCategory categoryId={category.id} />
        </div>
      ))}
    </div>
  );
};

const ServiceCategory = ({ categoryId }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/services")
      .then(response => {
        const filteredServices = response.data.filter(service => service.category.id === categoryId);
        setServices(filteredServices);
      })
      .catch(error => console.error(error));
  }, [categoryId]);

  return (
    <ul className="space-y-4 p-4">
  {services.map((service) => (
    <li
      key={service.id}
      className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition"
    >
      <h2 className="text-xl font-semibold text-gray-800">{service.name}</h2>
      <p className="text-gray-600 mt-2">{service.description}</p>
      <p className="text-green-600 font-medium mt-3">Price: ${service.price}</p>
    </li>
  ))}
</ul>

  );
};

export default ServiceList;
