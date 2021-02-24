import axios from 'axios';

export const API_TOKEN = 'API_TOKEN';
const { URL_ENV } = process.env
const url = 'http://localhost:8081/';

axios.defaults.baseURL = (URL_ENV || url);

export const AxiosWithInterceptors = axios.create({
 
});

AxiosWithInterceptors.interceptors.response.use(null,
  (error) => {
    if (error?.response?.status === 401) {
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export const AxiosWithoutInterceptors = axios.create();

export default AxiosWithInterceptors;
