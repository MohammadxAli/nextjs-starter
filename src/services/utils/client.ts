import axios from "@/services/utils/axios";
import { AxiosResponse } from "axios";

const client: ClientOverload = async <D, F>(
    { url, type, ...config }: ConfigUrlRequired,
    formatter?: (data: D, response: AxiosResponse<D, any>) => F
) => {
    const response = await axios.request<D>({
        url: encodeURI(url),
        type,
        ...config,
    });
    if (typeof formatter === "undefined") {
        return response.data;
    }
    return type === "mock" ? response.data : formatter(response.data, response);
};

export default client;
