import { useEffect } from "react";
import { useTranslation } from "next-i18next";

export default function useHMR() {
    const { i18n } = useTranslation();

    if (process.env.NODE_ENV === "development" && !process.browser && i18n) {
        import("i18next-hmr/server").then(({ applyServerHMR }) => {
            applyServerHMR(i18n);
        });
    }

    useEffect(() => {
        if (process.env.NODE_ENV === "development" && i18n) {
            import("i18next-hmr/client").then(({ applyClientHMR }) => {
                applyClientHMR(i18n);
            });
        }
    }, [i18n]);
}
