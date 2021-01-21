// private fields
// class Car {
//     #wheels;
//
//     config = {};
//
//     #defaultConfig = {
//         wheels: 4
//     };
//
//     constructor(config) {
//         this.config = {...this.#defaultConfig, ...config};
//
//         this.parentValue = 'Parent - 100';
//         this.#wheels = 4;
//     }
//
//     #consoleWheels() {
//         console.log(this.#wheels);
//     }
//
//     getWheels() {
//         return this.#wheels;
//     }
//
//     setWheels(wheels) {
//         this.#wheels = wheels;
//
//         this.#consoleWheels();
//     }
// }
//
// const carInstance = new Car();
//
// // console.log(carInstance);
//
//
// class MersBenz extends Car {
//     constructor() {
//         super();
//         this.childValue = true;
//
//     }
//
//     childMethod() {
//     }
// }
//
// var child1 = new MersBenz();
// // console.log(child1);
//
//
//
//
//
// // rest/spread
//
// // ...
//
// class A4 {
//     constructor(a4) {
//     }
// }
//
// class A3 {
//     constructor(a3, a4) {
//     }
// }
//
// class A2 extends A3 {
//     constructor(a2, ...rest3) {
//         super(...rest3);
//         console.log('A2', a2, rest3);
//     }
// }
//
// class A1 extends A2 {
//     constructor(a1, ...restArguments) {
//         super(...restArguments);
//
//         console.log('restArguments', restArguments);
//         console.log('a1', a1);
//     }
// }
//
//
// // console.log(new A1(1,2,3,4));
//
//
//
//
// var obj1 = {
//     a1: 1,
//     a2: 2,
//     a3: 3,
//     a4: 4
// }
//
// const obj2 = {
//     a1: 1,
//     a3: 2,
//     a4: 3,
//     a5: 4,
//     obj: {
//         field: 222
//     }
// }
//
// // var obj3 = Object.assign({
// //     a2: 230040345,
// //     newField: 100,
// // }, obj1, {
// //     a1: 2000,
// // }, obj2);
//
// var obj3 = {
//     a2: 230040345,
//     newField: 100,
//     ...obj1,
//     a1: 2000,
//     ...obj2
// };
//
// const obj = {...obj2.obj};
//
// // obj4 = Object.assign({}, obj1, obj2);
// var obj4 = {...obj1, ...obj2};
//
// console.log('obj1', obj1);
// console.log('obj3', obj3);
// console.log('obj4', obj4);
//
// // const a1 = ob1j.a1;
// // const a2 = ob1j.a2;
// // const a3 = ob1j.a3;
//
// const {
//     a1: field1,
//     a2,
//     a3,
//     a4,
//     ...restFields
// } = obj1;
//
// // console.log(field1, a3, restFields);
// // console.log(obj1);
//
// const array = [1,2,3,4];
//
// const [valueByIndex1, valueByIndex2, ...restValues] = array;
//
// // console.log(valueByIndex1, valueByIndex2, restValues);
// // console.log('array', array);
//
//
// const func = (...args) => {
//     // arguments
//     console.log(args);
// }

// func(2,3,45,6);

// bind, call, apply

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

function sum(a, b) {
    return a + b;
}

// const plusFive = function (a) {
//     return sum(a, 5);
// }
const plusFive = sum.bind(null, 5);

// console.log(plusFive(10));



var obj2 = {
    a: 'obj2',
    b: 200,
    getField: getField,
    getFieldB: getFieldExtended('b')
}

var obj1 = {
    a: 100,
    b: 300,
    getField: getField,
    getField2: function (fieldName) {
        return this[fieldName];
    },
    getFieldB: obj2.getFieldB.bind(obj2), // creates new function
}

var obj3 = {
    a: 'obj3',
    b: 400,
    getFieldB: obj1.getFieldB
}

// console.log('obj3.getFieldB', obj1.getFieldB.apply(obj3)); // 200

// console.log('obj1', getField.call(obj1, 'b'));
// console.log('obj2', getField.call(obj2, 'b'));
// console.log('obj3', getField.call(obj3, 'b'));
//
// console.log('obj1', getField.apply(obj1, ['a']));
// console.log('obj2', getField.apply(obj2, ['a']));
// console.log('obj3', getField.apply(obj3, ['a']));

// console.log('obj1', obj1.getFieldB()); // 200
// console.log('obj3', obj3.getFieldB()); // 200

function bind(context, func) {
    return function (...args) {
        return func.apply(context, args);
    }
}

// const str = 'abcdefg';
//
// Array.prototype.forEach.call(str, (symbol) => {
//     console.log(symbol);
// })

const array = [32,445,6,6,2,45,76, -2];

console.log(Math.min(2,3,5,67,8,6,3,5));
console.log(Math.min.apply(null, array));

// console.log(Math.min(...array));

//[1, 2, 3].forEach(() => {})

