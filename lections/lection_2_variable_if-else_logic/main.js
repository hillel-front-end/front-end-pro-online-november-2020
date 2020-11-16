console.log('lection 2');

/*
 Тезисы:
    xx-yy-zz - Вступление
    xx-yy-zz - создание переменных var
    xx-yy-zz - Math.pow, Math.floor, Math.round, Math.ceil, Math.trunc, Math.abs, Math.random,
    xx-yy-zz - boolean
    xx-yy-zz - logic &&, ||, !
    xx-yy-zz - if else
    xx-yy-zz - cycles do...while, while
    xx-yy-zz - cycles for

Практика:
    Возведение числа в степень a^n, без Math.pow
*/


// a = 10;
// b = 20;

// b = b + 80;

// c = a + b;
// c = 10 + b;
// c = 10 + 100;
// c = 110;

// console.log(c);
// console.log( a - b );

// var x = 10;

// тривиальные типы данных - undefined, null

// var value; // ???

// console.log(value); // undefined
// console.log( undefined + 10 );
// console.log( undefined + 'Hello' );

// // null - определено, но без значения

// street = null;

// console.log( null + 10 );
// console.log( null + 'Hello' );


// ------------------------------------------

// тип данных boolean


// ==, !=, ===, >, <, >=, <=
// console.log( 10 == 15 );
// console.log( 10 <= 15 );

// a = +prompt(' a = ');
// b = +prompt(' b = ');

// console.log( a+' > '+b+'? - ', a > b );
// console.log( 0 != 6 );



// console.log( a >= 0, b >= 0 );

// if() {} else {} 

// a = +prompt(' a = ');

// if (a >= 0) {
//     // true
//     console.log('a -', a);
// } else {
//     // false
//     console.error('wrong a -', a);
// }

// resultStr = 'lastCode';
// console.log(resultStr);



// --------------------------------------------

// if () {} подробно

// если число:  всё что не ноль == true
// если строка: всё что не пустая строка == true
// если undefined или null: всегда false

// false values
// a = '';
// a = undefined;
// a = null;
// a = 0;
// a = false;

// true value
// a = 'undead';
// a = -12;
// a = true;

// if (a) {
//     console.log('Boolean true');
// } else {
//     console.error('Boolean false');
// }

// ----------------------------------------------------------

// var a = 10;
// var b = 20;

// логическое И, AND, &&
// if (a > 0 && b > 0 && a != b) {
//     console.log('a и b больше нуля');
// }

// логическое ИЛИ, OR, ||
// if (a != undefined || b != undefined) {
//     console.log('a или b не undefined');
// }


// логическое отрицание\не
// if (!a || !b) {
//     console.error('a || b не определена');
// }



// анализ переменных на корректность
// a = 1;
// b = 0;
// c = 3;

// if (a && b && c){
//     console.log('a, b, c существуют');
// }

/*
a && b && c
1 && b && c
true && b && c

true && 2 && c
true && true && c
true && c
true && true 
true
*/

/*
если b = 0;

a && b && c
1 && b && c
true && b && c

true && 0 && c
true && false && c
false
*/

// -------------------------------------

// Вывести числа от 1 до 10 в консоль

// Циклы

/*

(условие выполнения цикла) - if (true) выполняется {тело цикла} else выход;

{
    тело цикла
}

// -------------------------------
цикл с предусловием

(условие) {
    тело цикла
}

цикл с постуловием

{
    тело цикла
} (условие)

цикл с счётчиком

(условие + счетчик) {
    тело цикла
}


*/

// i = 1; // начальные условие
// while (i <= 10) {
//     console.log(i);

//     i = i + 1;
// }

// console.log('after cycle -', i);

// -----------------

// i = 1; 
// do {
//     console.log(i);

//     i = i + 1;
// } while (i <= 10);

// console.log('after cycle -', i);

// -----------------

/*
for(#1; #2; #3) {
    #4 
}

    #1 - зона начальных условий
    #2 - зона - условие выполнения цикла
    #3 - зона - действие между итерациями
    #4 - зона - тело цикла


    #1 -> #2 ----true---> #4 -> #3 -
          |                          |
          --------------------------- 
*/

// for(i = 1; i < 10; i = i + 1) {
//     console.log(i);
// }


// -------------------------

// for(i = 1, j = -5; i < 10 && j < 0; i = i + 1, j = j + 2) {
//     console.log(i, j);
// }


// -------------------------

/*

1. 
Ввести с клавиатуры 2 числа `a` и `b` (где `a <<< b`). 
Запустить цикл перебора от `a` до `b`. 
Вывести в консоль квадраты чётных чисел.

2. Заставить пользователя ввести с клавиатуры число.

*/

// #1
// a = +prompt(' a = ');
// b = +prompt(' b = ');

// for(index = a; index <= b; index = index + 1) {
//     if (index % 2 == 0) {
//         console.log(index*index);
//     }
// }

// --------------------------

// #2

do {
    value = +prompt(); // number || NaN

    isError = isNaN(value); // true || false
    if (isError) {
        console.error('VALUE IS VERY BAD', value)
    }
} while(isError);

console.log('VALUE IS SUPER', value);




