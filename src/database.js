const mongoose = require('mongoose');

async function dbConnect () {
  await mongoose.connect(
    'mongodb://localhost:27017/users',
    {
      useNewUrlParser: true,
    }
  )
}
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

module.exports = dbConnect