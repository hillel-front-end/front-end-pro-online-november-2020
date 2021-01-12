console.log('Lection 13');


let array = [
    [-6, 7, -8, 9],
    [-6, 7, -8, 9],
    [3, 7, -8, 9],
    [6, 7, -8, 9],
];

// j - номер столбца
// for(j = 0; j < array[0].length; j++) {
//     // i - номер рядка
//     sum = 0;
//     for(i = 0; i < array.length; i++) {
//         sum = sum + array[i][j];
//     } 
//     // номер столцба? - j
//     // console.log(j);
//     if (sum < 0){
//         for(key = 0; key < array.length; key++) {
//             // array[key][j] = '_';
//             array[key].splice(j, 1);
//         }
//     }
// }

// console.log(array)

// --------------------------------------------


// const parent = {
//     x: 10,
//     run() {
//         console.log('run');
//     }
// };

// const child = Object.create(parent); // {}, но child.__proto__ -> parent
// child.y = 200;



// child.run();

// console.log(child);

// ------------------------------------------

// const list = [7, 8, 9];

// very bad
// list.push = function(){
//     console.log('my super push')
// }
// list.push(2000);

// console.log(list);


// ------------------------------------------
// Object.prototype.FOOBAR = 'TEST';
// Function.__proto__.WHAT = 'IS IT';

// function getSumArray(source) {
//     return source.reduce((prev, curr) => prev + curr);
// }

// const res = getSumArray([1, 9, 8]);

// console.log(res);
// console.dir(getSumArray)


// list = new Array();
// obj = new Object();
// reg = new RegExp();
// str = new String();

// ------------------------------------------


// функции-конструкторы
function Person(a, age, height) {
    this.name = a;
    this.height = height;

    if(age >= 0 && age <= 150) {
        this.age = age;
    } else {
        console.warn(`For user ${a} age is incorrect - ${age}`);
    }
}

Person.prototype.x = 10;
Person.prototype.run = function (){
    console.log(this.name + ' is running')
};


// Экземпляр
// const child = new Person('Vasya', 28, 180);
// const child2 = new Person('Katya', -33, 175);
/* new  
    1) Создает пустой объект
    2) Вызывает функцию Person() с перенаправленным this на объект №1
    3) Возвращает объект №1

*/
// console.log(child)
// console.log(child2)

// child.run();
// child2.run();

let counter = 0;
function AnimatedPlayer(settings) {
    this.uID = counter++;
    this.x = settings.x;
    this.y = settings.y;
    this.size = {
        width: settings.width,
        heigth: settings.height,
    };
    this.imageSource = settings.imageSource;
    this.targetContainer = settings.targetContainer;

    this.targetContainer.innerHTML += `
        <img 
            class="player-${this.uID}" 
            src="${this.imageSource}"
            style="left:${this.x}px; top:${this.y}px; width: ${this.size.width}px; height: ${this.size.heigth}px"
        />
    `;
}

AnimatedPlayer.prototype.step = 10;
AnimatedPlayer.prototype.go = function(direction){
    switch(direction){
        case 'left':
            this.x = this.x - this.step;
            break;
        case 'right':
            this.x = this.x + this.step;
            break;
        case 'top':
            this.y = this.y - this.step;
            break;
        case 'bottom':
            this.y = this.y + this.step;
            break;
    }
    const img = this.targetContainer.querySelector(`img.player-${this.uID}`);
    this.rotate(direction, img);
    img.style.left = this.x + 'px';
    img.style.top = this.y + 'px';
}
AnimatedPlayer.prototype.rotate = function(direction, imageSource) {
    switch(direction){
        case 'left':
            imageSource.style.transform = 'rotateY(180deg)';
            break;
        case 'top':
            imageSource.style.transform = 'rotateZ(-90deg)';
            break;
        case 'bottom':
            imageSource.style.transform = 'rotateZ(90deg)';
            break;
        case 'right':
        default:
            imageSource.style.transform = '';
    }
       
}

window.addEventListener('load', () => {
    player = new AnimatedPlayer({
        x: 50,
        y: 120,
        width: 130,
        height: 130,
        imageSource: 'https://art.pixilart.com/71da892e378e940.gif',
        targetContainer: document.body
    });

    player2 = new AnimatedPlayer({
        x: 80,
        y: 180,
        width: 100,
        height: 100,
        imageSource: 'https://art.pixilart.com/71da892e378e940.gif',
        targetContainer: document.body
    });


    document.addEventListener('keydown', event => {
        if (event.keyCode == 37) {
            player.go('left')
        }

        if (event.keyCode == 39) {
            player.go('right')
        }

        if (event.keyCode == 38) {
            player.go('top')
        }

        if (event.keyCode == 40) {
            player.go('bottom')
        }

        // Player 2
        if (event.keyCode == 65) {
            player2.go('left')
        }

        if (event.keyCode == 68) {
            player2.go('right')
        }

        if (event.keyCode == 87) {
            player2.go('top')
        }

        if (event.keyCode == 83) {
            player2.go('bottom')
        }
    })
})
