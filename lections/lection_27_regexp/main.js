console.log('lection_27');


var pattern = /RegExp/;

// search
// str = `so23me9860 пsOMEивет шаблон-2 шаблон-8 привет как ждела шаблон шаблон-!`;
// console.log(str.search(/шаблон-1/)); // 22
let res;

str = `Hello WorLd! 82 77 66  199WoRld 97756 8world! 2019 world!asd 2013 helloWo`;
// match
// res = str.match(/\d\d\d\d/i);

// console.log(res);

// //match /g - global
// res = str.match(/ \d\d\d\d /gi);
// console.log(res);

// split
str = '10:23:58::454';
// res = str.split(/:|-/);
// res = str.split(/::?/);

/*
 - классы и спецсимволы
 - диапазоны и наборы
 - квантификаторы +, *, ? и {n}
 - Альтернация
*/

// var str = `1asdasdasdas 2...44 .2124 as
// da`
// res = str.match(/\d\d\d[\d.]\d/g)
// console.log(res);

/*
        \d - [0-9]
        \w - [0-9a-zA-Z_]
        \s - [ \f\n\r\t\v]

        \D - [^0-9]
        \W - [^0-9a-zA-Z_]
        \S - [^ \f\n\r\t\v]
*/

// res = str.match(/[а-яА-ЯіІїЇ\w]{5}/g)
// res = str.match(/[\d.]{5}/g);
// res = str.match(/\d[\d.]{4}/g);

// var str = `1asdasdasdas 294 .2124 asda`
// res = str.match(/\w{2}\s\w{2}/g);
// res = str.match(/\d\D\d/g);
// console.log(res);




// -----------------
// . ? [ ] { } ^ \ / |
// \. \? \/ \| \\
// var str = "Hello ? . [ ] { } 2.5 3. ^ / \\ | t world ttt http://google.com";
// res = str.match(/\//g);
// res = str.match(/\\/);
// res = str.match(/https?:\/\/[a-zA-Z]+\.[a-z]{3}/g);
// res = str.match(/\\/g);
// res = str.match(/t{,3}/g);
// res = str.match(/\d\.\d?/g);
// console.log(res);

/*
        \d{2, 5}
        \d{1,} - \d+
        \d{0,1} - \d?
        \d{0,} - \d*
*/

// ----------------------------

var str = "Hello Pet+a! Hlllllllllllllllo Hello Helelo Hleleo Hlelo  Petтa Helo, Hello, Hellllo, Hellllllllo Petрa Hello Petia! Pet^a Pet!a Hello Petra!";

// res = str.match(/Pet(r|i|\+|т)a/ig);
// res = str.match(/Hel+o/ig);
// res = str.match(/H(ell|el|lel|l+)o/ig);
// res = str.replace(/H(ell|el|lel|l+)o/ig, 'Hello');
// console.log(res);

// ----------------------------

// var str = " Ivan4! Hello Ivan8! Ivan2Hello worldeIvan3xample Ivan_! Ivan! Hello Ivan7? Ivan";
// res = str.match(/Ivan[^a-zA-Z]?[!?]/gi);

// var str = "1988  Как делаЇ? 2 357.123 Что .234 wor12ds? Когда нет ничего в 18 лет. 1234567 world"
// res = str.match(/\b\d+\b/gi);
// res = str.match(/^\d{4}/gi);
// res = str.match(/\b\w+([,!?]|\.{1,3})?$/gi);
// console.log(res);

// ----------------------------

var str = "Hello_world!";
// res = str.match(/world(?=.*test)/gi);
// res = str.match(/\w+(?=[.,!?]$)/gi);
// res = str.match(/\b\w+/gi);
// res = str.match(/(?<=Hello )world!/gi);
// res = str.match(/(?<!hello )world!/g);
// res = str.match(/((?<=Hello )world!|wo  d)/g);
// res = str.replace(/(Hello)(?:_| )+(world)/g, '$2 $1');
// console.log(res);

