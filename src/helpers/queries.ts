const getQuery = (
    mockQuery: string,
    mainQuery: string,
    value: any,
    shouldMock: boolean
) => {
    if (!(typeof value === "undefined")) {
        const str = shouldMock ? mockQuery + "=" : mainQuery + "=";
        return str + value;
    }
};

export const generateQueries = (
    queries: QueryParams = {},
    shouldMock: boolean
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
        page: getQuery("_page", "page", page, shouldMock),
        limit: getQuery("_limit", "perPage", limit, shouldMock),
        order: getQuery("_order", "order", order, shouldMock),
        sort: getQuery("_sort", "sort", sort, shouldMock),
        q: getQuery("q", "title", q, shouldMock),
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
