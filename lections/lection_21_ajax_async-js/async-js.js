



// console.log(1);

// const t1 = performance.now();
// setTimeout(() => {
//     console.log('diff - ', performance.now() - t1);
//     onSuccess();
// }, 1000);

// var data = 'DATA';

// function onSuccess() {
//     console.log('onSuccess');
//     console.log(data);
// }

// callback hell


// Promise

// const asyncStep = new Promise((resolve, reject) => {
//     const time = Math.random()*3000;
//     setTimeout(() => {
//         if (time > 1500) {
//             resolve(time);
//         }
//         reject('reject text');
//     }, time);
// });


// asyncStep
//     .then(data => {
//         console.log('Resolved', data);
//     }, errorText => {
//         console.log('Rejected', errorText);
//     })
//     // .then(onLoadData)
//     // .then(onRenderData)
//     // .then(onSendTelemtry)
//     // .catch(onError);




// function onError() {
//     console.log('Reject');
// }


// --------------------------------------------

function fetchData(options = {}) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState == 4) {
                resolve(JSON.parse(xhr.responseText));
            }
        })
        xhr.open(options.method, options.url, true);
    
        // alert(); // -- sync code
        xhr.send(JSON.stringify(options.body)); // 1s
    });
}

// fetchData({
//     method: 'GET',
//     url: '/data_example/users.json',
// }).then(data => {
//     console.log(data);
// })


document.querySelector('.get_list').addEventListener('click', () => {
    fetchData({
        method: 'GET',
        url: '/data_example/users.json',
    })
    .then(users => {
        console.log(users.data.concats);

        return users.data.concats.filter(contact => !!contact);
    })
    .then(concats => {
        console.log(concats);
    });
});

// ----------------------------------------------------------------