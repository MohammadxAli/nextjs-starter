import {
    inDevEnvironment,
    mainUrl,
    mockUrl,
    shouldUseFaker,
} from "@/helpers/env-variables";
import { enUS, faIR } from "date-fns/locale";
import { generateQueries } from "@/helpers/queries";
import formatUnicorn from "format-unicorn/safe";
import { DEFAULT_LOCALE, IS_SERVER } from "@/helpers/constants";
import { AxiosRequestConfig } from "axios";

export const getRandomNumberBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const scrollToElementById = (id: string) => {
    const element = document.getElementById(id);
    scrollToElement(element);
};

export const scrollToElement = (element: HTMLElement | null, extra = 0) => {
    if (element) {
        let top = 0;
        top = window.pageYOffset + element.getBoundingClientRect().top;
        window.scroll({
            top: top + extra,
            behavior: "smooth",
        });
    }
};

export const getRoute = ({
    route,
    query,
    ...rest
}: GetRouteProps): FormattedRouteUrl => {
    const type = shouldUseMock(route.type);
    let url = type === "mock" ? route.mockUrl : route.url;

    if (Object.keys({ ...rest }).length) {
        url = formatUnicorn(url, { ...rest });
    }

    if (query) {
        const queries = generateQueries(query, type);
        url = url + queries;
    }

    return { url, type };
};

export const scrollToRef = (ref: any, extra = 0) => {
    if (ref?.current) {
        let top = 0;
        if (ref.current) {
            top = window.pageYOffset + ref.current.getBoundingClientRect().top;
        }
        window.scroll({
            top: top + extra,
            behavior: "smooth",
        });
    }
};

export const getDateFnsLocaleByCode = (locale = DEFAULT_LOCALE) => {
    switch (locale) {
        case "en":
            return enUS;
        default:
            return faIR;
    }
};

export const getLocationWithoutQueries = () => {
    return window.location.href.split("?")[0];
};

export const shouldUseMock = (type: RouteType) => {
    if (!(shouldUseFaker === "mixed")) {
        if (shouldUseFaker === true) {
            return "mock";
        } else {
            return type;
        }
    }
    return type;
};

export const updateLocationHistory = (
    pathname: string,
    params: QueryParams
) => {
    if (!(typeof window === "undefined")) {
        const queries = Object.keys(params)
            .map((key) => {
                return (
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(params[key])
                );
            })
            .join("&");
        const newUrl = pathname + "?" + queries;
        window.history.replaceState(
            { ...window.history.state, as: newUrl, url: newUrl },
            "",
            newUrl
        );
    }
};

export const trigger = (eventType: string, data?: any) => {
    const event = new CustomEvent(eventType, { detail: data });
    document.dispatchEvent(event);
};

export const mapRouteTypeToUrl = (type: RouteType) => {
    switch (type) {
        case "main":
            return mainUrl;
        case "mock":
            return mockUrl;
    }
};

export const logRequestedUrl = ({
    baseURL,
    method,
    url,
}: AxiosRequestConfig) => {
    if (baseURL && inDevEnvironment) {
        const fullUrl = baseURL + url;
        const str = method?.toUpperCase() + " " + fullUrl;
        if (IS_SERVER) {
            console.log("\x1b[36m%s\x1b[0m", str);
        } else {
            console.log(`%c${str}`, "color: #16ffff");
        }
    }
};
