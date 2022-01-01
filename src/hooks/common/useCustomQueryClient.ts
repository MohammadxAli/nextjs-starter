import { inDevEnvironment } from "@/helpers/env-variables";
import { useState } from "react";
import { QueryClient } from "react-query";

const useConfigureQueryClient = () => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnReconnect: inDevEnvironment ? false : true,
                        refetchOnWindowFocus: inDevEnvironment ? false : true,
                        retry: (count, error: any) => {
                            if (
                                error?.response?.status === 404 ||
                                count === 3
                            ) {
                                return false;
                            }
                            return true;
                        },
                    },
                },
            })
    );
    return queryClient;
};

export default useConfigureQueryClient;
