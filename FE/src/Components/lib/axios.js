import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:3001',
    // timeout: 1000,
});

instance.interceptors.request.use(function (config) {
  console.log('---------');
  const token = sessionStorage.getItem("accessToken");
  config.headers.Authorization =  `Bearer ${token}`;

  return config;
});

export default instance;