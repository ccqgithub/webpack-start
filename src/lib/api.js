import axios from 'axios';
import qs from 'qs';

const locale = pageConfig.locale;
const api = axios.create({
  baseURL: `/${locale}/`,
});

api.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    let err = {
      status: error.response.status,
      message: error.message,
      data: null
    };

    try {
      let data = error.response.data;
      err.data = data;
      err.message = data.message;
    } catch(e) {
      err.data = error.response.data;
    }

    return Promise.reject(err);
  });

api.postForm = (url, data) => {
  return api.post(url, qs.stringify(data), {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  });
}

export default api;
