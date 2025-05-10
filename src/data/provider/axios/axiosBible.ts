import axios from "axios";

const axBible = axios.create({
  baseURL: import.meta.env.VITE_BIBLE_API
})

axBible.interceptors.request.use((config) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(config);
    }, 1000);
  });
});

export default axBible;
