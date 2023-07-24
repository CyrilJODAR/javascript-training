const express = require('express')
const router = express.Router()
const coworkingController = require('../controllers/coworkingsController')
const authController = require('../controllers/authController')

router
    .route('/')
    .get(coworkingController.GetCoworkings)
    .post(authController.protect, coworkingController.CreateCoworkings)
router
    .route('/:id')
    .get(authController.protect, coworkingController.GetCoworkingById)
    .put(authController.protect, authController.restrict('Edit'), coworkingController.UpdateCoworkingById)
    .delete(authController.protect, authController.restrict('Admin'), coworkingController.DeleteCoworkingById)

    module.exports = router