import type { Theme } from "@mui/material";

interface UseGradientButton {
    isInactive?: boolean;
    color?:
        | "inherit"
        | "primary"
        | "secondary"
        | "success"
        | "error"
        | "info"
        | "warning";
    gradientDirection?: "right" | "left" | "top" | "bottom";
}

const useGradientButtonStyles = ({
    isInactive,
    color,
    gradientDirection,
}: UseGradientButton) => {
    return {
        backgroundImage: (theme: Theme) =>
            isInactive
                ? `none`
                : color === "primary"
                ? `linear-gradient(to ${gradientDirection}, ${theme.palette.primary.main}, ${theme.palette.primary.light}) !important`
                : color === "secondary"
                ? `linear-gradient(to ${gradientDirection}, ${theme.palette.secondary.main}, ${theme.palette.secondary.light}) !important`
                : color === "warning"
                ? `linear-gradient(to ${gradientDirection}, ${theme.palette.warning.main}, ${theme.palette.warning.light}) !important`
                : "none",
        backgroundColor: (theme: Theme) =>
            isInactive ? theme.palette.grey[300] : "none",
        color: "#fff",
        boxShadow: (theme: Theme) => (isInactive ? "none" : theme.shadows[1]),
    };
};

export default useGradientButtonStyles;
