const express = require('express')
const router = express.Router()
const coworkingController = require('../controllers/coworkingsController')

router
    .route('/')
    .get(coworkingController.GetCoworkings)
    .post(coworkingController.CreateCoworkings)
router
    .route('/:id')
    .get(coworkingController.GetCoworkingById)
    .put(coworkingController.UpdateCoworkingById)
    .delete(coworkingController.DeleteCoworkingById)

    module.exports = router