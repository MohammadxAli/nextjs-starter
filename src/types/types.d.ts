import { Required } from "utility-types";
import { AxiosResponse, AxiosRequestConfig } from "axios";
import { LinkProps } from "next/link";

declare global {
    type RouteType = "mock" | "main";

    type ConfigUrlRequired = Required<AxiosRequestConfig, "url">;

    type ClientOverload = {
        <D = any>(urlAndConfig: ConfigUrlRequired): Promise<D>;
        <D, F>(
            urlAndConfig: ConfigUrlRequired,
            formatter: (data: D, response: AxiosResponse<D, any>) => F
        ): Promise<F>;
    };

    interface Dict<T> {
        [key: string]: T | undefined;
    }

    interface UrlQuery extends Dict<string> {}

    interface QueryParams {
        ids?: number[];
        page?: number;
        limit?: number;
        sort?: string;
        order?: "asc" | "desc" | string;
        q?: string;
        [key: string]: any;
    }

    interface RouteUrl {
        url: string;
        mockUrl: string;
        type: RouteType;
    }

    interface FormattedRouteUrl {
        url: string;
        type: RouteType;
    }

    interface GetRouteProps {
        route: RouteUrl;
        query?: QueryParams;
        [key: string]: any;
    }

    type InViewRefType = (node?: Element | null | undefined) => void;
}
