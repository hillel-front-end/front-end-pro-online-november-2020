// window.addEventListener('load', () => {

// });



// 1. Получить контект test.txt
// 2. Render it!




// AJAX - Asynchronous Javascript and XML

// GET - получение
// POST - отправка и получение
function request(method, url, success){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == 4) {
            success(xhr.responseText)
        }
    })
    xhr.open(method, url, true);

    // alert(); // -- sync code
    xhr.send(); // 1s
}


request('GET', '/data_example/users.json', response => {
    const parsedData = JSON.parse(response);
    
    document.querySelector('#contacts').innerHTML += `
        <ul>
            ${parsedData.data.concats.map(item => `<li>${item}</li>`).join('')}
        </ul>
    `;
})



function testDataLoaded(data) {
    console.log(data)
}

request('GET', '/test.txt', testDataLoaded);

