import "@/assets/fonts/iran-sans/css/iransans.css";
import "@/assets/fonts/iran-yekan/css/iranyekan.css";
import "@/styles/css/tailwind.css";
import "@/styles/scss/main.scss";

import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ReactElement, ReactNode } from "react";
import { DefaultSeo } from "next-seo";
import { appWithTranslation, useTranslation } from "next-i18next";
import Router from "next/router";
import NProgress from "nprogress";

import useHMR from "@/hooks/common/useHMR";
import ThemeWrapper from "@/theme/ThemeWrapper";
import nextI18nConfig from "../../next-i18next.config";

import type { AppProps } from "next/app";
import { EmotionCache } from "@emotion/cache";
import GlobalContextProvider from "@/contexts/GlobalContextProvider";
import { NextPage } from "next";
import useConfigureQueryClient from "@/hooks/common/useConfigureQueryClient";
import useEmotionCache from "@/hooks/common/useEmotionCache";
import { DEFAULT_LOCALE } from "@/helpers/constants";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement, pageProps: any) => ReactNode;
};

type CustomAppProps = AppProps & {
    emotionCache?: EmotionCache;
    Component: NextPageWithLayout;
};

function App(props: CustomAppProps) {
    const { Component, router, emotionCache, pageProps } = props;
    const getLayout = Component.getLayout || ((page: ReactNode) => page);
    const { locale = DEFAULT_LOCALE } = router;
    const cache = useEmotionCache(locale, emotionCache);
    const { t } = useTranslation();
    const queryClient = useConfigureQueryClient();
    useHMR();

    return (
        <QueryClientProvider client={queryClient}>
            <GlobalContextProvider>
                <ThemeWrapper emotionCache={cache} locale={locale}>
                    <DefaultSeo
                        titleTemplate={t("site_title") + " | %s"}
                        defaultTitle={t("site_title")}
                    />
                    {getLayout(<Component {...pageProps} />, pageProps)}
                </ThemeWrapper>
                <ReactQueryDevtools
                    panelProps={{ dir: "ltr" }}
                    position="bottom-right"
                    initialIsOpen={false}
                />
            </GlobalContextProvider>
        </QueryClientProvider>
    );
}

export default appWithTranslation(App, nextI18nConfig);
