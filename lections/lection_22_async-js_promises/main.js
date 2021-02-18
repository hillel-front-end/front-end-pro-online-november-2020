

function getDataMock(url) {
    return new Promise(function(resolve, reject){
        const time = Math.random()*5000
        setTimeout(() => {
            resolve(`${url} - ${Math.trunc(time)}ms`)
        }, time);
        // const xhr = new XMLHttpRequest();
        // xhr.open('GET', url);
    
        // xhr.addEventListener('readystatechange', () => {
        //     if (xhr.readyState == 4) {
        //         if (xhr.status !== 200) {
        //             reject(xhr.statusText);
        //         }
        //         resolve(xhr.responseText);
        //     }
        // })
    
        // xhr.send();
    });
}


function onResolved(data) {
    console.log(data);
}

function onRejected(data) {
    console.warn(data);
}

// const asyncOpr = getDataMock('/user/123');

// asyncOpr.then(onResolved, onRejected);

// getDataMock('/user/123')
//     .then(data => {
//         console.log('Then #1' - data );
//         // const historyChat = getDataMock(`/123/chat/history/${data.id}`);
//         // historyChat.then(() => {
//         //     console.log('historyChat RESOVLED');
//         // });
//         return getDataMock(`/123/chat/history/`);
//     })
//     .then(value => {
//         console.log('Then #2', value);

//         return getDataMock(`/asfdd/`);
//     })
//     .then(number => {
//         console.log('Then #3', number);

//         return number;
//     });

// Promise.all, Promise.allSettled


const async1 = getDataMock('/promise-1');
const async2 = getDataMock('/promise-2');
const async3 = getDataMock('/promise-3');

Promise
    .all([async1, async2, async3])
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.warn(err);
    });


Promise
    .allSettled([async1, async2, Promise.reject('ERROR'), async3])
    .then(data => {
        data.forEach(element => {
            if (element.status == 'fulfilled') {
                // render(element.value)
            }
        });
        console.log(data);
    });