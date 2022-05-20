const { faker } = require("@faker-js/faker");

const baseLocale = process.env.DEFAULT_LOCALE;

faker.locale = baseLocale;

module.exports = faker;
