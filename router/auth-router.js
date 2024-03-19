const express = require("express");
const router = express.Router();

const { login , register } = require("../controller/auth-controller")
const user = require("../controller/user-controller")
const authMiddleware = require("../middleware/auth-middleware")
const {registerSchema , loginSchema} = require('../validator/auth-validator')
const validate = require('../middleware/validate-middleware')

router.post("/register" , validate(registerSchema) ,register)
router.post("/login" , validate(loginSchema) ,login)
router.post("/auth" , authMiddleware , user)

module.exports = router