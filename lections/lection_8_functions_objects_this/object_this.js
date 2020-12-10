// console.log(this); // object

// Context - this

// f(); // window
// // window.f(); // window

// let info = {
//     help: f
// };
 
// console.log(info.help == f);
// info.help(); //  this -> info


// function f()  {
//     console.log(this);
// }


/* this

1) this ссылается на объект из которого вызывается

*/

// function getFullNameBase() {
//     // debugger;
//     return this.name + ' ' + this.surName;
// }

// function setName(newName) {
//     this.name = newName;
// }

// function addFriend(friendName) {
//     // if(!this.friends) {
//     //     return console.warn(this.name, 'no friends');
//     // }
//     if (!this.friends) {
//         this.friends = [];
//     }
//     this.friends.push(friendName);
// }

// const user = {
//     name: 'Katya',
//     age: 29,
//     surName: 'Ponomarenko',
//     friends: [],
//     getFullName: getFullNameBase,
//     setName: setName,
//     addFriend
// }

// const user1 = {
//     age: 29,
//     name: 'Petya',
//     surName: 'Petrov',
//     getFullName: getFullNameBase,
//     setName,
//     addFriend
// }


// // console.log(user);
// // user.setName('Mary');
// // console.log(user);

// // user1.setName('Petya');
// // console.log(user1);

// user.addFriend('Mary');
// user1.addFriend('Katya');

// console.log(user);
// console.log(user1);


// ----------------------------------------------

// var x = 100;

// function sum() {
//     var x = 0;
//     const self = this;

//     console.log(this.x + 10);
//     console.log(this); // 

//     innerAction();

//     function innerAction(){
//         console.log(self.x); // this -> window

//         debugger;
//     }
// }


// #1
// sum(); // this -> window

// #2
// data = {x: 5, sum}
// data.sum(); // this -> data


// ----------------------------------------------


