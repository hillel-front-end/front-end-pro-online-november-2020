
// class Animal {
//     constructor(type, age) {
//         this.type = type;
//         this.age = age;
//     }

//     increaseAge(){
//         this.age++;
//     }
// }

// var an1 = new Animal('Crocodile', 15);
// console.log(an1);

// -------------------------------------------------------

class Parent {
    constructor() {
        this.parentValue = 'Parent - 100';
        this.wheels = 4;
    }

    parentMethod() {}
}


class Child extends Parent {
    constructor() {
        super();
        this.childValue = true;
    }

    childMethod() {}
}

class SmallChild extends Child {
    constructor() {
        super();
        this.smallChildValue = true;
    } 
}

const child1 = new SmallChild();
console.log(child1);