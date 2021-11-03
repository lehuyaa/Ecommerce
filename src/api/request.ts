import axios from 'axios';
import Config from 'react-native-config';
import TokenProvider from '../utilities/authenticate/TokenProvider';
import { apiLogger } from '../utilities/logger';
import { ERRORS } from '../utilities/staticData';



const request = axios.create({
    baseURL: 'https://ecommerce-sever.herokuapp.com/',
    timeout: 8000,
    headers: { Accept: '*/*' },
});
// for multiple requests


request.interceptors.request.use(
    async (config: any) => {
        // Do something before API is sent
        const token = TokenProvider.getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: any) => {
        // Do something with API error
        apiLogger(
            `%c FAILED ${error.response.method?.toUpperCase()} from ${error.response.config.url}:`,
            'background: red; color: #fff',
            error.response,
        );
        return Promise.reject(error);
    },
);

request.interceptors.response.use(
    (response: any) => response.data,
    async (error: any) => {
        // Check network first
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const { response } = error || {};
        const { data } = response || {};
        const { errorMessage, errorKey } = data || {};
        apiLogger(
            `%c FAILED ${error.config?.method?.toUpperCase()} from ${error?.config?.url}:`,
            'background: red; color: #fff',
            error.response,
        );
    
        
        error.message = errorMessage || ERRORS.default;
        error.keyMessage = errorKey || '';
        return Promise.reject(error.message);
    },
);

export default request;
