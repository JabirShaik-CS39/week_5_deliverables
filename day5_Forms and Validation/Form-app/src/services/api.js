import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

// Register User
export const registerUser = async (userData) => {
  const response = await api.post("/register", userData);
  return response.data;
};

// Create Product
export const createProduct = async (formData) => {
  const response = await api.post("/products", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export default api;