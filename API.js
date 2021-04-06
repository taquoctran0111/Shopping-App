import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://ecommerce.hungvu.net',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    timeout: 60000
});
export const login = (params) => instance.post('/login', params)
export const register = (params) => instance.post('/signup', params)
export const getproduct = () => instance.get('/get-products')