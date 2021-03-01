const FileService = require('./FileService');

const CREATE_SUCCESS = {status: 'Success', statusText: 'File created'};
const DELETE_SUCCESS = {status: 'Success', statusText: 'File deleted'};
const UPDATE_SUCCESS = {status: 'Success', statusText: 'File changed'};
const CRUD_FAIL = {status: 'Fail', statusText: ''};

// const getFsErrorHandler = function (req, res) {
//     return function(errorText) {
//         const errorResp = CRUD_FAIL;
        
//         errorResp.statusText = errorText;
//         res.send(errorResp);
//     };
// }; 

const getFsErrorHandler = (req, res) => errorText => {
    const errorResp = CRUD_FAIL;
    
    errorResp.statusText = errorText;
    res.send(errorResp);
};

module.exports.userCreate = (req, res) => {
    const dataJson = JSON.stringify(req.body, null, '\t');

    FileService.userCreateFile(dataJson)
        .then(() => res.send(CREATE_SUCCESS))
        .catch(getFsErrorHandler(req, res));
}

module.exports.userData = (req, res) => {
    FileService.getUserFile()
        .then(fileData => res.send(JSON.parse(fileData)))
        .catch(getFsErrorHandler(req, res));
}

module.exports.userDataDelete = (req, res) => {
    FileService.deleteUserFile()
        .then(() => res.send(DELETE_SUCCESS))
        .catch(getFsErrorHandler(req, res));
}

module.exports.userDataUpdate = (req, res) => {
    const updateData = req.body;
    if (updateData.constructor !== Object) {
        getFsErrorHandler(req, res)('Body is not object');
    }
    FileService.updateUserFile(updateData)
        .then(() => res.send(UPDATE_SUCCESS))
        .catch(getFsErrorHandler(req, res));
}