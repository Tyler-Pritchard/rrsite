import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://unique-comfort.up.railway.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
