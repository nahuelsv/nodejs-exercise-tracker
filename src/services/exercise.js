const res = require('express/lib/response')
const { ObjectId } = require('mongodb')
const exercise = require('../models/exercise.js')
const User = require('../models/user.js')

const addExercise = async ({user, exercises}) => {
    try {
        const response = await User.findOneAndUpdate( 
            {
                username: user.username
            }, 
            {
                $push: { exercises: exercises} 
            },
            {
                new: true
            } 
        )
        return response
    } catch (err) {
        throw err.errors || err
    }
}

const getAll = async ({user}) => {
    try {
        const response = await User.findOne( {username: user.username} ).select({username: 1, exercises: 1})
        return response
    } catch (err) {
        throw err.errors | err
    }
}

const editExercise = async ({user, exercise}) => {
    try {
        const response = await User.findOneAndUpdate( 
            { 
                "username": user.username, 
                "exercise": {
                    '$elemMatch': {
                        "_id": ObjectId(exercise.id)
                    }
                }
            },
            { 
                $set: { 
                    "exercises.$[outer].description": exercise.description
                }
            },
            {
                arrayFilters: [
                    {
                        "outer._id": ObjectId(exercise.id)
                    }
                ],
                new: true
            }
        )
        console.log(response)
        return response
    } catch (err) {
        throw err.errors || err
    }
}

module.exports = {
    addExercise,
    getAll,
    editExercise
}