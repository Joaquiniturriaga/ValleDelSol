const express = require('express')
const { updateUser } = require('../service/user.service')

const {
    getProfile,
    updateUser,
    getAllUsers

} = require('../controller/user.controler');

const {
    validateToken,
    authorizeRoles,
    validateUserData
} = require ('../middlewares')

const router = express.Router();

//get user
router.get('/profile', validateToken, getProfile);

router.put('/update', validateToken, validateUserData, updateUser);
router.get('users', validateToken, authorizeRoles, getAllUsers);

module.exports = { router}