/*
    Тезисы:
        xx-yy-zz - object intro - creating
        xx-yy-zz - properties - setting and getting (not get/set)
        xx-yy-zz - for..in, Object.keys, Object.valuesxx-yy-zz - Simple practice

        xx-yy-zz - Functions intro - creating
        xx-yy-zz - args, return
*/

// Array
person1 = ['Name 1', 'Surname 1', 23, 65];

// console.log(person1);


// Object
// data = {
//     name: 'Name 1',
//     surname: 'Surname 1',
//     age: 23,
//     weight: 65,
//     friends: ['Name 1', 'Name 2', 'Name 3',],
//     address: {
//         city: 'City 1',
//         street: 'Street name',
//         zip: 3546
//     }
// };

// console.log(data);
// console.log( data.surname );
// console.log( data.friends[1] ); 
// console.log(data.address.zip);

// console.log(data);
// data.name = 'Name 2';
// console.log(data);

// -----------------------------------
// console.log(data.height);
// data.height = 170;
// delete data.weight;
// console.log(data);


// -----------------------------------

// data = {
//     name: 'Name 1',
//     'surname': 'Surname 1',
//     'age-test': 23,
//     weight: 65,
//     'friends': ['Name 1', 'Name 2', 'Name 3',],
//     address: {
//         city: 'City 1',
//         street: 'Street name',
//         zip: 3546
//     },
// };

// console.log(data['age-test'])

// console.log(data);
// for(key in data){
//     console.log(key, data[key]);
// }

// -----------------------------------

// Object.keys()

// result = Object.keys(data);
// console.log(result);


// Object.values()

// result = Object.values(data);
// console.log(result);


// Object.entries()

// result = Object.entries(data);
// console.log(result);


// -----------------------------------


// x = 10;
// y = x;
// y = y + 10;
// console.log(x, y);



// Ссылочные типы данных - объекты, массивы и функции
// A = [1, 2, 3];
// B = A;
// A.push(100);
// console.log(A, B);



// obj1 = {
//     x: 1,
//     y: 2
// }

// obj2 = {
//     test: obj1
// };

// obj1.link = obj2.test;

// delete obj2.info;
// obj2.info = undefined;

// obj2.info.x = 99999;

// console.log(obj1, obj2);
// console.log( obj1 == obj2.info );

// ----------------------------------------------


