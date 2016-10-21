module.exports = function () {

    var faker = require("faker/locale/de");
    var _ = require("lodash");

    return {
        users: _.times(100, function (n) {
            return {
                id: n,
                avatar: faker.internet.avatar(),
                name: faker.name.findName(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber(),
                address:{
                    street: faker.address.streetName(),
                    streetnumber: faker.random.number(123),
                    city: faker.address.city(),
                    zipcode: faker.address.zipCode()
                }
            }
        }),

        posts: _.times(300, function (n) {
            return {
                id: n,
                userId: n % 100,
                body: faker.lorem.text(),
                title: faker.random.words(),
                date: faker.date.past()
            }
        })
    }

}