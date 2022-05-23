const { faker } = require("@faker-js/faker");

module.exports = {
  primaryNavigation: {
    label: faker.lorem.word(),
    URL: faker.internet.url(),
  },
  member: {
    name:  faker.name.findName(),
    mail:  faker.internet.email(),
    mailEspecialChar:  faker.internet.exampleEmail({ allowSpecialCharacters: true })
  },
  staff: {
    mail:  faker.internet.email(),
    mailEspecialChar:  faker.internet.exampleEmail({ allowSpecialCharacters: true })
  },
  profile: {
    name:  faker.name.findName(),
    slug: faker.lorem.slug(),
    mail:  faker.internet.email(),
    mailEspecialChar:  faker.internet.exampleEmail({ allowSpecialCharacters: true }),
    location: faker.address.cityName()
  }
};




