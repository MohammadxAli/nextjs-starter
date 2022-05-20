const HttpBackend = require("i18next-http-backend/cjs");
const path = require("path");

const defaultLocale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE;

module.exports = {
    i18n: {
        defaultLocale,
        locales: [defaultLocale, "en"],
        localeDetection: false,
        localePath: path.resolve("./public/locales"),
    },
    use: process.browser ? [HttpBackend] : [],
    serializeConfig: false,
};
