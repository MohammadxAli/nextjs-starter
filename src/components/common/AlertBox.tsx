import { DivProps } from "@/types/react-html-props";
import clsx from "clsx";
import InfoIcon from "@mui/icons-material/Info";
import { useTranslation } from "next-i18next";

interface AlertBoxProps extends DivProps {
    children?: React.ReactNode;
    hasContainer?: boolean;
    hasMargin?: boolean;
}

const AlertBox = ({
    children,
    className = "",
    hasContainer = false,
    hasMargin = false,
    ...otherProps
}: AlertBoxProps) => {
    const { t } = useTranslation();
    return (
        <div
            className={clsx(hasContainer && "container", className)}
            {...otherProps}
        >
            <p
                className={clsx(
                    "flex px-2 py-4 text-base font-light rounded-lg bg-opacity-10 bg-primary-main text-primary-main space-i-2",
                    hasMargin && "my-5"
                )}
            >
                <InfoIcon />
                <span>{children ? children : t("alerts.not_found")}</span>
            </p>
        </div>
    );
};

export default AlertBox;
