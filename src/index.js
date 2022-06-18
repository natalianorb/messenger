const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema/schema');
const dbConnect = require('./database');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

async function start() {
  try {
    await dbConnect();
    app.listen(PORT, () => {
      console.log(`Server has been started at ${PORT}`);
    });
  } catch (e) {
    console.error(e);
  }
}

start();
