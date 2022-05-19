import Button from "@/components/common/Button";
import { useTranslation } from "next-i18next";
import { Fragment } from "react";

interface LoadMoreButtonProps {
    isFetching: boolean;
    hasNextPage?: boolean;
    fetchNextPage: Function;
    buttonRef: InViewRefType;
}

const LoadMoreButton = ({
    buttonRef,
    fetchNextPage,
    isFetching,
    hasNextPage,
}: LoadMoreButtonProps) => {
    const { t } = useTranslation("common");
    return (
        <Fragment>
            {hasNextPage && (
                <div className="flex items-center justify-center w-full">
                    <Button
                        ref={buttonRef}
                        loadingPosition="start"
                        className="gap-2"
                        startIcon={<div />}
                        onClick={() => fetchNextPage()}
                        loading={isFetching}
                    >
                        {isFetching ? t("loading") : t("load_more")}
                    </Button>
                </div>
            )}
        </Fragment>
    );
};

export default LoadMoreButton;
