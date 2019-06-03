var { makeExecutableSchema } = require('graphql-tools');

const typeDefs = require("./typeDef"); 
const resolvers = require("./resolver");

export default makeExecutableSchema({
    typeDefs,
    resolvers
})
