import { shouldUseMock } from "@/helpers/utils";
import { generateQueries } from "@/helpers/queries";
import formatUnicorn from "format-unicorn/safe";

const serverRoutes = {};

export const getRoute = ({
    route,
    query,
    ...rest
}: GetRouteProps): FormattedRouteUrl => {
    const shouldMock = shouldUseMock(route.useMock);
    let url = shouldMock ? route.mockUrl : route.url;

    if (Object.keys({ ...rest }).length) {
        url = formatUnicorn(url, { ...rest });
    }

    if (query) {
        const queries = generateQueries(query, route.useMock);
        url = url + queries;
    }

    return { url, useMock: shouldMock };
};

export default serverRoutes;
