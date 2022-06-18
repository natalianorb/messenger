const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    type: String,
    required: false,
  },
  chats: {
    type: Array,
    required: false,
  },
  contacts: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model('User', userSchema);
