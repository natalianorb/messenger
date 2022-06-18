const mongoose = require('mongoose');

async function dbConnect() {
  await mongoose
    .connect('mongodb://127.0.0.1:27017/users', {
      useNewUrlParser: true,
    })
    .catch((error) => handleError(error));
}
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

module.exports = dbConnect;
