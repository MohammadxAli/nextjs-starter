import Skeleton from "@mui/material/Skeleton";
import clsx from "clsx";
import MuiSelect, { SelectProps } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputLabel from "@mui/material/InputLabel";
import ErrorMessage from "@/components/common/ErrorMessage";

export interface BaseSelectProps extends Omit<SelectProps, "error"> {
    isLoading?: boolean;
    iconStart?: React.ReactNode;
    rounded?: boolean;
    label?: string;
    showLabel?: boolean;
    error?: string;
}

export default function Select({
    placeholder,
    error,
    id,
    isLoading,
    rounded = undefined,
    children,
    showLabel = true,
    IconComponent,
    className,
    iconStart,
    label,
    variant = "outlined",
    ...props
}: BaseSelectProps) {
    return (
        <div
            className={clsx(
                "custom-select-wrapper relative flex flex-col",
                iconStart && "has-icon-start",
                rounded && "rounded-md"
            )}
        >
            {iconStart && <div className="icon-start">{iconStart}</div>}
            {label && showLabel && (
                <label className="block mb-3 font-bold" htmlFor={id}>
                    {label}
                </label>
            )}
            {isLoading ? (
                <Skeleton height={52} variant="rectangular" />
            ) : (
                <FormControl variant="standard">
                    {label && showLabel && <InputLabel>{label}</InputLabel>}
                    <MuiSelect
                        className={clsx(
                            "custom-select",
                            rounded && "rounded-md"
                        )}
                        IconComponent={ExpandMoreIcon}
                        variant={variant}
                        {...props}
                    >
                        {children}
                    </MuiSelect>
                </FormControl>
            )}
            <ErrorMessage error={error} />
        </div>
    );
}
