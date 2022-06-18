const mongoose = require('mongoose');

const { Schema } = mongoose;

const messageSchema = new Schema({
  authorID: {
    type: 'objectId',
    required: true,
  },
  chatID: {
    type: 'objectId',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdTime: {},
});

module.exports = mongoose.model('Message', messageSchema);
