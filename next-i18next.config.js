const HttpBackend = require("i18next-http-backend/cjs");
const path = require("path");

module.exports = {
    i18n: {
        defaultLocale: "fa",
        locales: ["fa", "en"],
        localeDetection: false,
        localePath: path.resolve("./public/locales"),
    },
    use: process.browser ? [HttpBackend] : [],
    serializeConfig: false,
};
