const express = require('express')
const router = express.Router()
const usersRouter = require('./users.js');
const exerciseRouter = require('./exercise.js');

router.use(usersRouter)
router.use(exerciseRouter)

module.exports = router;