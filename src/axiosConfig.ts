import axios, { AxiosInstance } from 'axios';
import http from 'http';
import https from 'https';

// Function to create an Axios instance with a dynamic base URL
export const createAxiosInstance = (service: 'auth' | 'store' | 'payments' | 'gateway'): AxiosInstance => {
  // Define base URLs for different services
  const baseURLs: Record<typeof service, string> = {
    auth: process.env.REACT_APP_AUTH_URL || 'http://localhost:5000/',
    store: process.env.REACT_APP_STORE_URL || 'http://localhost:8080/',
    payments: process.env.REACT_APP_PAYMENTS_URL || 'http://localhost:8082/',
    gateway: process.env.REACT_APP_GATEWAY_URL || 'http://localhost:8081/',
  };

  // Ensure the requested service is valid
  const baseURL = baseURLs[service];
  if (!baseURL) {
    throw new Error(`Invalid service name: ${service}`);
  }

  // Create and return the Axios instance
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true, // Include cookies if required
    // Add custom HTTP/1.1 agent for compatibility
    httpAgent: new http.Agent({ keepAlive: true }),
    httpsAgent: new https.Agent({ keepAlive: true }),
  });
};
