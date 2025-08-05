import axios from 'axios';
import { message } from 'ant-design-vue';
const service = axios.create({
    baseURL: '/api',
    timeout: 5000,
});

service.interceptors.request.use(config => {
    config.headers['apiKey'] = import.meta.env.VITE_API_KEY;
    return config;
}, error => {
    return Promise.reject(error);
});

service.interceptors.response.use(response => {
    const { data } = response;
    if (data.code === 0) {
        return data.data;
    } else {
        message.error(data.message);
        return Promise.reject(data.message);
    }
}, error => {
    return Promise.reject(error);
});
export default service;