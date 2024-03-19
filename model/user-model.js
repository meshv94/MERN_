const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: false
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    isAdmin: {
        type: Boolean,
        default : false,
        unique: false
    }
});

const UserModel = new mongoose.model("User" , userSchema);

module.exports = UserModel