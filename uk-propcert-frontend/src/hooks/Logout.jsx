import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ukprop } from '../Url/config';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // 1. Clear local storage
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userRole');
      
      // 2. Make API call to invalidate token
      await fetch(`${ukprop}/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json'
        }
      });

      // 3. Show success message
      toast.success('Logged out successfully!');
      
      // 4. Redirect to login
      navigate('/');
      
    } catch (error) {
      toast.error('Error during logout');
      console.error('Logout error:', error);
    }
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <div className="p-4 text-center">
      <h2>Logging out...</h2>
    </div>
  );
};

export default Logout;