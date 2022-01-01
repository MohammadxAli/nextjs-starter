const { i18n } = require("./next-i18next.config");
const { I18NextHMRPlugin } = require("i18next-hmr/plugin");
const { resolve } = require("path");
const localesDir = resolve("public/locales");

/**
 * @type {import('next').NextConfig}
 */

module.exports = {
    i18n,
    images: {
        domains: ["picsum.photos"],
    },
    webpack(config, context) {
        if (!context.isServer && context.dev) {
            config.plugins.push(new I18NextHMRPlugin({ localesDir }));
        }
        return config;
    },
};
