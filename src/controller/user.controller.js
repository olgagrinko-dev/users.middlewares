const express = require('express');
const { getAllUsers, getUserById, createUserById, upUserById, deleteUserById } = require('../service/user.service.js')

const router = express.Router();

router.get('/', (request, response) => {
    const data = getAllUsers()
    response.send(data);
});

router.get('/:id', (request, response) => {
    const { id } = request.params;
    const data = getUserById(id);
    response.send(data);
});

router.post('/', (request, response) => {
    const { name, surname, email, pwd } = request.body;
    const data = createUserById(name, surname, email, pwd);
    response.send(data);
});

router.put('/:id', (request, response) => {
    const { id } = request.params;
    const { name, surname, email, pwd } = request.body;
    const data = upUserById(id, name, surname, email, pwd);
    response.send(data);
});

router.delete('/:id', (request, response) => {
    const { id } = request.params;
    const data = deleteUserById(id);
    response.send(data);
});

module.exports = { router };