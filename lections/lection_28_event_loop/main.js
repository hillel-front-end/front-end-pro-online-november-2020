console.log('lection 28');


const x = 10;
const y = 20;

function sum(a, b) {
	return a + b + getRandom(5);
}

function getRandom(z) {
	var x = 10;

	return Math.random()*x*z;
}

// sum(x, y);
//............... Call stack is empty
// getRandom(12);

// console.log(x, y);

// -----------------------------------

// window.onload = () => {
// 	document.body.addEventListener('click', () => {
// 		console.log('body clicked');
// 	})


// 	setInterval(() => {
// 		document.body.click();
// 	}, 1000)
// }

// console.log('1');

// function timerHandler(){
// 	console.log('2');	
// }

// setTimeout(timerHandler, 1000);
// console.log('3');


// for(var i = 0; i <= 5000; i++) {
//     sum();
// }

// function sum() {
//     return 10;
// }

// alert();

// -----------------------------------

// Callback types:
// 	Task - Macrotask
// 	Render
// 
// 	Microtaska




// window.onload = () => {
// 	// setInterval(() => {
// 	// 	console.log('Changed');
// 	// 	document.body.style.color = Math.floor(Math.random()*10) > 5 ?'red' : 'blue';
// 	// }, 1000)
// 	setTimeout(() => {
// 		document.body.style.fontSize = '100px';
// 	}, 1000);
// 	setTimeout(() => {
// 		document.body.style.fontSize = '200px';
// 	}, 1000);
// }


// function action(i) {
// 	for(let i = 0; i <= 1000000000; i++) {}
// 	console.log('Action', i);
// }

// window.onload = () => {
// 	document.body.addEventListener('click', () => {
// 		console.log('body clicked');
// 	})
// }

// for(let i = 1; i <= 5; i++) {
// 	setTimeout(() => {
// 		action(i);
// 	}, 0);
// 	// action(i);
// }
// total execution time - 10*5ms + for execution

// -----------------------------

// window.onload = () => {
// 	document.body.addEventListener('click', () => {
// 		console.log('body clicked');
// 	})
// }

// Promise.resolve()
// 	.then(() => { 
// 		console.log(1); 
// 		for(let i = 0; i <= 1000000000; i++) {}
// 	})
// 	.then(() => { 
// 		console.log(2);
// 		// setTimeout(() => {
// 		// 	for(let i = 0; i <= 1000000000; i++) {}
// 		// 	console.log(22);
// 		// }, 0);
// 	})
// 	.then(() => { 
// 		console.log(3);
// 	})
// 	.then(() => { 
// 		console.log(4);
// 		for(let i = 0; i <= 1000000000; i++) {}
// 	});


// -----------------------------
function getRand(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}
window.onload = () => {
	const pars = document.querySelectorAll('p');
	
	window.addEventListener('scroll', () => {
		// const pars = document.querySelectorAll('p');
		// for(let i = 0; i <= 1000000000; i++) {}
	
		pars.forEach(p => {
			p.style.color = 'rgb('+getRand(0, 255)+', '+getRand(0, 255)+', '+getRand(0, 255)+')';
	
		});
	})
}