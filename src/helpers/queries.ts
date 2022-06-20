const getQuery = (
    value: any,
    params: { [key in RouteType]: string },
    type: RouteType
) => {
    if (!(typeof value === "undefined")) {
        const key = Object.keys(params).find((key) => type === key);
        if (key) return params[key as RouteType] + "=" + value;
    }
};

export const generateQueries = (
    queries: QueryParams = {},
    routeType: RouteType
) => {
    const {
        page = 1,
        limit = 12,
        order = "desc",
        sort = "date",
        q,
        ids,
        ...other
    } = queries;
    const formattedQueries = {
        page: getQuery(page, { mock: "_page", main: "page" }, routeType),
        limit: getQuery(limit, { mock: "_limit", main: "limit" }, routeType),
        order: getQuery(order, { mock: "_order", main: "order" }, routeType),
        sort: getQuery(sort, { mock: "_sort", main: "sort" }, routeType),
        q: getQuery(q, { mock: "q", main: "q" }, routeType),
    };
    return generateQueryString(formattedQueries, other);
};

const generateQueryString = <Q, O>(queries: Q, other: O) => {
    let query = "?";

    const arrayQueries: string[] = [];

    Object.values(queries).forEach((value, i) => {
        const joiner = i > 0 ? "&" : "";
        if (!(typeof value === "undefined")) {
            query = query + joiner + value;
        }
    });

    Object.entries({ ...other }).forEach(([key, value]) => {
        const val = value.toString();
        const isArray = Boolean(arrayQueries.find((query) => query === key));
        if (!isArray && Boolean(val)) {
            query = query + `&${key}=${value}`;
        } else if (isArray && Boolean(value)) {
            const generated = generateArrayQuery(key, value);
            query = query + generated;
        }
    });

    return query;
};

const generateArrayQuery = (key: string, value: string) => {
    let query = "";
    const splitted: string[] = value.toString().split(",");
    splitted.forEach((val, i) => (query = query + `&${key}[${i}]=${val}`));
    return query;
};
