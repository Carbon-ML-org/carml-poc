import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_CARML_API_ENDPOINT,
  headers: {
    "Content-type": "application/json",
  },
});
