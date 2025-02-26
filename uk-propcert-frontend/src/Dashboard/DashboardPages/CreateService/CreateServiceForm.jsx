import { useState, useEffect } from "react";
import axios from "axios";
import { ukprop } from "../../../Url/config";
import { toast } from "react-toastify";  // Import toastify
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for toastify

const CreateServiceForm = ({ onServiceCreated }) => {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(`${ukprop}/categories`)
      .then(response => setCategories(response.data))
      .catch(error => console.error("Error fetching categories:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(`${ukprop}/services`, {
        category_id: categoryId,
        name,
        description,
        price,
      });

      // Display success toast message
      toast.success("Service created successfully!");
      
      // Clear form fields
      setCategoryId("");
      setName("");
      setDescription("");
      setPrice("");

      // Optionally, call onServiceCreated to refresh the list if necessary
      // onServiceCreated(response.data);

    } catch (err) {
      setError("Error creating service. Try again.");
      toast.error("Failed to create service. Please try again.");  // Display error toast message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-20">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Create Service</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Service Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Service Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows="3"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full px-4 py-2 text-white font-semibold rounded-md transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-lime-700 hover:bg-lime-600"
          }`}
        >
          {loading ? "Creating..." : "Create Service"}
        </button>
      </form>
    </div>
  );
};

export default CreateServiceForm;
