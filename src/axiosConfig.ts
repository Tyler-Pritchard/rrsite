import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
        ? 'https://rr-auth-production.up.railway.app/api'
        : 'http://localhost:5000/api',
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
