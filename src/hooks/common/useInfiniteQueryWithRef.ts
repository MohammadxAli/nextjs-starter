import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
    QueryFunction,
    QueryKey,
    useInfiniteQuery,
    UseInfiniteQueryOptions,
    UseInfiniteQueryResult,
} from "react-query";

type UseCommonQueryReturn<T, E> = UseInfiniteQueryResult<T, E> & {
    ref: InViewRefType;
};

const useInfiniteQueryWithRef = <
    TQueryFnData = unknown,
    TError = unknown,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey
>(
    queryKey: TQueryKey,
    queryFn: QueryFunction<TQueryFnData, TQueryKey>,
    options?: Omit<
        UseInfiniteQueryOptions<
            TQueryFnData,
            TError,
            TData,
            TQueryFnData,
            TQueryKey
        >,
        "queryKey" | "queryFn"
    >
): UseCommonQueryReturn<TData, TError> => {
    const { ref, inView } = useInView();
    const props = useInfiniteQuery(queryKey, queryFn, {
        getNextPageParam: ({ meta }: any) => {
            const isLastPage = meta.currentPage >= meta.lastPage;
            if (!isLastPage) {
                return meta.currentPage + 1;
            }
        },
        staleTime: Infinity,
        ...options,
    });
    useEffect(() => {
        if (inView) {
            props.fetchNextPage();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);
    return { ...props, ref };
};

export default useInfiniteQueryWithRef;
