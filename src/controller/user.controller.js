const express = require('express');
const { getAllUsers, getUserById, createUserById, upUserById, deleteUserById } = require('../service/user.service.js')

const router = express.Router();

router.get('/', (request, response) => {
    try {
        const data = getAllUsers()
        response.send(data);
    } catch (error) {
        response.send(error.message);
    }
});

router.get('/:id', (request, response) => {
    try {
        const { id } = request.params;
        const data = getUserById(id);
        response.send(data);
    } catch (error) {
        response.send(error.message);
    }
});

router.post('/', (request, response) => {
    try {
        const { name, surname, email, pwd } = request.body;
        const data = createUserById(name, surname, email, pwd);
        response.send(data);
    } catch (error) {
        response.send(error.message);
    }
});

router.put('/:id', (request, response) => {
    try {
        const { id } = request.params;
        const { name, surname, email, pwd } = request.body;
        const data = upUserById(id, name, surname, email, pwd);
        response.send(data);
    } catch (error) {
        response.send(error.message);
    }
});

router.delete('/:id', (request, response) => {
    try {
        const { id } = request.params;
        const data = deleteUserById(id);
        response.send(data);
    } catch (error) {
        response.send(error.message);
    }
});

module.exports = { router };