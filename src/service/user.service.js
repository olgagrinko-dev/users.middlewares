const fs = require('fs');

const path = './storage/storage.json';

function getAllUser() {
    const array = JSON.parse(fs.readFileSync(path));
    if (!array.length) throw new Error('Array is empty');
    return array;
};

function getUserById(id) {
    const array = JSON.parse(fs.readFileSync(path));
    const filtered = array.filter(elem => elem.id == id);
    if (!filtered.length) throw new Error('There is no such id');
    return filtered;
};

function createUser(name, surname, email, pwd) {
    const array = JSON.parse(fs.readFileSync(path));
    if (array.length) throw new Error('This email already exists');
    array.push({
        id: array.length + 1,
        name,
        surname,
        email,
        pwd
    });
    fs.writeFileSync(path, JSON.stringify(array));
    return array;
};

function updataUser(id, name, surname, email, pwd) {
    const array = JSON.parse(fs.readFileSync(path));
    const filtered = array.filter(elem => elem.id != id);
    if (filtered.length == array.length) throw new Error('There is no such id');
    filtered.push({
        id,
        name,
        surname,
        email,
        pwd
    });
    fs.writeFileSync(path, JSON.stringify(filtered));
    return filtered;
};

function deleteUser(id) {
    const array = JSON.parse(fs.readFileSync(path));
    const filtered = array.filter(elem => elem.id != id);
    if (filtered.length == array.length) throw new Error('There is no such id');
    fs.writeFileSync(path, JSON.stringify(filtered));
    return filtered;
};

module.exports = { getAllUser, getUserById, createUser, updataUser, deleteUser };