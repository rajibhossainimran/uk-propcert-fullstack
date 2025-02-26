import { useState } from "react";
import axios from "axios";
import { ukprop } from "../../../Url/config";
import { toast } from "react-toastify";  // Import toastify
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for toastify

const Category = ({ onCategoryCreated }) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(`${ukprop}/categories`, { name });

      // Display success toast message
      toast.success("Category created successfully!");

      // Clear form fields
      setName("");
    } catch (err) {
      setError("Error creating category. Try again.");
      toast.error("Failed to create category. Please try again.");  // Display error toast message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto bg-white p-6 rounded-lg shadow-md mt-20">
      <h2 className="text-xl font-semibold mb-4">Create Category</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          {loading ? "Creating..." : "Create Category"}
        </button>
      </form>
    </div>
  );
};

export default Category;
