const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    email : {
        type : String
    },
    message : {
        type : String
    },

})

const contactModel = new mongoose.model("Contact" , contactSchema)

module.exports = {
    contactModel
}