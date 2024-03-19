const {contactModel} = require("../model/contact-model")

const addContactDetails = async (req , res) => {
    const { email , message} = req.body;
    console.log(req.body)
    try {
        const result = await contactModel.create({ email , message})
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    addContactDetails
}