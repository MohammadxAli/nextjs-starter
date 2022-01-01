import { shouldUseMock } from "@/helpers/utils";

export const generateQueries = (
    {
        page = 1,
        limit = 12,
        order = "desc",
        sort,
        q,
        ids,
        ...other
    }: QueryParams = {},
    useMock: boolean
) => {
    const shouldMock = shouldUseMock(useMock);
    const queries = {
        page: (shouldMock ? "_page=" : "page=") + page,
        limit: (shouldMock ? "_limit=" : "perPage=") + limit,
        order: (shouldMock ? "_order=" : "order=") + order,
        sort: sort && (shouldMock ? "_sort=" : "sort=") + sort,
        q: q && (shouldMock ? "q=" : "title=") + q,
        ids: ids && generateIds(shouldMock, ids),
    };
    return generateQueryString(queries, other);
};

const generateQueryString = <Q, O>(queries: Q, other: O) => {
    let query = "?";
    Object.values(queries).forEach((value, i) => {
        const joiner = i > 0 ? "&" : "";
        if (!(typeof value === "undefined")) {
            query = query + joiner + value;
        }
    });
    Object.entries({ ...other }).forEach(([key, value]) => {
        if (Boolean(value)) {
            query = query + `&${key}=${value}`;
        }
    });
    return query;
};

const generateIds = (shouldMock: boolean, ids: number[]) => {
    let str = shouldMock ? "id=" : "productIds=";
    let idsString = ids.join(",");
    if (shouldMock) {
        idsString = ids.join("&id=");
    }
    str = str + idsString;
    return str;
};
