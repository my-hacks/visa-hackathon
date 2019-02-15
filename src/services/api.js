import axios from "axios";

const api = axios.create({
  baseURL: "https://hacka-visa-campus-party.herokuapp.com"
});

export default api;
