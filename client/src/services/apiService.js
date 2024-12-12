   // src/services/apiService.js
   import axios from 'axios';

   const API_URL = 'http://localhost:5000/api/v1'; // Thay đổi URL nếu cần

   export const login = async (email, password) => {
     try {
       const response = await axios.post(`${API_URL}/auth/login`, { email, password });
       return response.data;
     } catch (error) {
       throw error.response.data;
     }
   };

   export const register = async (username, email, password) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, { username, email, password });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  };
  
   // Thêm các hàm khác nếu cần