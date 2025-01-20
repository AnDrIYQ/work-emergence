import axios from 'axios';
import config from '@root/config.js';

const api = axios.create({
    baseURL: config.API_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        if (response.status === 205) {
            if (!response.headers.get('Authorization')) {
                window.localStorage.removeItem('authToken');
                window.location.href = '/login';
            } else {
                window.localStorage.setItem('authToken', response.headers.get('Authorization'));
                window.location.href = '/';
            }
        }
        return response.data;
    },
    (error) => {
        if (error.response) {
            console.error(`Помилка: ${error.response.status}`, error.response.data);
        } else if (error.request) {
            console.error('Server response is missing');
        } else {
            console.error('Request setting error', error.message);
        }
        return Promise.reject(error);
    }
);

export default api;
