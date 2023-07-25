const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const commentsController = require('../controllers/commentsController')

router
    .route('/')
    .get(commentsController.GetAllComments)
    .post(authController.protect, commentsController.CreateComments)
router
    .route('/:id')
    .get(authController.protect, commentsController.GetCommentsById)
    .put(authController.protect, commentsController.UpdateCommentsById)
    .delete(authController.protect, commentsController.DeleteCommentsById)
module.exports = router