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
        return response.data;
    },
    (error) => {
        if (error.response) {
            console.error(`Помилка: ${error.response.status}`, error.response.data);
        } else if (error.request) {
            console.error('Відсутня відповідь від сервера');
        } else {
            console.error('Помилка налаштування запиту', error.message);
        }
        return Promise.reject(error);
    }
);

export default api;
