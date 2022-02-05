const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema")
const { Query } = require("./resolvers/Query")
const { StarWarsCharacter } = require("./resolvers/StarWarsCharacter")

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        StarWarsCharacter
    }
});

server.listen().then(({url}) => {

    console.log("Server is ready at " + url);
})