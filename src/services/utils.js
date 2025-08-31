const baseURL = import.meta.env.VITE_BASE_URL;
import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get(`${baseURL}/products`);
  return response.data;
};
