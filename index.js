const express = require('express')
const helmet = require('helmet')
const config = require('./config/config')
const db = require('./models/index')
const {graphqlHTTP} = require('express-graphql')
const makeExecutableSchema = require('./graphql/schemas')
const resolvers = require('./graphql/resolvers')
const errorHandler = require('./graphql/errorHandler')
const authMiddleware = require('./middlewares/authMiddleware')
const app = express()

app.use(authMiddleware)

app.use('/graphql/', graphqlHTTP({
    schema: makeExecutableSchema,
    rootValue: resolvers,
    graphiql: true,
    customFormatErrorFn: errorHandler
}))

app.disable('x-powered-by')
db.sequelize.sync().then((value => {
    app.listen(config.port, () => {
        console.log(`Server is running on port: ${config.port}`)
    })
}))

