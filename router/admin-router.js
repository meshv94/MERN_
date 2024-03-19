const express = require("express");
const router = express.Router();
const {getUsers , getContact , deleteUsers, deleteContact} = require("../controller/admin-controller")
const authMiddleware = require("../middleware/auth-middleware")

router.get("/users" , authMiddleware , getUsers)
router.get("/contacts" , authMiddleware , getContact)
router.delete("/deleteUser" , deleteUsers)
router.delete("/deletecontact" , deleteContact)

module.exports = router