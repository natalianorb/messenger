const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: { type: String, required: true },
  chats: {
    type: Array,
    required: true
  },
  contacts: {
    type: Array,
    required: true
  }
})

module.exports = mongoose.model('User', userSchema)