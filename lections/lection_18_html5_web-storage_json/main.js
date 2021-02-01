// Web storage
// 1. Local Storage
// 2. Session Storage

// console.log(window);
// if (!window.localStorage) {
//     console.log('Storage is not defined');
// }


// console.log(localStorage);


// localStorage.setItem('SUPER_KEY', 200);
// const key = localStorage.getItem('SUPER_KEY');


// localStorage.my_value = 'example text description';
// console.log(localStorage.SUPER_KEY);


window.addEventListener('load', () => {
    const textContainer = document.querySelector('#clicks');
    const textSessionContainer = document.querySelector('#clicks_session');
    const buttons = document.querySelectorAll('.increase_button')
    const buttonTexts = document.querySelectorAll('.increase_text')

    let btnClicksModel = {};

    if (localStorage.buttonClickTracker) {
        btnClicksModel = JSON.parse(localStorage.buttonClickTracker);
    }

    renderClickMeCounter();
    renderIncreaseData();

    /*
        btn_1: 2,
        btn_2: 6,
        btn_3: 0

        buttonClickTracker: { btn_1: 2, btn_2: 6, btn_3: 0 } -> to JSON
    */


    function renderClickMeCounter() {
        const storageValue = localStorage.click_me_key;
        const storageSessionValue = sessionStorage.click_me_key;
        textContainer.innerHTML = storageValue === undefined ? 0 : storageValue;
        textSessionContainer.innerHTML = storageSessionValue === undefined ? 0 : storageSessionValue;
    }

    function renderIncreaseData() {
        buttonTexts.forEach(span => {
            let content = 0;
            
            if (btnClicksModel[span.dataset.id]) {
                content = btnClicksModel[span.dataset.id];
            }
            
            span.innerHTML = content;
        })
    }

    function onBtnClick(event) {
        const storageValue = localStorage.click_me_key; // possible undefined
        const storageSessionValue = sessionStorage.click_me_key; // possible undefined
        const step = Number(event.target.dataset.step) || 1;

        // if (storageValue === undefined) {
        //     localStorage.click_me_key = 1;
        // } else {
        //     localStorage.click_me_key = Number(storageValue) + 1;
        // }

        if (btnClicksModel[event.target.dataset.id]) {
            btnClicksModel[event.target.dataset.id] = btnClicksModel[event.target.dataset.id] + step;
        } else {
            btnClicksModel[event.target.dataset.id] = step;
        }
        localStorage.buttonClickTracker = JSON.stringify(btnClicksModel);


        localStorage.click_me_key = storageValue === undefined ? step : Number(storageValue) + step;
        sessionStorage.click_me_key = storageSessionValue === undefined ? 1 : Number(storageSessionValue) + 1;
        renderClickMeCounter();
        renderIncreaseData();
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', onBtnClick); 
    });
})


// --------------------------------------------------------------
// JSON - JavaScript Object Notation


/*

Server
| Text
| 123 -> "123"
| "text" -> "text"
| true\false -> "true"/"false"
| [1, 2, 3] -> "1,2,3"
| { x: 10, y: 'hello', address: { city: 'London' } } -> http://lin.com?x=10&y=hello - GET parm string
| { x: 10, y: 'hello', address: { city: 'London' } } -> '{ "x": 10, "y": "hello", "address": { "city": "London" }, "list": [ 1, 2, 3 ] }'
Client

*/

// const originalData = 1200;
// const originalData = false;
// const originalData = 0.3453456756;
// const originalData = [1, 7, 8, true, false, 'hello world', null, undefined];
// const originalData = { x: 10, y: false, list: [1, 2, 3], address: { city: 'Test' } };

// const jsonData = JSON.stringify(originalData);

// const parsedData = JSON.parse(jsonData);

// console.log(jsonData, parsedData);



// --------------------------