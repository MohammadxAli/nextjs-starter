import axios from "@/services/utils/axios";

const client: ClientOverload = async <D, F>(
    { url, useMock, ...config }: ConfigUrlRequired,
    formatter?: (data: D) => F
) => {
    const response = await axios.request<D>({
        url: encodeURI(url),
        useMock,
        ...config,
    });
    if (typeof formatter === "undefined") {
        return response.data;
    }
    return useMock ? response.data : formatter(response.data);
};

export default client;
