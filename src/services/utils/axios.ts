import { mainUrl, mockUrl, shouldUseFaker } from "@/helpers/env-variables";
import { shouldUseMock } from "@/helpers/utils";
import _axios from "axios";

declare module "axios" {
    export interface AxiosRequestConfig {
        useMock: boolean;
    }
}

const headers = { "Content-Type": "application/json" };

const useMock = shouldUseFaker === "mixed" || shouldUseFaker === false;

const axios = _axios.create({
    useMock,
    headers,
    baseURL: mainUrl,
});

axios.interceptors.request.use(
    function (config) {
        if (shouldUseMock(config.useMock)) {
            config.baseURL = mockUrl;
        } else {
            config.baseURL = mainUrl;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axios;
