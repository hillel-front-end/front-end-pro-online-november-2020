// map

let list = [78, 345.34, 576, 578, 678, 23.234, -23.43];

let result = list.map(function(value, index, source){
    return Math.trunc(value);
});

// console.log(list)
// console.log(result)


// let userList = [
//     { name: 'name 1', age: 27 },
//     { name: 'name 2', age: 35 },
//     { name: 'name 4', age: 22 },
//     { name: 'name 3', age: 56 },
// ]

// let ages = userList.map(function(value){
//     return value.age;
// });

// let stringifyUsers = userList.map(function(value){
//     return value.name + ', age: ' + value.age;
// });

// console.log(stringifyUsers);

// document.write('<ul><li>'+ stringifyUsers.join('</li><li>') +'</li></ul>')



// filter

list = [78, 345.34, 576, 578, 678, 23.234, -23.43];

list[19999] = 100;

// result = list.filter(function(value){
//     return value > 100;
// })

result = list.filter(function(value){
    return value != undefined;
})

// console.log(list);
// console.log(result);


// forEach

list = [78, 345.34, 576, 578, 678, 23.234, -23.43];
list[2000] = 999;

list.forEach(function(value){
    // console.log(value);
    // document.write(value + '<br>');
})

// ---------------------------------------------------------



list = [1, 2, 3, 4, 5];

list[999] = 100;

k = 3;

for(let i = 0; i < list.length; i++){
    // if (list[i] == undefined) {
    //     list[i] = 0;
    // }
    console.log(i, 'value -',list[i]);
    if (list[i] == k){
        break;
    }
}
console.log('--------------------');

for(let key in list){
    console.log(key, 'value -',list[key]);
    if (list[key] == k){
        break;
    }
}

console.log('--------------------');
list.forEach(function(value){
    console.log(value);
    if (value == k){
        return;
    }
})