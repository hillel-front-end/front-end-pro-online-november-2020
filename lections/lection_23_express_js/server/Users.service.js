const { users } = require('./Users.data')

const getUsers = (req, res) => {
    let usersData = users;

    if (req.query.type == 'last') {
        usersData = users.slice(-1);
    }

    if (req.query.type == 'first') {
        usersData = users.slice(0, 1);
    }


    res.send(usersData);
}

const getUsersByName = (req, res) => {
    // if (req.params.usersName == 'all') {
    //     getUsersAll(req, res);

    //     return;
    // }
    const filtredNames = users.filter(name => name.toLowerCase() === req.params.usersName.toLowerCase());
    res.send(filtredNames);
}

const getUsersAll = (req, res) => {
    const filtredNames = users.filter(name => name);
    res.send(filtredNames);
}


module.exports = {
    getUsers,
    getUsersByName,
    getUsersAll
};