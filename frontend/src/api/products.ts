import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchProducts = () => api.get('/products').then(res => res.data);
export const fetchProductById = (id: number) =>
  api.get(`/products/${id}`).then(res => res.data);
