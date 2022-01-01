// Custom
import "@/assets/fonts/iran-sans/css/iransans.css";
import "@/assets/fonts/iran-yekan/css/iranyekan.css";
import "@/styles/css/tailwind.css";
import "@/styles/scss/main.scss";

import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ReactElement, ReactNode } from "react";
import { DefaultSeo } from "next-seo";
import { appWithTranslation } from "next-i18next";
import Router from "next/router";
import NProgress from "nprogress";

import useHMR from "@/hooks/common/useHMR";
import ThemeWrapper from "@/theme/ThemeWrapper";
import nextI18nConfig from "../../next-i18next.config";

import type { AppProps } from "next/app";
import { EmotionCache } from "@emotion/cache";
import createEmotionCache from "@/theme/createEmotionCache";
import GlobalContextProvider from "@/context/GlobalContextProvider";
import { NextPage } from "next";
import useConfigureQueryClient from "@/hooks/common/useCustomQueryClient";
import GlobalLoader from "@/components/common/GlobalLoader";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type CustomAppProps = AppProps & {
    emotionCache?: EmotionCache;
    Component: NextPageWithLayout;
};

const clientSideEmotionCache = createEmotionCache();

function App(props: CustomAppProps) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        router,
        pageProps,
    } = props;
    const getLayout =
        (Component as any).getLayout || ((page: ReactElement) => page);
    const { locale } = router;
    const queryClient = useConfigureQueryClient();
    useHMR();
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalContextProvider>
                <ThemeWrapper emotionCache={emotionCache} locale={locale}>
                    <DefaultSeo
                        titleTemplate={"Site Name" + " | %s"}
                        defaultTitle={"Site Name"}
                    />
                    {getLayout(<Component {...pageProps} />)}
                    <GlobalLoader />
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
