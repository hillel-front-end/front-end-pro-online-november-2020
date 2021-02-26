const fs = require('fs');

const userDataPath = __dirname + '/data/User.json'; // лютый хардкод


const fileCreation = dataJson => {
    return new Promise((resolve, reject) => {
        fs.writeFile(userDataPath, dataJson, (err) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            resolve();
        });
    });
};


module.exports.userCreateFile = dataJson => {
    return new Promise((resolve, reject) => {
        // проверка наличия файла
        fs.access(userDataPath, fs.constants.F_OK, (err) => {
            if (err) {
                fileCreation(dataJson)
                    .then(() => resolve())
                    .catch(() => reject('File creation failed'));
            } else {
                reject(`File exist`);
            }
        });
    });
};

module.exports.getUserFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(userDataPath, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

module.exports.deleteUserFile = () => {
    return new Promise((resolve, reject) => {
        fs.unlink(userDataPath, (err) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
}

module.exports.updateUserFile = incomeData => {
    return this.getUserFile()
        .then(userData => {
            // const userDataParsed = JSON.parse(userData);
            // const mergedData = {...userDataParsed, ...incomeData};
            // const mergedData = Object.assign({}, userDataParsed, incomeData);
            return {...JSON.parse(userData), ...incomeData};
        })
        .then(newUserData => {
            return fileCreation(JSON.stringify(newUserData, null, '\t'));
        })
}