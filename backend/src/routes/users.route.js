
const express = require("express")
const { Joi, validate, ValidationError } = require('express-validation')
const { create, findAll, findOne, updateOne, deleteOne } = require("../controllers/users.controller")

const router = express.Router()

const createUserValidation = {
    body: Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        role: Joi.string(),
        phoneNumber: Joi.number(),
        email: Joi.string().email().required(),
        password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
    }),
}


router.post('/api/users', create)
router.get('/api/users', findAll)
router.get('/api/users/:id', findOne)
router.put('/api/users/:id', updateOne)
router.delete('/api/users/:id', deleteOne)

module.exports = router