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
    .get(coworkingController.GetCoworkingById)
    .put(authController.protect, coworkingController.UpdateCoworkingById)
    .delete(authController.protect, coworkingController.DeleteCoworkingById)

    module.exports = router