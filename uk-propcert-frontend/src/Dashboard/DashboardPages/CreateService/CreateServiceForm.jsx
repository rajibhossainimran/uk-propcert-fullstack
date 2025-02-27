import { useState, useEffect } from "react";
import axios from "axios";
import { ukprop } from "../../../Url/config";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BiSolidEdit } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";

const CreateServiceForm = () => {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [createFormData, setCreateFormData] = useState({
    category_id: "",
    name: "",
    description: "",
    price: ""
  });
  const [editFormData, setEditFormData] = useState({
    id: "",
    category_id: "",
    name: "",
    description: "",
    price: ""
  });
  const [loading, setLoading] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, servicesRes] = await Promise.all([
          axios.get(`${ukprop}/categories`),
          axios.get(`${ukprop}/services`)
        ]);
        setCategories(categoriesRes.data);
        setServices(servicesRes.data);
      } catch (error) {
        toast.error("Failed to load data");
      }
    };
    fetchData();
  }, []);

  // Group services by category
  const groupServicesByCategory = () => {
    return services.reduce((acc, service) => {
      const category = categories.find(c => c.id === service.category_id);
      const categoryName = category ? category.name : 'Uncategorized';
      if (!acc[categoryName]) acc[categoryName] = [];
      acc[categoryName].push(service);
      return acc;
    }, {});
  };

  // Handle create form submission
  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { data } = await axios.post(`${ukprop}/services`, createFormData);
      setServices([...services, data]);
      toast.success("Service created successfully!");
      setCreateFormData({ category_id: "", name: "", description: "", price: "" });
    } catch (error) {
      toast.error(error.response?.data?.message || "Creation failed");
    } finally {
      setLoading(false);
    }
  };

  // Handle edit form submission
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { data } = await axios.put(
        `${ukprop}/services/${editFormData.id}`,
        editFormData
      );
      setServices(services.map(s => s.id === data.id ? data : s));
      toast.success("Service updated successfully!");
      closeEditModal();
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  // Open edit modal with service data
  const openEditModal = (service) => {
    setEditFormData({
      id: service.id,
      category_id: service.category_id,
      name: service.name,
      description: service.description,
      price: service.price
    });
    setIsEditModalOpen(true);
  };

  // Close edit modal
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditFormData({ id: "", category_id: "", name: "", description: "", price: "" });
  };

  // Handle delete action
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        await axios.delete(`${ukprop}/services/${id}`);
        setServices(services.filter(s => s.id !== id));
        toast.success("Service deleted successfully!");
      } catch (error) {
        toast.error("Failed to delete service");
      }
    }
  };

  const groupedServices = groupServicesByCategory();

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      {/* Create Service Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Create New Service</h2>
        <form onSubmit={handleCreate} className="space-y-4">
          <select
            value={createFormData.category_id}
            onChange={(e) => setCreateFormData({ ...createFormData, category_id: e.target.value })}
            required
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Category</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Service Name"
            value={createFormData.name}
            onChange={(e) => setCreateFormData({ ...createFormData, name: e.target.value })}
            required
            className="w-full p-2 border rounded-md"
          />

          <textarea
            placeholder="Description"
            value={createFormData.description}
            onChange={(e) => setCreateFormData({ ...createFormData, description: e.target.value })}
            required
            rows="3"
            className="w-full p-2 border rounded-md"
          />

          <input
            type="number"
            placeholder="Price"
            value={createFormData.price}
            onChange={(e) => setCreateFormData({ ...createFormData, price: e.target.value })}
            required
            className="w-full p-2 border rounded-md"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-2 text-white rounded-md ${
              loading ? "bg-gray-400" : "bg-lime-600 hover:bg-lime-700"
            }`}
          >
            {loading ? "Creating..." : "Create Service"}
          </button>
        </form>
      </div>

      {/* Edit Service Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Edit Service</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <select
                value={editFormData.category_id}
                onChange={(e) => setEditFormData({ ...editFormData, category_id: e.target.value })}
                required
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Service Name"
                value={editFormData.name}
                onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                required
                className="w-full p-2 border rounded-md"
              />

              <textarea
                placeholder="Description"
                value={editFormData.description}
                onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
                required
                rows="3"
                className="w-full p-2 border rounded-md"
              />

              <input
                type="number"
                placeholder="Price"
                value={editFormData.price}
                onChange={(e) => setEditFormData({ ...editFormData, price: e.target.value })}
                required
                className="w-full p-2 border rounded-md"
              />

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex-1 px-4 py-2 text-white rounded-md ${
                    loading ? "bg-gray-400" : "bg-lime-600 hover:bg-lime-700"
                  }`}
                >
                  {loading ? "Updating..." : "Update"}
                </button>
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="flex-1 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Services List */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Services by Category</h2>
        {Object.entries(groupedServices).map(([categoryName, services]) => (
          <div key={categoryName} className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-lime-950 py-2 px-5 w-1/3 bg-lime-300 rounded-3xl">
              {categoryName}
            </h3>
            <div className="space-y-4">
              {services.map(service => (
                <div key={service.id} className="border border-lime-900 rounded-md p-4">
                  <div className="flex justify-between items-start ">
                    <div>
                      <h4 className="text-lg font-medium text-lime-800">{service.name}</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        {service.description}
                      </p>
                      <p className="text-blue-600 font-medium mt-2">
                        ${service.price}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => openEditModal(service)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <BiSolidEdit className="text-2xl"/>
                      </button>
                      <button
                        onClick={() => handleDelete(service.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <TiDelete className="text-2xl"/>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {services.length === 0 && (
                <p className="text-gray-500 text-center py-4">
                  No services found in this category
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateServiceForm;