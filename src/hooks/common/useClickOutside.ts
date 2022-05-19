import { useEffect, useRef } from "react";

const DEFAULT_EVENTS = ["mousedown", "touchstart"];

const useClickOutside = <T extends HTMLElement = any>(
    handler: () => void,
    events?: string[] | null,
    nodes?: HTMLElement[]
) => {
    const ref = useRef<T>(null);

    useEffect(() => {
        const listener = (event: any) => {
            if (Array.isArray(nodes)) {
                const shouldIgnore = event?.target?.hasAttribute(
                    "data-ignore-outside-clicks"
                );
                const shouldTrigger = nodes.every(
                    (node) => !!node && !node.contains(event.target)
                );
                shouldTrigger && !shouldIgnore && handler();
            } else if (ref.current && !ref.current.contains(event.target)) {
                handler();
            }
        };

        (events || DEFAULT_EVENTS).forEach((fn) =>
            document.addEventListener(fn, listener)
        );

        return () => {
            (events || DEFAULT_EVENTS).forEach((fn) =>
                document.removeEventListener(fn, listener)
            );
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref, handler, nodes]);

    return ref;
};

export default useClickOutside;
