const express = require('express')
const router = express.Router()
const ExerciseController = require('../controllers/exercise')
const auth = require('../middlewares/auth')

router.post("/exercise", auth, ExerciseController.addExercise)
router.get("/exercise", auth, ExerciseController.getAll)
router.put("/exercise", auth, ExerciseController.editExercise)

module.exports = router