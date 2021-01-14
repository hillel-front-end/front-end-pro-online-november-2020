console.log('Lection 14');



// прототипное ООП
function Animal (type, age){
    this.type = type;
    this.age = age;

    // this.increaseAge = inc;


    // Incapsulation
    const specialID = Math.random();
    // --------------------

    this.getSpecialID = function() {
        return specialID
    }

    this.increaseAge = function(){}
}

Animal.prototype.increaseAge = function(){
    console.dir(Animal.prototype.increaseAge);
    this.age++;
};


var an1 = new Animal('Crocodile', 15);
var an2 = new Animal('Giraffe', 15);


// console.log(an1, an2);


// --------------------------------------------


function Parent() {
    this.wheels = 4;
}
Parent.prototype.Drive = function(){}

function Child() {}

Child.prototype = Object.create(Parent.prototype);
// Child.prototype = new Parent();


Child.prototype.childMethod = function(){}


const child1 = new Child();
console.log(child1);

// ---------------------------------------------

var par = {x: 10};
var chil = Object.create(par);

// -------------------------------------------------------