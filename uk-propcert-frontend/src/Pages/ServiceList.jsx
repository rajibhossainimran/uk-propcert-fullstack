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
    <ul>
      {services.map(service => (
        <div key={service.id}>
        <p>{service.name}</p>
        <p className="w-1/3">{service.description}</p>
        <p>{service.price}</p>
        </div>
        
      ))}
    </ul>
  );
};

export default ServiceList;
