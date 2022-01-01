import clsx from "clsx";
import MuiPagination from "@mui/material/Pagination";
import type { PaginationProps as MuiPaginationProps } from "@mui/material/Pagination";

import AlertBox from "@/components/common/AlertBox";

type PaginationProps = MuiPaginationProps & {
    noItem: boolean;
    wrapperClassName?: string;
};

const Pagination = ({
    wrapperClassName = "",
    count = 0,
    noItem = true,
    className,
    ...props
}: PaginationProps) => {
    return (
        <>
            {!!(count > 1) && (
                <div
                    className={clsx(
                        "flex justify-center mt-8",
                        wrapperClassName
                    )}
                >
                    <MuiPagination
                        className={clsx("custom-pagination", className)}
                        color="primary"
                        shape="rounded"
                        count={count}
                        {...props}
                    />
                </div>
            )}

            {noItem && <AlertBox hasContainer={false} hasMargin={false} />}
        </>
    );
};

export default Pagination;
