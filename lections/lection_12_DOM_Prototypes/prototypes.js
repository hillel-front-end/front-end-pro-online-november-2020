// let bool = new Boolean(false);
// let num = new Number(78);
// let str = new String('hello');

// console.log(bool);
// console.log(num);
// console.log(str);

// ----------------------------

// let obj = {x: 10}
// console.log(obj);


// ----------------------------

const parent = {
    x: 10,
    y: 20,
    f() {console.log('f working')}
};

const child = Object.create(parent);


// const child2 = Object.create(parent);
// const child3 = Object.create(parent);
// console.log(child, child2, child3);


child.value = 'Hello text';
child.z = 99;

console.log(child);

for (const key in child) {
    if (!child.hasOwnProperty(key)) {
        continue;
    }
    
    console.log(key);
}

// console.log(Object.getOwnPropertyNames(child));
// console.log(Object.keys(child));