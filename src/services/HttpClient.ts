import axios from "axios";

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json",
    "X-Forwarded-Host": location.host,
  },
});

export default httpClient;
