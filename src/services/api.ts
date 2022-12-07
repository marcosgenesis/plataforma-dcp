import axios from "axios";
import { parseCookies } from "nookies";
const cookies = parseCookies();
const api = axios.create({
  baseURL: "https://new-api.suatramacriativa.com/api/v1",
  headers: {
    Authorization: !!cookies["@tramaAPP:token"]
      ? `Bearer ${cookies["@tramaAPP:token"]}`
      : undefined,
  },
});

export default api;
