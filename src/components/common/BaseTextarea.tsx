import { TextAreaProps as HTMLTextAreaProps } from "@/types/react-html-props";

import InputWrapper, {
    InputWrapperProps,
} from "@/components/common/InputWrapper";
import useInputClassNames from "@/hooks/common/useInputClassNames";
import React from "react";
import clsx from "clsx";

type TextAreaProps = HTMLTextAreaProps &
    InputWrapperProps & {
        label?: React.ReactNode;
        hasBorder?: boolean;
        color?: "gray" | "white" | "lightgray";
        children?: string;
        endAdornment?: React.ReactNode;
        startAdornment?: React.ReactNode;
        adornmentClass?: string;
    };

const BaseTextarea = React.forwardRef(
    (
        {
            id,
            label,
            startAdornment,
            endAdornment,
            adornmentClass,
            wrapperClass = "w-full",
            disabled,
            className = "",
            color = "white",
            hasShadow = undefined,
            hasBorder = true,
            error,
            children,
            ...rest
        }: TextAreaProps,
        ref: React.ForwardedRef<HTMLTextAreaElement>
    ) => {
        var adornmentClasses =
            "absolute transform -translate-y-1/2 block-start-1/2" +
            " " +
            adornmentClass;

        const classes = useInputClassNames({
            color,
            hasBorder,
            startAdornment,
            endAdornment,
            disabled,
            className,
        });
        return (
            <InputWrapper
                hasShadow={hasShadow}
                wrapperClass={wrapperClass}
                error={error}
            >
                {label && (
                    <label className="block mb-3 font-bold" htmlFor={id}>
                        {label}
                    </label>
                )}
                <div className="relative">
                    {startAdornment && (
                        <div
                            className={clsx("inline-start-0", adornmentClasses)}
                        >
                            {startAdornment}
                        </div>
                    )}
                    <textarea
                        id={id}
                        disabled={disabled}
                        className={classes}
                        ref={ref}
                        {...rest}
                    >
                        {children}
                    </textarea>
                    {endAdornment && (
                        <div className={clsx("inline-end-0", adornmentClasses)}>
                            {endAdornment}
                        </div>
                    )}
                </div>
            </InputWrapper>
        );
    }
);

BaseTextarea.displayName = "BaseTextarea";

export default BaseTextarea;
