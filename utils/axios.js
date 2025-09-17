import axios from 'axios';

const api = axios.create({
    baseURL: 'https://newbackend-production-76f2.up.railway.app'
})

export default api;