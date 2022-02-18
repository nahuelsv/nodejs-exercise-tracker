const express = require('express')
const router = express.Router()
const ExerciseController = require('../controllers/exercise')
const auth = require('../middlewares/auth')

router.post("/exercise", auth, ExerciseController.addExercise)

module.exports = router