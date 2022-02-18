const User = require('../models/user.js')

const createUser = async ({ user }) => {
    try {
       const response = await new User(user).save();
       return response;
    } catch (err) {        
        throw err.errors || err;
    }
}

const findUser = async ({ user }) => {
    try {
        const response = await User.find( {username: user.username, password: user.password} )
        return response;
    } catch (err) {
        throw err.errors || err;
    }
}

const getUsers = async () => {
    try {
        const response = await User.find()
        return response;
    } catch (err) {
        throw err.errors || err;
    }
}

module.exports = {
    createUser,
    findUser,
    getUsers
}
