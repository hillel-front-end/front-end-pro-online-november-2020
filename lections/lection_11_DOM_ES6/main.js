console.log('Lection 11');


window.onload = function() {    
    const block = document.querySelector('.block');
    block.classList.add('active');

    // block.style.backgroundColor = 'green';
    // console.log(block.style.cssText);
    // block.style.cssText += 'font-weight: bold;';



    // const clickMe = document.querySelector('#click_me');


    // Add event handler - DOM Level 0
    // clickMe.onclick = function(){
    //     console.log('Click me')
    // }

    // clickMe.onmouseover = function(){ // hover
    //     console.log('on mouseover')
    // }

    // // Remove event handler - DOM Level 0
    //  clickMe.onclick = null;



    // -------------------

    // DOM Level 3
    const clickMe = document.querySelector('#click_me');
    const counterElem = document.querySelector('#click_me_counter');
    let counter = 0;
    const color = 'blue';

    function onClickMeButton(){
        counter++;
        console.log('Click me');
        // counterElem.innerHTML = '<strong style="color: '+color+'">'+ counter + (counter == 1 ? ' time' : ' times') +'</strong>';

        const copy = counter == 1 ? 'time' : 'times';
        counterElem.innerHTML = `
            <strong style="color: ${getRandomColor()};">
                ${counter} ${copy}
            </strong>
        `;
    }

    // clickMe.addEventListener('click', onClickMeButton);


    function onClickMeExample(event) {
        // console.dir(this); // clickMe
        // console.log(event);
    }


    clickMe.addEventListener('click', onClickMeExample);
}

function getRandomColor() {
    const colors = [
        getRand(),
        getRand(),
        getRand()
    ]
    return `rgb(${colors})`;
}

function getRand() {
    return Math.floor(Math.random()*256);
}


// -----------------------------
// ES6 Strings


var data = 145;
data = [1, 2, 3]

// var str = "Let's  go!";
var str = 'Hel"lo' + data;




const newStrings = `Let's go ${data}`;
// data -> String(data) -> '145'

// console.log(str);
// console.log(newStrings);

// console.log(str.split(''));
// console.log(str.substr(2, 4));