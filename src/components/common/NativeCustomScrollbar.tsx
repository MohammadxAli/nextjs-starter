import { DivProps } from "@/types/react-html-props";
import clsx from "clsx";

interface NativeCustomScrollbarProps extends DivProps {}

const NativeCustomScrollbar = ({
    children,
    className,
    ...props
}: NativeCustomScrollbarProps) => {
    return (
        <div className={clsx("native-custom-scrollbar", className)} {...props}>
            {children}
        </div>
    );
};

export default NativeCustomScrollbar;
