import { useMediaQuery, useTheme } from "@mui/material";

const useIsDesktop = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.up("lg"));
};

export default useIsDesktop;
