import clsx from "clsx";
import { SpanProps } from "@/types/react-html-props";

interface ErrorMessageProps extends SpanProps {
    error?: string;
}

const ErrorMessage = ({ error, className, ...props }: ErrorMessageProps) => {
    return (
        <div className="flex absolute top-0 inline-end-0">
            {error && (
                <span
                    className={clsx(
                        "flex rounded-md items-center px-2 border-red-600 border py-1 font-normal text-xs text-white bg-red-500",
                        className
                    )}
                    {...props}
                >
                    {error}
                </span>
            )}
        </div>
    );
};

export default ErrorMessage;
