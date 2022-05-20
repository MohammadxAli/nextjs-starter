const HttpBackend = require("i18next-http-backend/cjs");
const path = require("path");

const defaultLocale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE || "en";

module.exports = {
    i18n: {
        defaultLocale,
        locales: [defaultLocale, "fa"],
        localeDetection: false,
        localePath: path.resolve("./public/locales"),
    },
    use: typeof window === "undefined" ? [] : [HttpBackend],
    serializeConfig: false,
};
