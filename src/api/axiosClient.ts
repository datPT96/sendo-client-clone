import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 5000,
});

//Interceptor
// Add a request interceptor
axiosClient.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

export default axiosClient;
