import axios from "axios";

export default axios.create({
  baseURL: "https://b9rcuxd7ik.execute-api.us-west-2.amazonaws.com/staging",
  headers: {
    "Content-type": "application/json",
  },
});
