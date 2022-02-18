const { Schema } = require('mongoose')

const UserSchema = new Schema({
    username: String,
    passwordHash: String
})

module.exports = UserSchema;