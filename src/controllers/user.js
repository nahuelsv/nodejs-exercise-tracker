
const jwt = require('jsonwebtoken')
const UserService = require('../services/user.js');

const getUsers = async (req, res, next) => {
    try {
        const foundUsers =  await UserService.getUsers()
        res.status(201).json(foundUsers)
    } catch (err) {
        res.status(500).json({error: err});
    }
}

const createUser = async (req, res, next) => {
    try {
       const createdUser =  await UserService.createUser(req.body)
       res.status(201).json(createdUser)
    } catch (err) {
        res.status(500).json({error: err});
    }
}

const loginUser = async (req, res, next) => {
    try {
        const foundUser =  await UserService.findUser(req.body)
        if (foundUser && foundUser.length === 0) 
            return res.status(403).json( {message: "invalid credentials"} )
        res.status(201).json({token: jwt.sign( { username: foundUser[0].username} , process.env.JWT_SECRET)})
    } catch (err) {
        res.status(500).json({error: err});
    }
}

module.exports = {
    getUsers, 
    createUser,
    loginUser
}