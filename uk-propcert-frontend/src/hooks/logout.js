// src/utils/logout.js
import axios from 'axios';

const logout = async (navigate) => {
  try {
    const token = localStorage.getItem('accessToken'); // Corrected to 'accessToken'

    console.log('Stored Token:', token); // Log the token to check if it's there

    if (!token) {
      console.log('No token found');
      return;
    }

    const response = await axios.post(
      'http://127.0.0.1:8000/api/logout', // Replace with your actual logout API URL
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      localStorage.removeItem('accessToken'); // Remove token from localStorage
      navigate('/login');
    }
  } catch (error) {
    console.error('Error logging out:', error);
  }
};

export default logout;
