const jwt = require('jsonwebtoken')
const UserModel = require('../model/user-model')

const authMiddleware = async (req , res , next) => {
    const {token} = req.headers;
    // console.log("from frontend" , token)
    if(!token){
        res.status(400).json({ msg : " no token found"})
    }else{
        try {
            const result = jwt.verify(token , "THISISSECRETKEYFORJWT");
            // console.log(result)
            const user = await UserModel.findOne({_id : result.id , email : result.email}).select({password : 0})
            req.user = user;
            next()
        } catch (error) {
            res.status(400).json({error})
        }
    }

}

module.exports = authMiddleware