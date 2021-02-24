import axios from 'axios';


axios.defaults.baseURL= process.env.URL_ENV || 'http://localhost:8081/';

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
