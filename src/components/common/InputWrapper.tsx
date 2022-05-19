import clsx from "clsx";
import ErrorMessage from "@/components/common/ErrorMessage";

export type InputWrapperProps = {
    wrapperClass?: string;
    hasShadow?: boolean;
    error?: string;
};

const InputWrapper = ({
    error,
    wrapperClass = "w-full",
    hasShadow,
    children,
}: InputWrapperProps & { children: React.ReactNode }) => {
    return (
        <div className="relative w-full">
            <div
                className={clsx(
                    "rounded-md",
                    wrapperClass,
                    hasShadow && "shadow-primary"
                )}
            >
                {children}
            </div>
            <ErrorMessage error={error} />
        </div>
    );
};

export default InputWrapper;
