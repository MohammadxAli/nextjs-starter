import clsx from "clsx";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface DialogBaseProps extends DialogProps {
    titleClass?: string;
    actions?: React.ReactNode;
    handleOnClose: Function;
}

const DialogBase = ({
    titleClass,
    fullWidth = true,
    maxWidth = "sm",
    actions,
    children,
    title,
    onClose,
    handleOnClose,
    ...props
}: DialogBaseProps) => {
    return (
        <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            onClose={() => handleOnClose()}
            {...props}
        >
            <DialogTitle
                className={clsx(
                    "flex items-center justify-between lg:!text-lg",
                    titleClass
                )}
            >
                <span>{title}</span>
                <IconButton onClick={() => handleOnClose()}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>{children}</DialogContent>
            {actions && (
                <DialogActions
                    style={{
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingBottom: 20,
                    }}
                >
                    {actions}
                </DialogActions>
            )}
        </Dialog>
    );
};

export default DialogBase;
