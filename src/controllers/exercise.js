const jwt = require('jsonwebtoken')
const ExerciseService = require('../services/exercise.js')

const addExercise = async (req, res, next) => {
    if (!req.body.user || !req.body.exercises ) 
        return res.status(401).json({error: "Missing user or exercise data"})

    const { user, exercises } = req.body;
    try {
        const createdExercises = await ExerciseService.addExercise({user, exercises})
        res.status(201).json(createdExercises);
    } catch (err) {
        res.status(500).json(err)
    }
}

const getAll = async (req, res, next) => {    
    const { user } = req.body
    try {
        const foundUser = await ExerciseService.getAll({user})
        res.status(200).json(foundUser)        
    } catch (err) {
        res.status(500).json(err)
    }
}

const editExercise = async (req, res, next) => {
    const { user, exercise } = req.body
    try {
        const updatedExercise = await ExerciseService.editExercise({user, exercise})
        res.status(200).json(updatedExercise)
    } catch (err) {
        res.status(500).json(err)
    }    
}


module.exports = {
    addExercise,
    getAll,
    editExercise
}