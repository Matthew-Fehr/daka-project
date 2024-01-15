/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig } from "axios";
import BASE_URL from "./host.config";
/**
 * Custom Axios Instance that automatically adds a Bearer Token to each request
 */
const instance = axios.create({
    baseURL: BASE_URL,
});

instance.interceptors.request.use(
    // @ts-ignore
    async (config: AxiosRequestConfig) => {
        if (config.headers) {
            config.headers["Content-Type"] = "application/json";
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    },
);
export default instance;
