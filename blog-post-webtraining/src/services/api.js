import axios from "axios";
const instance = axios.create({
    // baseURL: "http://localhost:5001/api",
    baseURL: "https://blog-post-api.azurewebsites.net/api",
    headers: {
        "Content-Type": "application/json",
    },
});
export default instance;