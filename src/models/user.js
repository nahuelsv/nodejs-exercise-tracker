const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    username: { type: String , unique: true, required: true },
    password: { type: String, required: true}
})

UserSchema.path('username').validate(async (value) => {
    const usernameCount = await mongoose.models.User.countDocuments({username: value });
    return !usernameCount;
  }, 'Email already exists');

module.exports = User = mongoose.model("User", UserSchema)
