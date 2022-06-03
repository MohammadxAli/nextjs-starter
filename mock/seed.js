const db = require("./database");
const { generateFakeUsers } = require("./src/factory/user");

db["user"] = generateFakeUsers();

const getDatabase = () => db;

module.exports = { getDatabase };
