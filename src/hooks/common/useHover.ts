import useEventListener from "@/hooks/common/useEventListener";
import { RefObject, useState } from "react";

function useHover<T extends HTMLElement = HTMLElement>(
    elementRef: RefObject<T>
): boolean {
    const [value, setValue] = useState<boolean>(false);

    const handleMouseEnter = () => setValue(true);
    const handleMouseLeave = () => setValue(false);

    useEventListener("mouseenter", handleMouseEnter, elementRef);
    useEventListener("mouseleave", handleMouseLeave, elementRef);

    return value;
}

export default useHover;
