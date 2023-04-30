const fs = require('fs');

const path = './storage/storage.json';

function getAllUser() {
    if (!array.length) throw new Error('Массив пуст');
    const array = JSON.parse(fs.readFileSync(path));
    return array;
};

function getUserById(id) {
    const array = JSON.parse(fs.readFileSync(path));
    const filtered = array.filter(elem => elem.id == id);
    if (!filtered.length) throw new Error('Такого id нет');
    return filtered;
};

function createUser(name, surname, email, pwd) {
    const array = JSON.parse(fs.readFileSync(path));
    if (array.length) throw new Error('такой email уже есть');
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
    if (filtered.length == array.length) throw new Error('такого id нет');
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
    if (filtered.length == array.length) throw new Error('Такого id нет');
    fs.writeFileSync(path, JSON.stringify(filtered));
    return filtered;
};

module.exports = { getAllUser, getUserById, createUser, updataUser, deleteUser };