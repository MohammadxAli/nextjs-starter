const faker = require("../faker");

const generateFakeUser = (_, id) => {
    return {
        id: id + 1,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
    };
};

const generateFakeUsers = (count = 50) =>
    [...Array(count)].map(generateFakeUser);

module.exports = { generateFakeUsers };
