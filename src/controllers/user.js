
const UserService = require('../services/user.js');

const get = (req, res, next) => {
    res.send("Get works")
}

const createUser = async (req, res, next) => {
    try {
       const createdUser =  await UserService.createUser(req.body)
       res.status(201).json(createdUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error});
    }
 }

module.exports = {
    get, 
    createUser
}