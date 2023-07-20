const express = require('express')
const router = express.Router()
const userController = require('../controllers/usersController')

router
    .route('/')
    .get(userController.GetUsers)
    .post(userController.CreateUser)
router
    .route('/:id')
    .get(userController.GetUserById)
    .put(userController.UpdateUserById)
    .delete(userController.DeleteUserById)

    module.exports = router