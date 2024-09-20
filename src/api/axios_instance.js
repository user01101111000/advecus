import axios from "axios";

export default function getAxiosInstance() {
  return axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
  });
}
