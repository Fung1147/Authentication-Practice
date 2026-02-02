import axios from "axios";

const API_URL = "http://localhost:8000/auth";

// Login
export const actionLogin = async (value) => {
  return await axios.post(`${API_URL}/login`, value);
};

export const actionRegister = async (value) => {
  return await axios.post(`${API_URL}/register`, value);
};
