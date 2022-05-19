import { SpanProps } from "@/types/react-html-props";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { FormattedNumber } from "react-intl";

interface PriceProps extends SpanProps {
    price: number;
    variant?: "default" | "secondary";
}

const Price = ({
    price,
    variant = "default",
    className,
    ...props
}: PriceProps) => {
    const { t } = useTranslation();
    return (
        <span
            className={clsx(
                "flex items-center space-i-1 whitespace-nowrap",
                className
            )}
            {...props}
        >
            <span>
                <FormattedNumber value={price} />
            </span>
            <span
                className={clsx(
                    variant === "secondary" && "text-sm opacity-50"
                )}
            >
                {t("currency")}
            </span>
        </span>
    );
};

export default Price;
