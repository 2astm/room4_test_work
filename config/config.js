module.exports = {
    secretKey: process.env.SECRET_KEY || 'superSecret',
    port: process.env.PORT || 3000,
    database: {
        username: process.env.DATABASE_USERNAME || 'postgres',
        password: process.env.DATABASE_PASSWORD || 'postgres',
        database: process.env.DATABASE_NAME || 'postgres',
        host: process.env.DATABASE_HOSTNAME || 'localhost'
    }
}