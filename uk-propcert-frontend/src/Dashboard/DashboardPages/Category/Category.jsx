import { useState, useEffect } from "react";
import axios from "axios";
import { ukprop } from "../../../Url/config";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Category = ({ onCategoryCreated }) => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editFormData, setEditFormData] = useState({ id: "", name: "" });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${ukprop}/categories`);
      setCategories(response.data);
    } catch (err) {
      toast.error("Failed to fetch categories");
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post(`${ukprop}/categories`, { name });
      toast.success("Category created successfully!");
      setName("");
      fetchCategories();
      if (onCategoryCreated) onCategoryCreated();
    } catch (err) {
      setError("Failed to create category");
      toast.error("Failed to create category");
    } finally {
      setLoading(false);
    }
  };

  const openEditForm = (category) => {
    setEditFormData({ id: category.id, name: category.name });
    setEditingCategory(true);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await axios.put(`${ukprop}/categories/${editFormData.id}`, {
        name: editFormData.name
      });
      toast.success("Category updated successfully!");
      setEditingCategory(false);
      fetchCategories();
    } catch (err) {
      toast.error("Failed to update category");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (categoryId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await axios.delete(`${ukprop}/categories/${categoryId}`);
        toast.success("Category deleted successfully!");
        fetchCategories();
      } catch (err) {
        toast.error("Failed to delete category");
      }
    }
  };

  return (
    <div className="mx-auto bg-white p-6 rounded-lg shadow-md mt-20 max-w-2xl">
      {/* Create Category Form */}
      <h2 className="text-xl font-semibold mb-4">Create Category</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleCreate} className="space-y-4">
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

      {/* Edit Category Modal/Form */}
      {editingCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Edit Category</h2>
            <form onSubmit={handleEdit} className="space-y-4">
              <input
                type="text"
                placeholder="Category Name"
                value={editFormData.name}
                onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex space-x-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex-1 px-4 py-2 text-white font-semibold rounded-md transition ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {loading ? "Updating..." : "Update"}
                </button>
                <button
                  type="button"
                  onClick={() => setEditingCategory(false)}
                  className="flex-1 px-4 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-md transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Categories List */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Existing Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="flex justify-between items-center p-3 border rounded-md hover:bg-gray-50"
            >
              <span>{category.name}</span>
              <div className="space-x-2">
                <button
                  onClick={() => openEditForm(category)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(category.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;