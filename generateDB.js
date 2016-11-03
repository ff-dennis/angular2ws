module.exports = function () {

    var faker = require("faker/locale/de");
    var _ = require("lodash");
    var _cities = ["Frankfurt","München","Nürnberg","Stuttgart","Köln","Hamburg","Offenbach"]

    return {
        users: _.times(10, function (n) {
            return {
                id: n,
                avatar: faker.internet.avatar(),
                name: faker.name.findName(),
                email: faker.internet.email(),
                phone: faker.phone.phoneNumber(),
                address:{
                    street: faker.address.streetName(),
                    streetnumber: faker.random.number(123),
                    city: faker.random.arrayElement(_cities),
                    zipcode: faker.address.zipCode()
                }
            }
        }),

        posts: _.times(30, function (n) {
            return {
                id: n,
                userId: n % 10,
                body: faker.lorem.text(),
                title: faker.random.words(),
                date: faker.date.past()
            }
        })
    }

}