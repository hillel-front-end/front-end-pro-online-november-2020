// console.log('Practice');

let obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    z: 60,
    f: 90,
    foo2: {
        k: 23,
        p: 13,
        u: 56
    },
};


/* Result:

    obj = {
        x: 20,
        y: 20,
        z: 30,
        k: 23,
        p: 13
    }

*/

innerPriority = true;

for(const key in obj){
    if (typeof obj[key] == 'object') {
        for(const innerKey in obj[key]){
            if(innerPriority == false && obj.hasOwnProperty(innerKey)) {
                continue;
            }

            obj[innerKey] = obj[key][innerKey];
        }
        delete obj[key];
    }
}

console.log(obj);
