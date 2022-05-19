import { useLayoutEffect, useCallback, useState, RefObject } from "react";

interface RectResult {
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
}

const getRect = <T extends HTMLElement>(element?: T) => {
    let rect: RectResult = {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
    };
    if (element) rect = element.getBoundingClientRect();
    return rect;
};

const useRect = <T extends HTMLElement>(ref: RefObject<T>) => {
    const [rect, setRect] = useState<RectResult>(
        ref && ref.current ? getRect(ref.current) : getRect()
    );

    const handleResize = useCallback(() => {
        if (!ref.current) return;
        setRect(getRect(ref.current));
    }, [ref]);

    useLayoutEffect(() => {
        const element = ref.current;
        if (!element) return;

        handleResize();

        if (typeof ResizeObserver === "function") {
            let resizeObserver: null | ResizeObserver = new ResizeObserver(() =>
                handleResize()
            );
            resizeObserver.observe(element);
            return () => {
                if (!resizeObserver) return;
                resizeObserver.disconnect();
                resizeObserver = null;
            };
        } else {
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, [ref.current]);

    return rect;
};

export default useRect;
