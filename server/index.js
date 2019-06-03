const express = require('express');
const graphqlHTTP = require('express-graphql');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
const bodyParser = require("body-parser");
const schema = require('./schema');


const connectMongo = require('../database/connection');

const init = async () => {

    const mongo = await connectMongo();

const app = express();

app.use('/graphql',bodyParser.json(), graphqlExpress({
    context:{mongo},
    schema
}));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
  }));

app.listen(4000);

console.log(`🚀 Server ready at http://localhost:4000/graphql`)
};

init();