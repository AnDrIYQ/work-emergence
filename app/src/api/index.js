import axios from 'axios';
import config from '@root/config.js';

const api = axios.create({
    baseURL: config.API_URL,
    timeout: 5000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response) {
            if (error.response.status === 401) {
                window.location.href = '/login';
            }
            if (error.response.status === 301) {
                window.location.href = '/';
            }
            if (typeof error.response.data !== 'object') {
                return Promise.reject({
                    errors: [error.response.statusText],
                    status: error.status,
                });
            }
            return Promise.reject({
                errors: error.response.data.errors,
                status: error.response.statusText,
            });
        } else if (error.request) {
            return Promise.reject({
                errors: ['Відсутня відповідь від сервера'],
                status: '500',
            });
        } else {
            return Promise.reject({
                errors: ['Помилка налаштування запиту'],
                status: '500',
            });
        }
    }
);

export default api;
