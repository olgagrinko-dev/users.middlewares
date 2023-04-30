const express = require('express');
const { getAllUser, getUserById, createUser, updataUser, deleteUser } = require('../service/user.service');

const router = express.Router();

router.get('/', (request, response) => {
    try {
        const data = getAllUser();
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
        const data = createUser(name, surname, email, pwd);
        response.send(data);
    } catch (error) {
        response.send(error.message);
    }
});

router.put('/:id', (request, response) => {
    try {
        const { id } = request.params;
        const { name, surname, email, pwd } = request.body;
        const data = updataUser(id, name, surname, email, pwd);
        response.send(data);
    } catch (error) {
        response.send(error.message);
    }
});


router.delete('/:id', (request, response) => {
    try {
        const { id } = request.params;
        const data = deleteUser(id);
        response.send(data);
    } catch (error) {
        response.send(error.message);
    }
});

module.exports = router;