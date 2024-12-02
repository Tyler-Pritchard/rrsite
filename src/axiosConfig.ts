import axios, { AxiosInstance } from 'axios';

// Function to create an Axios instance with a dynamic base URL
export const createAxiosInstance = (service: 'auth' | 'store' | 'payments' | 'gateway'): AxiosInstance => {
  let baseURL: string;

  switch (service) {
    case 'auth':
      baseURL = process.env.REACT_APP_AUTH_URL || 'http://localhost:5000/';
      break;
    case 'store':
      baseURL = process.env.REACT_APP_STORE_URL || 'http://localhost:8081/';
      break;
    case 'payments':
      baseURL = process.env.REACT_APP_PAYMENTS_URL || 'http://localhost:8082/';
      break;
    case 'gateway':
      baseURL = process.env.REACT_APP_GATEWAY_URL || 'http://localhost:8080/';
      break;
    default:
      throw new Error(`Unknown service: ${service}`);
  }

  return axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true, // If needed for cross-origin requests
  });
};
