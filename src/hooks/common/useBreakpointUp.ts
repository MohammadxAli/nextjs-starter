import { useMediaQuery, useTheme, Breakpoint } from "@mui/material";

const useBreakpointUp = (key: number | Breakpoint) => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.up(key));
};

export default useBreakpointUp;
