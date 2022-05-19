import clsx from "clsx";
import { ReactNode } from "react";

interface HeadingProps {
    subTitle?: string;
    title: ReactNode;
    description?: string;
    className?: string;
    subTitleClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}

const Heading = ({
    description,
    subTitle,
    title,
    className,
    descriptionClassName,
    subTitleClassName,
    titleClassName,
}: HeadingProps) => {
    return (
        <div className={clsx("flex flex-col", className)}>
            {subTitle && (
                <span className={clsx("font-light", subTitleClassName)}>
                    {subTitle}
                </span>
            )}
            <h3 className={clsx("font-bold", titleClassName)}>{title}</h3>
            {description && (
                <p className={clsx("font-light", descriptionClassName)}>
                    {description}
                </p>
            )}
        </div>
    );
};

export default Heading;
