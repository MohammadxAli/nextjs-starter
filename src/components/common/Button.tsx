import { forwardRef } from "react";
import type { Theme } from "@mui/material";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";

interface ButtonProps extends LoadingButtonProps {
    isGradient?: boolean;
}

const Button = forwardRef(
    ({ loading, isGradient, ...props }: ButtonProps, ref: any) => {
        const sharedStyles = { paddingLeft: "1rem", paddingRight: "1rem" };
        return (
            <LoadingButton
                loading={loading}
                ref={ref}
                sx={
                    isGradient
                        ? {
                              backgroundImage: (theme: Theme) =>
                                  loading
                                      ? `none`
                                      : `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                              backgroundColor: (theme: Theme) =>
                                  loading ? theme.palette.grey[300] : "none",
                              color: "#fff",
                              boxShadow: (theme: Theme) =>
                                  !loading ? theme.shadows[1] : "none",
                              ...sharedStyles,
                          }
                        : {
                              ...sharedStyles,
                          }
                }
                {...props}
            />
        );
    }
);

export default Button;
