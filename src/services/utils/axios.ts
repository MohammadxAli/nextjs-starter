import { mainUrl } from "@/helpers/env-variables";
import { logRequestedUrl, mapRouteTypeToUrl } from "@/helpers/utils";
import _axios from "axios";

declare module "axios" {
    export interface AxiosRequestConfig {
        type: RouteType;
    }
}

const headers = { "Content-Type": "application/json" };

const axios = _axios.create({
    type: "main",
    headers,
    baseURL: mainUrl,
});

axios.interceptors.request.use(
    function (config) {
        config.baseURL = mapRouteTypeToUrl(config.type);
        logRequestedUrl(config);
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axios;
