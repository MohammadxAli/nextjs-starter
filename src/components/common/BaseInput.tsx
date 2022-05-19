import { InputPropsWithoutRef as HTMLInputProps } from "@/types/react-html-props";

import InputWrapper, {
    InputWrapperProps,
} from "@/components/common/InputWrapper";
import useInputClassNames from "@/hooks/common/useInputClassNames";
import React from "react";
import clsx from "clsx";

export type BaseInputProps = HTMLInputProps &
    InputWrapperProps & {
        label?: React.ReactNode;
        hasBorder?: boolean;
        color?: "gray" | "white" | "lightgray";
        endAdornment?: React.ReactNode;
        startAdornment?: React.ReactNode;
        adornmentClass?: string;
    };

const BaseInput = React.forwardRef(
    (
        {
            label,
            id,
            wrapperClass = "w-full",
            disabled,
            className = "",
            color = "white",
            hasShadow,
            hasBorder = true,
            endAdornment,
            startAdornment,
            adornmentClass = "",
            type = "text",
            error,
            ...rest
        }: BaseInputProps,
        ref: React.ForwardedRef<HTMLInputElement>
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
                    <input
                        id={id}
                        disabled={disabled}
                        className={classes}
                        type={type}
                        ref={ref}
                        {...rest}
                    />
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

BaseInput.displayName = "BaseInput";

export default BaseInput;
