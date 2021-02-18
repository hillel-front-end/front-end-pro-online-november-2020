console.log('Users IS WORKS');
const Storage = require('./Storage');

class User {
    constructor(name){
        this.name = name;
    }

    run() {}
}

module.exports = {
    defaultInstance: new User('Vasya'),
    constructor: User,
}

module.exports.k1 = 1;
module.exports.k2 = 2;
module.exports.k3 = 3;
