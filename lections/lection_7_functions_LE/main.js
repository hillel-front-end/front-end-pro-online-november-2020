// Global -> object window
// var x = 10;
// z = 10;

// function f1(A) {
//     // f1.Scope = window
//     let x = 700;

//     f2();
//     function f2() {
//         // f2.Scope = f1.LE

//         console.log(x)
//         console.log(window.x)
//         console.log(isFinite(10/0))
//     }
// }

// f1();





function generator(source) {
    let value = 'value';

    function f() {
        // f.Scope = generator.LE
        console.log('inner F', value, source); // Замыкание
    }

    return f;
}




let result = generator([1,2,3,4,5,6]);

result();
result();
result();
result();
result();