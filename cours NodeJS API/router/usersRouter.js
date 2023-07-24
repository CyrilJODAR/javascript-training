const express = require('express')
const router = express.Router()
const userController = require('../controllers/usersController')
const authController = require('../controllers/authController')
router
    .route('/')
    .get(userController.GetUsers)
router
    .route('/signup')
    .post(authController.signUp)
router
    .route('/login')
    .post(authController.logIn)
router
    .route('/:id')
    .get(authController.protect, userController.GetUserById)
    .put(authController.protect, userController.UpdateUserById)
    .delete(authController.protect, userController.DeleteUserById)
    module.exports = router