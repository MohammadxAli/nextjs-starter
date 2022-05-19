import Alert, { AlertColor } from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar, { SnackbarProps } from "@mui/material/Snackbar";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import useBreakpointUp from "@/hooks/common/useBreakpointUp";

interface AlertSnackbarProps extends Omit<SnackbarProps, "children"> {
    children?: React.ReactNode;
    severity?: AlertColor;
}

const AlertSnackbar = ({
    open,
    onClose,
    children,
    severity = "error",
    ...props
}: AlertSnackbarProps) => {
    const [isOpen, setIsOpen] = useState(open);
    const { t } = useTranslation();
    useEffect(() => {
        setIsOpen(open);
    }, [open]);
    const matches = useBreakpointUp("xl");
    return (
        <Snackbar
            open={isOpen}
            style={{ bottom: !matches ? 70 : 24 }}
            anchorOrigin={{
                horizontal: matches ? "left" : "center",
                vertical: "bottom",
            }}
            {...props}
        >
            <Alert
                elevation={6}
                variant="filled"
                severity={severity}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
            >
                {children ? children : t("alerts.unknown_error")}
            </Alert>
        </Snackbar>
    );
};

export default AlertSnackbar;
