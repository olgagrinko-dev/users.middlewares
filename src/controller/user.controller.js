const express = require('express');
const { getAllUser, getUserById, createUser, updataUser, deleteUser } = require('../service/user.service');
const { isValidUserData, isValidUserId } = require('../helper/validation');
const { buildResponse } = require('../helper/buildResponse');

const router = express.Router();

router.get('/', (request, response) => {
    try {
        const data = getAllUser();
        buildResponse(response, data, 200);
    } catch (error) {
        buildResponse(response, error.message, 400);
    }
});

router.get('/:id', isValidUserId, (request, response) => {
    try {
        const { id } = request.params;
        const data = getUserById(id);
        buildResponse(response, data, 200);
    } catch (error) {
        buildResponse(response, error.message, 400);
    }
});

router.post('/', isValidUserData, (request, response) => {
    try {
        const { name, surname, email, pwd } = request.body;
        const data = createUser(name, surname, email, pwd);
        buildResponse(response, data, 200);
    } catch (error) {
        buildResponse(response, error.message, 400);
    }
});

router.put('/:id', isValidUserData, isValidUserId, (request, response) => {
    try {
        const { id } = request.params;
        const { name, surname, email, pwd } = request.body;
        const data = updataUser(id, name, surname, email, pwd);
        buildResponse(response, data, 200);
    } catch (error) {
        buildResponse(response, error.message, 400);
    }
});

router.delete('/:id', isValidUserId, (request, response) => {
    try {
        const { id } = request.params;
        const data = deleteUser(id);
        buildResponse(response, data, 200);
    } catch (error) {
        buildResponse(response, error.message, 400);
    }
});

module.exports = router;