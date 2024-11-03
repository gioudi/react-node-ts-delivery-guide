import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.AUTH_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;

export const apiTaskClient = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Accept: 'applicaiton/json',
    'Content-Type': 'application/json',
  },
});
