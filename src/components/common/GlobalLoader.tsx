import CircularProgress from "@mui/material/CircularProgress";
import clsx from "clsx";
import { useIsFetching } from "react-query";

const GlobalLoader = () => {
    const isFetching = useIsFetching();
    return (
        <div
            className={clsx(
                "fixed flex transition-all duration-500 items-center p-3 bg-white rounded-lg shadow-lg space-i-4 bottom-4 inline-end-4",
                !!isFetching
                    ? "visible translate-y-0 opacity-100"
                    : "invisible opacity-0 translate-y-8"
            )}
            style={{ zIndex: 4000 }}
        >
            <span className="text-xs">در حال دریافت جدیدترن اطلاعات</span>
            <CircularProgress size={20} />
        </div>
    );
};

export default GlobalLoader;
