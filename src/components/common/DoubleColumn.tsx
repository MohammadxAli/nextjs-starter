import clsx from "clsx";
import { DivProps } from "react-html-props";

interface DoubleColumnProps extends DivProps {
    sidebar?: React.ReactNode;
    sidebarClassName?: string;
    wrapperClassName?: string;
}

const DoubleColumn = ({
    children,
    sidebar,
    className,
    wrapperClassName,
    sidebarClassName,
    ...props
}: DoubleColumnProps) => {
    return (
        <div className="container mb-8">
            <div
                className={clsx(
                    "flex flex-col w-full lg:flex-row lg:space-i-6",
                    wrapperClassName
                )}
            >
                <div
                    className={clsx(
                        "w-full mb-4 lg:mb-0 lg:w-3/12",
                        sidebarClassName
                    )}
                >
                    {sidebar}
                </div>
                <div className={clsx("w-full lg:w-9/12", className)} {...props}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DoubleColumn;
