// DOM - Document Object Model
console.log('Lection 9');



// console.dir(document);


// #1 - Query to Element

// let elem = document.getElementById('example');

// elem.title = 'TEST';

// let elem2 = document.getElementById('image');
// elem2.src = '';

// console.dir(elem2.src);

// let elems = document.getElementsByClassName('block');
// for(let i = 0; i < elems.length; i++) {
//     elems[i].innerHTML += '!';
// }
// console.log(elems);

// -----------------------------------------
// querySelector()

// const block1 = document.querySelector('.block');
// const block1 = document.querySelector('#super-block');
// console.log(block1);
// const blocks = document.querySelectorAll('.block');
// console.log(blocks);



// #2 - Change attributes - class, id, style
// let elem = document.getElementById('example');
// // elem.className = elem.className + ' color-red';

// // classList
// // add
// elem.classList.add('color-red');

// // remove
// elem.classList.remove('active');

// // contains
// console.log(elem.classList.contains('color-red'));

// // toggle
// elem.classList.toggle('v1');
// elem.classList.toggle('v1');


// style


// setInterval(function(){
//     elem.style.top = getR(0, 500) + 'px';
//     elem.style.left = getR(0, 500) + 'px';

// document.body.style.backgroundColor = 'rgb(' + getR(0, 256)+ ', '+getR(0, 256)+', '+getR(0, 256)+')';

// }, 2000);

// console.log(elem.style);



// function getR(min, max) { // -10, 5
//     return Math.floor(Math.random()*(max-min) + min)
// }



// #3 - Change content - innerHTML, innerText


// const superBlock = document.getElementById('super-block');
// superBlock.innerText = superBlock.innerText + '!!!!!!!!<br />!!!!!!'

// console.dir(superBlock);

// const formElement = document.getElementById('name');

// console.dir(formElement.value)