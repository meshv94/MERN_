const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserModel = require("../model/user-model")

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const result = await UserModel.findOne({ email })
        // console.log(result._id)
        if (!result) {
            res.status(400).json({ msg: "user not found" })
        } else {
            const isValidUser = await bcrypt.compare(password, result.password)
            // console.log(isValidUser);

            // jwt token
            const token = jwt.sign({ id: result._id, email: result.email }, "THISISSECRETKEYFORJWT");
            // console.log(token)

            if (isValidUser) {
                res.status(200).json({ token: token })
            } else {
                res.status(400).json({ msg: "Invalid email or password" })
            }
        }
    } catch (error) {
        res.status(400).send(error)
    }
}

const register = async (req, res) => {
    const { username, email, phone, password } = req.body
    try {
        const userExist = await UserModel.findOne({ email })
        if (userExist) {
            res.status(400).json({ msg: "already exist" })
        } else {
            const hash_password = await bcrypt.hash(password, 12)
            const result = await UserModel.create({ username, email, phone, password: hash_password })
            // jwt token
            const token = jwt.sign({ id: result._id, email: result.email }, "THISISSECRETKEYFORJWT");
            res.status(200).json({ token: token })
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = { login, register }