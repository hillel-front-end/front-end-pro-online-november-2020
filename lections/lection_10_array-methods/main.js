// [-1, -2, 1, 2, 3, -5, -10, 4, 16]
// получить массив положительных чисел ->
// получить массив четных числел ->
// получить "квадраты" значений

// const array = [-1, -2, 1, 2, 3, -5, -10, 4, 16];
//
// console.log('source', array);
//
// function getPositiveArray(arr) {
//     const positiveArray = [];
//
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > 0) {
//             positiveArray.push(array[i]);
//         }
//     }
//
//     return positiveArray;
// }
//
// // let result = array.filter(function (value, index, sourcesArray) {
// //     //sourcesArray === array
// //
// //     return value > 0;
// // }) // result === Array
// //     console.log(result);
// //
// //     result = result.filter(function (value) {
// //         return value % 2 == 0;
// //     })
// //
// //     console.log(result);
// //
// //     result = result.map(function (value) {
// //         return value * value;
// //     })
//
// let result = array
//     .filter(function (value, index, sourcesArray) {
//         return value > 0;
//     })
//     .filter(function (value) {
//         return value % 2 == 0;
//     })
//     .map(function (value) {
//         return value * value;
//     });
//
// // obj.doSmth().dotSmth2()....
//
// console.log(result);
//
// //map
// //filter
// //forEach
// //reduce
//
// // for (let i = 0; i < array.length; i++) {
// //     if (array[i] > 0) {
// //         positiveArray.push(array[i]);
// //     }
// // }
//
//
// // из массива типа [["Иван", "Петров"], ["Шамиль", "Туров"], ["Святослав", "Вальковский"]]
// // сделать массив объектов [{name: "Иван", surname: "Петров"}, {name: "Шамиль", surname: "Туров"}, {name: "Святослав", surname: "Вальковский"}]
// // найти первый объек у которого фамилия "Туров"
//
// const sourceUsers = [["Иван", "Петров"], ["Шамиль", "Туров"], ["Святослав", "Вальковский"]];
//
// console.log('sourceUsers', sourceUsers)
//
// const resultUsers = sourceUsers.map(function (user, index) {
//     const name = user[0];
//     const surname = user[1];
//     console.log('index', index);
//
//     return {
//         name: name,
//         surname: surname
//     }
// });
//
// console.log('resultUsers', resultUsers)
//
// resultUsers.forEach(function (user, index) {
//     console.log('index', index);
//     console.log('forEach', user);
// });
//
// const foundUser = resultUsers.find(function (user, index) {
//     console.log('index', index);
//     return user.surname === 'Туров'; //true
// });
//
// console.log('foundUser', foundUser);


// const sumArray = [-1, -2, 1, 2, 3, -5, -10, 4, 16];
//
// const summ = sumArray.reduce(function (result, value, index) {
//     console.log('result', result) // 0
//     console.log('value', value) // -1
//     console.log('index', index) // 0
//
//     return result + value;
// }, 0);
//
// console.log('summ', summ);


// const sourceUsersReduce = [["Иван", "Петров"], ["Шамиль", "Туров"], ["Святослав", "Вальковский"]];
//
// console.log(sourceUsersReduce);
//
// const result = sourceUsersReduce.reduce(function (resultArray, userArray) {
//     debugger;
//
//     resultArray.push({
//         name: userArray[0],
//         surname: userArray[1]
//     });
//
//     return resultArray;
// }, []);
//
// console.log(result);

//----------------------------------------------
// arrow functions
// const f2 = function (a) {
//     return a+2;
// }
//
// const arrowFunc = (a, b) => {
//     return a+b;
// }
//
// const arrowFunc2 = a => {
//     return a + 2;
// };
//
// const arrowFuncReturn = a => a + 2;
// const arrowFuncWithoutArguments = () => 3 + 2;
// const arrowFuncWithoutReturn = () => {
//     console.log(3 + 2);
// };
//
// const arrowFunc3 = (a, b) => {
//     return a+2;
// }
//
// const getConsole = () => console;
//
// function sumNumbers() {
//     let sum = 0;
//
//     const sumAB = (a,b) => {
//         getConsole().log(arguments);
//         return a+b;
//     }
//
//     for (let index = 0; index < arguments.length; index++) {
//         sum = sumAB(sum, arguments[index]);
//     }
//
//     return sum;
// }
//
// function getFieldB() {
//     return this.b
// }
//
// function getField(fieldName) {
//     return () => {
//         return this[fieldName];
//     };
// }
//
// var obj2 = {
//     b: 100,
//     getField: getFieldB,
//     getArrowFieldB: () => {
//         console.log(this);
//         return this.b;
//     },
//     getCustomField: getField
// }
//
// obj2.getArrowFieldB();
//
// const getB = obj2.getCustomField('b'); // function
//
// console.log(getB()); // undefined


// console.log(sumNumbers(1,2,4,56,5));


// const array = [-1, -2, 1, 2, 3, -5, -10, 4, 16];
//
// let result = array
//     .filter((value, index) => {
//         console.log(index);
//
//         return value > 0
//     })
//     .filter(value => value % 2 === 0)
//     .map(value => value * value);


//this

function getField(fieldName) {
    return this[fieldName];
}

function getFieldExtended(fieldName) {
    const fff = function (fieldName2) {
        if (fieldName2 !== undefined) {
            return this[fieldName2];
        }

        return this[fieldName];
    };

    return fff;
}

const obj2 = {
    b: 200,
    getField: getField,
    // getField2: obj1.getField2,
    getFieldB: getFieldExtended('b')
}

const obj1 = {
    a: 100,
    b: 300,
    getField: getField,
    getField2: function (fieldName) {
        return this[fieldName];
    },
    getFieldB: obj2.getFieldB,
}

const contextB = obj1.getFieldB;

// console.log(obj2.getFieldB());
// console.log(obj1.getFieldB()); // 200 -- {100,300} -- 300
console.log(obj2.getFieldB('a')); //100

console.log(contextB()); // undefined/


// console.log(obj1.getField('a')) // 100
// console.log(obj1.getField2('a')) // 100
//
// console.log(obj2.getField('b')) // 200
// console.log(obj2.getField2('b')) //100 -> 200
//
//
// const getB = obj2.getField;
//
// console.log(getB('b')); // 200 -- 100 -- undefined

//
//
// const arr = [1,2,3];
//
// arr.getField = getField;
//
// const arr2 = [1,2,3];
//
// console.log(arr);
//
// console.log(arr.getField(1));

//----------------------------------------------

// Рекурсия
// получить сумму от 1 до n









// факториал





// Фибоначчи




/*
let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};

получить сумму всех зарплат всех отделов
*/



