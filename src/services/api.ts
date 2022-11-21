import axios from "axios";

const api = axios.create({
  baseURL: "https://new-api.suatramacriativa.com/",
});

export default api;
