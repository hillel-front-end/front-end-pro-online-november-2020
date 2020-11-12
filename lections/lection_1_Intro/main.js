console.log('lection 1');
 
// a = 10;
// // Выделение памяти - ячейка памяти
// // Ссылка на ячейку - а
// // По ссылке происходит *присвоение значение*
// console.log(a);

// // =   оператор присвоение значения
// a = 15;
// b = 6;

// console.log(a);


// // math
// c = a + b;
// console.log('a + b', c);
// c = a - b;
// console.log('a - b', c);
// c = a * b;
// console.log('a * b', c);
// c = a / b;
// console.log('a / b', c);

// console.log(' -------- ');

// c = a % b; // деление по модулю, остаток от деления
// console.log('a % b', c);

/*
    15 | 6
    12  -----
    --  2
    3
*/

// --------------------------------------
// console.log(10 + 20);
// console.log(a + 20);

// --------------------------------------
// Типы данных

// Number
value = 150.5674535;


// String
msg = 'Привет, как дела?';
// msg = "Привет, как дела?";
// msg = `Привет, как дела?`;

// console.log(value, msg);

// typeof - оператор, который возвращает тип данных переменной

// console.log(typeof value);
// console.log(typeof msg);


// ------------------------------------------------
// value = 150.5674535;

// console.log(Math.ceil(value));
// console.log(Math.floor(value));
// console.log(Math.round(value));
// console.log(value.toFixed(4));
// console.log(value.toFixed(4));


msg = 'Привет, как дела?';

// console.log(msg.toUpperCase());
// console.log(msg.toLowerCase());

// console.log( msg + 'HELLO!!!' );
// + - конкатенация

// console.log( 10 + 20 );
// + - суммирование

// ------------------------------------------------

x = 10; 
// y = 5;
y = '5'; // '5' -> 5

// Приведение типа
// '120' * 10 -> 120 * 10 -> 1200
// '12aa0d' * 10 -> NaN * 10 -> NaN
// NaN -> Not A Number

console.log('x =', x, 'y =', y);

console.log( 'x - y =' , x - y );
console.log( 'x * y =' , x * y );
console.log( 'x / y =' , x / y );
console.log( 'x % y =' , x % y );
console.log( '----------------------------' );
console.log( 'x + y =' , x + y );
console.log( 'x + y =' , 10 + '5' );
console.log( 'x + y =' , '10' + '5' );
console.log( 'x + y =' , '105' );
console.log( '----------------------------' );

yNumber = parseInt(y);
console.log( 'x + y =' , x + yNumber );
console.log( 'x + y =' , x + (1*y) );
console.log( 'x + y =' , x + (+y) );


console.log( '----------------------------' );

/*

 x - (a - 2) <==> x - a + 2 <==> x + (-1)*(a - 2)

 -val <==> (-1)*val <==> (-1)*(-555) <==> 555
 val = '50'
 -val <==> (-1)*val <==> (-1)*('50') <==> (-1)*(50) -> -50
 +val <==> (+1)*val <==> (+1)*('50') <==> (+1)*(50) -> 50
*/

val = -555;
console.log(-val);