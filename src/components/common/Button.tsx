import { forwardRef } from "react";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
import useGradientButtonStyles from "@/hooks/common/useGradientButtonStyles";

interface ButtonProps extends LoadingButtonProps {
    isGradient?: boolean;
    borderClassName?: string;
    gradientDirection?: "right" | "left" | "top" | "bottom";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            loading,
            isGradient,
            gradientDirection = "right",
            disabled,
            color = "primary",
            children,
            borderClassName,
            sx,
            ...props
        },
        ref
    ) => {
        const sharedStyles = { paddingLeft: "1rem", paddingRight: "1rem" };
        const isInactive = disabled || loading;
        const gradientStyle = useGradientButtonStyles({
            isInactive,
            color,
            gradientDirection,
        });

        return (
            <LoadingButton
                loading={loading}
                disabled={disabled}
                ref={ref}
                color={color}
                disableElevation
                sx={
                    isGradient
                        ? {
                              ...gradientStyle,
                              ...sharedStyles,
                              ...sx,
                          }
                        : {
                              ...sharedStyles,
                              ...sx,
                          }
                }
                {...props}
            >
                {children}
            </LoadingButton>
        );
    }
);

Button.displayName = "Button";

export default Button;
