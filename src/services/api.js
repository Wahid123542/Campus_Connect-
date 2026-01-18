import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const getEvents = () => api.get('/events/');
export const getEvent = (id) => api.get(`/events/${id}/`);
export const getOrganizations = () => api.get('/organizations/');
export const getOrganization = (id) => api.get(`/organizations/${id}/`);
export const register = (userData) => api.post('/users/register/', userData);
export const login = (credentials) => api.post('/users/login/', credentials);
export const logout = () => api.post('/users/logout/');
export const getCurrentUser = () => api.get('/users/me/');

export default api;
