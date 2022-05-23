require("dotenv").config();
const { faker } = require("@faker-js/faker");

const baseLocale = process.env.MOCK_DEFAULT_LOCALE || "en";

faker.locale = baseLocale;

module.exports = faker;
