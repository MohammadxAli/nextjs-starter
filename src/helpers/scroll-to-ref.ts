export const scrollToRef = (ref: any, extra = 0) => {
    if (ref?.current) {
        let top = 0;
        if (ref.current) {
            top = window.pageYOffset + ref.current.getBoundingClientRect().top;
        }
        window.scroll({
            top: top + extra,
            behavior: "smooth",
        });
    }
};
