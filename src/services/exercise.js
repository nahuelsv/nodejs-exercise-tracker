const User = require('../models/user.js')

const addExercise = async ({user, exercises}) => {
    try {
        const response = await User.findOneAndUpdate( {username: user.username}, {$push: { exercises: exercises} } )
        return response
    } catch (err) {
        throw err.errors || err
    }
}

module.exports = {
    addExercise
}