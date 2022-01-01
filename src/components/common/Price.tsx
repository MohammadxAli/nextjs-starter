import clsx from "clsx";
import { useRouter } from "next/router";
import { SpanProps } from "react-html-props";
import { useTranslation } from "next-i18next";
import { formatNumber } from "@/helpers/helpers";

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
    const { locale } = useRouter();
    const { t } = useTranslation();
    return (
        <span
            className={clsx(
                "flex items-center space-i-1 whitespace-nowrap",
                className
            )}
            {...props}
        >
            <span>{formatNumber(locale, price)}</span>
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
