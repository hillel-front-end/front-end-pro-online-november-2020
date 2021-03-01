const Storage = require('./Storage');
const userService = require('./User');
// const {constructor: UserConstructor, defaultInstance} = require('./User');

const age = 29;

console.log('Node js - started');

// debugger;

const user1 = new userService.constructor('Katya');

console.log(userService.defaultInstance.name); // Vasya
console.log(user1); // { name: 'Katya }

