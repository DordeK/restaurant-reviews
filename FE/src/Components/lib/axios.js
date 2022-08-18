import axios from 'axios'
const instance = axios.create({
    baseURL: process.env.REACT_APP_AXIOS_URL,
    // timeout: 1000,
});

instance.interceptors.response.use(undefined, 
(res) => {
  if (res.response.statusText === "Unauthorized"){
    window.location.href = '/'
  }
  return res.response
}
)

instance.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem("accessToken");
  config.headers.Authorization =  `Bearer ${token}`;

  return config;
});

export default instance;