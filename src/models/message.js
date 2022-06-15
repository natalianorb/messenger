const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
  authorID: {
    type: ObjectId,
    required: true
  },
  chatID: {
    type: ObjectId,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdTime: {}
})

module.exports = mongoose.model('Message', messageSchema)