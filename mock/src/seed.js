const db = require("./database");
const { generateFakeUsers } = require("./factory/user");

db["user"] = generateFakeUsers();

const getDatabase = () => db;

module.exports = { getDatabase };
