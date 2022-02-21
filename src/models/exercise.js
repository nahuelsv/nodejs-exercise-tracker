const mongoose = require('mongoose')
const { Schema } = mongoose

const ExerciseSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    duration: Number,
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = ExerciseSchema

module.exports.model = Exercise = mongoose.model("Exercise", ExerciseSchema)
