// console.log(x);
// console.log(y); // undefined

x = 10;
var y = 20;


function f(str) { // f.Scope = Global
    // f.LE = { str: 'Hello', sep: undefined, res: undefined }
    var sep = ','; // f.LE = { str: 'Hello', sep: ',', res: undefined }
    var res = str + sep + ' World!'; // f.LE = { str: 'Hello', sep: ',', res: 'Hello, World!' }
    return res.toLocaleUpperCase();
}

// console.log(f('Hello'));


function f1() {
    f2(); // f.LE = {source: undefined}
    var source = 'SOURCE'; // f.LE = {source: 'SOURCE'}
    f2();

    function f2(){
        console.log(source);
    }
}
f1();


console.log(x, pp); // temporary dead zone
let x = 10;
const pp = 200;