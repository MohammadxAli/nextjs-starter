import { useMediaQuery, useTheme, Breakpoint } from "@mui/material";

const useBreakpointDown = (key: number | Breakpoint) => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down(key));
};

export default useBreakpointDown;
