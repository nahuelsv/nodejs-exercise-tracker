const mongoose = require('mongoose')
const { Schema } = mongoose

module.exports = new Schema({
    title: { type: String, required: true },
    description: String,
    duration: Number,
    date: {
        type: Date,
        default: Date.now
    }
})

