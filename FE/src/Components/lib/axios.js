import axios from 'axios'
const instance = axios.create({
    baseURL: process.env.REACT_APP_AXIOS_URL,
    // timeout: 1000,
});

instance.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem("accessToken");
  config.headers.Authorization =  `Bearer ${token}`;

  return config;
});

export default instance;