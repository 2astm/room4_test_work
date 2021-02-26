const express = require('express')
const config = require('./config/config')
const {graphqlHTTP} = require('express-graphql')
const buildSchema = require('./graphql/schemas')
const resolvers = require('./graphql/resolvers')

const app = express()

app.use(graphqlHTTP({
        schema: buildSchema,
        rootValue: resolvers,
        graphiql: true
}))

app.listen(config.port, () => {
    console.log(`Server is running on port: ${config.port}`)
})
