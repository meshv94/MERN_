const express = require("express");
const router = express.Router();
const {addContactDetails} = require("../controller/contact_controller")

router.post("/" , addContactDetails)

module.exports = router