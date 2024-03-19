const UserModel = require("../model/user-model")
const { contactModel } = require("../model/contact-model")

const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find().select({ password: 0 })
        if (users) {
            res.status(200).json(users)
        } else {
            res.status(400).json({ msg: "no users found" })
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

const getContact = async (req, res) => {
    try {
        const data = await contactModel.find()
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(400).json({ msg: "no data found" })
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteUsers = async (req, res) => {
    const { user_id } = req.headers;
    // console.log("mili ke nai re", user_id);
    try {
        const data = await UserModel.deleteOne({ _id: user_id });

        if (data.deletedCount > 0) {
            res.status(200).json({ msg: "User deleted successfully" });
        } else {
            res.status(404).json({ msg: "No user found with the provided ID" });
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteContact = async(req,res) => {
    const { contact_id } = req.headers;
    try {
        const data = await contactModel.deleteOne({ _id: contact_id });

        if (data.deletedCount > 0) {
            res.status(200).json({ msg: "message deleted successfully" });
        } else {
            res.status(404).json({ msg: "No data found with the provided ID" });
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    getUsers,
    getContact,
    deleteUsers,
    deleteContact
}