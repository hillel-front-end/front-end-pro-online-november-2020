console.log('Lection_8');


// function getMax(source){
//     if (!Array.isArray(source)){
//         return console.error('Not array');
//     }
//     let maxValue = source[0];

//     for(let i = 0; i < source.length; i++) {
//         if(source[i] > maxValue) {
//             maxValue = source[i];
//         } 
//     }
//     // getMax.LE = {source: [3,345,345], maxValue: 345 }
//     // getMax.Scope = window (Global)
//     return maxValue;
// }





// console.log(getMax([1, 2, 3]));
// console.log(getMax([]));


// arr1 = [3,345,345];
// arr2 = [377,35,45];
// arr3 = [3876,45,345];

// let arrArrs = [arr1, arr2, arr3];

// for(let i = 0; i < arrArrs.length; i++) {
//     console.log(getMax(arrArrs[i]));
// }

// -----------------------------------------------------------
// Closure, Debug

// Замыкание - функция вместе со всеми переменными, которые ей доступны.

// var global_p = 'ppp'

// function f1() {
//     let x = 10;
//     let y = 20;
//     const getRandom = function() {
//         return Math.floor(Math.random()*10)
//     }

//     // console.log(x, y, global_p);
//     // debugger;


//     f2();


//     function f2() {
//         let z = 'z';
//         // console.log(x, getRandom(), global_p); // f1 -> Closure
//         // console.log(global_p, y);
//         // debugger;

//         f3();

//         function f3() {
//             console.log(x, z);
//             debugger;
//         }
//     }
// }

// f1();