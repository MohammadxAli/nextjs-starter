import React, { Fragment } from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import { getLangDir, isRtlLang } from "rtl-detect";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "@/theme/createEmotionCache";
import { DEFAULT_LOCALE } from "@/helpers/constants";

export default class AppDocument extends Document {
    render() {
        const { locale = DEFAULT_LOCALE } = this.props;
        return (
            <Html dir={getLangDir(locale)}>
                <Head>
                    {!isRtlLang(locale) && (
                        <Fragment>
                            <link
                                rel="preconnect"
                                href="https://fonts.googleapis.com"
                            />
                            <link
                                rel="preconnect"
                                href="https://fonts.gstatic.com"
                                crossOrigin="anonymous"
                            />
                            <link
                                href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700;900&display=swap"
                                rel="stylesheet"
                            />
                        </Fragment>
                    )}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
AppDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    const originalRenderPage = ctx.renderPage;
    const { locale = DEFAULT_LOCALE } = ctx;
    const isRTL = isRtlLang(locale);
    // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createEmotionCache(isRTL);
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App: any) =>
                function EnhanceApp(props) {
                    return <App emotionCache={cache} {...props} />;
                },
        });

    const initialProps = await Document.getInitialProps(ctx);
    // This is important. It prevents emotion to render invalid HTML.
    // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(" ")}`}
            key={style.key}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ));

    return {
        ...initialProps,
        emotionStyleTags,
    };
};
