const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  chat: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdTime: {}
})

module.exports = mongoose.model('Message', messageSchema)