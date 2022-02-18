const User = require('../models/user.js')

const createUser = async ({ user }) => {
    try {
       const response = await new User(user).save();
       return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser
}
