// function f1(a, b) {
//     var x1 = 'x1';
//     let x2 = 'x2';
//     const x3 = 'x3';
//     function f2() {}
//     let f3 = function(){}

//     console.log(a, b, z, x1, x2, x3, f2, f3)
//     return a + b;
// }

/*
 1) Как функция вызывается?
 2) Что является аргументом?
 3) что в return?
*/


// f1(900, 'hello');
// f1([456,45,754,7,457], false);

// z = 600;

// console.log(f1(10, 20) + f1(89, 34));
// f1(10, 20); // f1(...) -> var a = 10; var b = 20;


// ------------------------------------

var global_z = 'global_z';

/* Global
    {
        global_z: 'global_z',
        scope_1: function(){...}
    }
*/

function scope_1(a, b) {
    var x1 = 'x1';
    var x2 = 'x2';

    /*
        scope_1.LexicalEnvironment = {
            a: 'Hello',
            b: 'World! ',
            x1: 'x1',
            x2: 'x2'
        }
        scope_1.Scope = Global
    */

    console.log(a, b, x1, x2, global_z);
    /*
        if (scope_1.LE.a) { return scope_1.LE.a; }
        if (scope_1.LE.b) { return scope_1.LE.b; }
        if (scope_1.LE.x1) { return scope_1.LE.x1; }

        if (scope_1.LE.global_z) { return scope_1.LE.x1; } 
        else if (scope_1.Scope.global_z) { return scope_1.Scope.global_z; } 
        else { console.error('global_z is not defined') }

    */
    return a + b + x1 + x2;
}

// scope_1('Hello', 'World! ');




/*
 1) Как функция вызывается?
 2) Что является аргументом?

 if (scope_1.LE.global_z) { return scope_1.LE.x1; } 
else if (scope_1.Scope.global_z) { return scope_1.Scope.global_z; } 
else { console.error('global_z is not defined') }
*/
// var y = 80;

// function scope_2() {
//     var x = 10;
//     /*
//         scope_2.LE = {x: 10} - создается в момент вызова
//         scope_2.Scope - Global
//     */



//     function innerFunc() {
//         /*
//             innerFunc.LE = {}
//             innerFunc.Scope = scope_2.LE
//         */

//         console.log(x, y); // 10
//     }
// }

// function scope_3() {
//     var x = 100;

//     // scope_2();
// }

// scope_3();
// const key = 'key';


// function ex1(value) {
//     console.log(key, value)
// }


// function ex2(y) {
//     let x = 100;
//     let key = 900;
//     ex1(x);
// }

// ex2(200);



// -------------------------------------------------------


A = new Array(10);
for(let i = 0 ; i < A.length; i++) {
    A[i] = new Array(14);
    for(let j = 0 ; j < A[i].length; j++) {
        A[i][j] = Math.floor(Math.random()*10)
    }
}


let sumList = getSumList(A);
console.log(sumList);


function getSumList(source) {
    let result = [];
    // getSumList.LE = {source: [[..], [..]..], result: []} getSumList.Scope = Global

    for(let i = 0; i < source.length; i++) {
        result.push(getSumArray(source[i]));
    }

    return result;
}

function getSumArray(row) {
    // getRowSum.LE = {row: [....], sum: 0}
    let sum = 0;
    for(let j = 0; j < row.length; j++) {
        sum = sum + row[j];
    }

   return sum;
}

// ---------------------------------------------------------------