const fs = require("fs");
const db = require("./database");

fs.writeFile("db.json", JSON.stringify(db, null, 2), function () {
    console.log("Mock data has been generated");
});
