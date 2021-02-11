const { Alert } = require("bootstrap");

function request(options = {}){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == 4 && options.success) {
            options.success(xhr.responseText)
        }
    })
    xhr.open(options.method, options.url, true);

    // alert(); // -- sync code
    xhr.send(JSON.stringify(options.body)); // 1s
}


// request('GET', '/data_example/users.json');



document.querySelector('.get_list').addEventListener('click', loadUsers);
document.querySelector('.get_list2').addEventListener('click', loadFile);




function loadUsers() {
    request({
        method: 'GET',
        url: '/data_example/users.json',
        success: data => {
            console.log(JSON.parse(data));
        }
    });
}

function loadFile() {
    request({
        method: 'GET',
        url: '/test.txt',
        success: data => {
            console.log(data);
        }
    });
}

// --------------------------------------------------------------

window.onload = () => {
    const findBtn = document.querySelector('#find_brand');

    findBtn.addEventListener('click', () => {
        const searchBrandQuery = 'test';

        const body = { 
            query: searchBrandQuery,
            idList: [
                'id3',
                'id4',
                'id5'
            ]
         };

        request({
            method: 'POST',
            body,
            url: '/find/brand'
        });
    })


    /* Form submit event - prevent redirect to link */
    // document.querySelector('#send_action').addEventListener('click', event => {
    //     event.preventDefault();
        
    //     request({
    //         method: 'POST',
    //         body: {x: 10},
    //         url: '/find/brand'
    //     });
    // })
}


// for(let i = 0; i <= 999999; i++){

// }

// --------------------------------------------------------------


