
const user = (req,res) => {
    const user = req.user;
    if(!user){
        res.status(400).json({ "msg" : " no user found"})
    }else{
        try {
            res.status(200).json(user)
        } catch (error) {
            res.status(400).json({error})
        }
    }
    // console.log(user)
}

module.exports = user;