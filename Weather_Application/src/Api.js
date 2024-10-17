import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/rules', // Updated Base URL
});

export default api;
