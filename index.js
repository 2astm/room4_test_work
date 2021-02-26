const express = require('express')
const helmet = require('helmet')
const config = require('./config/config')
const db = require('./models/index')
const {graphqlHTTP} = require('express-graphql')
const buildSchema = require('./graphql/schemas')
const resolvers = require('./graphql/resolvers')

const app = express()


app.use('/graphql/', graphqlHTTP({
        schema: buildSchema,
        rootValue: resolvers,
        graphiql: true
}))

app.disable('x-powered-by')
db.sequelize.sync().then((value => {
    console.log(value)
    app.listen(config.port, () => {
        console.log(`Server is running on port: ${config.port}`)
    })
}))

