const express = require('express')
const router = express.Router()
const ExerciseController = require('../controllers/exercise')
const auth = require('../middlewares/auth')

router.route("/exercise")
    .post(auth, ExerciseController.addExercise)
    .get(auth, ExerciseController.getAll)
    .put( auth, ExerciseController.editExercise)

module.exports = router