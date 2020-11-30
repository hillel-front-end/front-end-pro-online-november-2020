// Global scope

// x - global variable
// x = 10;


// // Local scope

// // local variable
// function f() {
//     y = 20; // y - global
//     var z = 60; // z - local

//     console.log(z);
// }

// f();

// -------------------


// global
// var p = 100; // global var


// -----------------------------

// var x1 = 100;

// function f() {
//     var x2 = 'hello';

//     f1();

//     function f1() {
//         var x3 = 'world';
        
//         console.log(x1); // 100
//         console.log(x2); // 'hello'
//         console.log(x3); // 'world'
//     }

//     // console.log(x1); // 100
//     // console.log(x2); // 'hello'
//     // console.log(x3); // Reference error
// }

// f();



// -----------------------------


var x1 = 100;

function f(value) { // var value = 'Super puper value';
    var x2 = 'hello';
    var x1 = 'overrided x1 value test';
    
    // console.log('before', x2);
    f1();
    console.log('after', x2);

    function f1() {
        var x3 = 'world';

        x1 = 80;
        x2 = 'test';
        console.log('VALUE value:', value);

        // change global variable
        window.x1 = 999999;
    }
}

// f('Super puper value');
// f1();
// console.log(x1);


// ------------------------------------------------------------



let a = 10;


function pow() {} // local scope

{} // local scope for let and const


x = 90;

if (x > 10) {
    let y = 800;
    console.log(x, y);
}

// console.log(x, y);


const value = 900;
// value = 9;

console.log(value);