console.log('Lection_6');

f1 = undefined;


// f();
// f1(); // error

// function declaration
function f() {
    console.log('f called');
}

// function expression
f1 = function() {
    console.log('f1 called');
}

// f1()
// f();




// Arguments

// function sum(a, b, c) {
//     console.log(a, b, c);

//     a = a*10;
//     b = b + 'test'
    
//     // мутация
//     c.push(100)
// }



// sum();
// sum(10);

// x = 10;
// y ='hello';
// z = [1, 8, 9];

// sum(x, y, z);


// console.log(x); // 10
// console.log(y); // 'hello'
// console.log(z); // [1, 8, 9, 100]



// -----------------------

function renderArray(source, separator) {
    if (!Array.isArray(source)) {
        return; // exit from function
    }
    if (separator == undefined) {
        separator = ','
    }

    var str = '';
    for(var i = 0; i < source.length; i++) {
        if (i == source.length - 1) {
            // document.write(source[i]);
            str = str + source[i];
            continue;
        }
        // document.write(source[i], separator);
        str = str + source[i] + separator;
    }
    document.write(str+'<br />');
}


A = [1, 7, 8, 9];
B = [21, 57, 4, 23];

renderArray(A, '_');
renderArray(B);

// document.write(A.join('_')) 


// -----------------------


// 5! = 1 * 2 * 3 * 4 * 5;

// n! = 1 * 2 * ... * (n-1) * n;


function fact(n) {
    var res = 1;

    for(let i = 1; i <= n; i++) {
        res = res * i;
    }
    console.log(i); // n + 1
    console.log(i); // if let i, then -> Reference error
    return res;
}

fact(10);
fact(0);
fact(4);


result = fact(5) + fact(7);
console.log(result);


// -----------------------