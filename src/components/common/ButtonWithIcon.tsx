import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import clsx from "clsx";
import { ButtonProps } from "@/types/react-html-props";

interface Props extends ButtonProps {
    icon?: React.ReactNode;
    isActive?: boolean;
}

const ButtonWithIcon = ({
    isActive,
    children,
    icon,
    className,
    ...otherProps
}: Props) => {
    return (
        <button
            className={clsx(
                "relative block text-start duration-150 group hover:text-primary-main",
                isActive && "text-primary-main",
                className
            )}
            {...otherProps}
        >
            <span
                className={clsx(
                    "absolute transition-all duration-150 text-primary-main group-hover:visible group-hover:opacity-100 inset-inline-0",
                    isActive ? "opacity-100 visible" : "invisible opacity-0"
                )}
            >
                {!icon ? (
                    <NavigateBeforeIcon className="icon" fontSize="small" />
                ) : (
                    icon
                )}
            </span>
            <span
                className={clsx(
                    "transition-all duration-150 ease-out group-hover:pis-6 pis-0",
                    isActive && "pis-6"
                )}
            >
                {children}
            </span>
        </button>
    );
};

export default ButtonWithIcon;
