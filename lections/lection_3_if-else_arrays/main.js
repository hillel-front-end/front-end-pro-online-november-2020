console.log('lection 3');

/*
    Тезисы:
        xx-yy-zz - array intro
        xx-yy-zz - cycles + arrays
        xx-yy-zz - push, pop, shift, unshift, splice, slice, "copy"

    Практика:
        - Задачи из раздела Лекция
*/


list = [12, 82, 23, 34, 50, 0]; // array

// console.log( list.length ); // длина массива
// console.log(list);


// number = 3;

// console.log( list[number] );

// list[2] = 200;
// list[0] = list[1] + list[3];

// console.log(list);


// ---------------------------------------------

// list = [5,4,'123123',false,3];

// console.log(list);

// for(i = 0; i < list.length; i = i + 1) {
//     console.log(list[i]);
// }

// ---------------------------------------------

// list = ['Hello', 'World', 'what', 'are', 'you', 'doing', '!'];

// console.log(list);
// console.log(list.length);
// list.length = 3;
// console.log(list);
// list.length = 10;
// console.log(list);


// for(i = 0; i < list.length; i = i + 1) {
//     console.log(i, list[i]);
// }

// list = [1, 2, 3];
// console.log(list)
// list[50] = 100500;
// console.log(list);
// for(i = 0; i < list.length; i = i + 1) {
//     if (list[i] == undefined) {
//         list[i] = 0;
//     }
// }
// console.log(list);


// ---------------------------------------------

// add to end | remove last

// friends = ['Name 1', 'Name 2', 'Name 3'];
// console.log(friends);

// add - #1
// newName = 'Name 4';

// friends[friends.length] = newName;

// add - #2
// friends.push(newName);


// remove - #1
// friends.length--;
// friends.length = friends.length - 1;

// remove - #2
// friends.pop(newName);

// console.log(friends);


// lastValue = friends.pop(newName); // returns last value
// console.log(lastValue);




// ---------------------------------------------



// rand(10) -> 0..9
// rand(11)-5  -> -5..5
// rand(84)-23  -> -23..60

// Math.random() -> 0..1
// round(Math.random()*10)-> 0..9
// round(Math.random()*11 - 5)-> -5..5



// val = Math.random();
// console.log(val);

// value = 1231.98867;

// console.log( Math.ceil(value) );
// console.log( Math.floor(value) );


// -------------------------------------------


list = [1, 7, 8, 9, 5, 4, 5];

// shift
console.log(list);

// list.shift(); // pop с началом массива
// console.log(list);

// list.unshift(500);
// console.log(list);

// ---------------------

// values = list.slice();
// values = list.slice(3);
// values = list.slice(1, 3);
// values = list.slice(-1);
// console.log(list, '|' ,values);

// ------------------------------------

// values = list.splice(2, 4);
// values = list.splice(2, 3, 'v1', 'v2', false);
// values = list.splice(2, 0, 99, 88, 77);
// console.log(list, '|' ,values);

// ------------------------------------

// console.log( list.reverse() );

// ------------------------------------

list = [1, 7, 8, 9, 5, -4, 5];

max = list[0];
min = list[0];

for(i = 0; i < list.length; i++) {
    if (list[i] > max) {
        max = list[i];
    }

    if (list[i] < min) {
        min = list[i];
    }
}

console.log(max, min);