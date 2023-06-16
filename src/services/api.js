import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_apiURL,
    //baseURL: "http://localhost:8080",
    //baseURL: "./",
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;
