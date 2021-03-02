const models = require('../models')
module.exports = error => {
    console.log(error.originalError)
    if (error.originalError && error.originalError.code === 'ERR_GRAPHQL_CONSTRAINT_VALIDATION') {
        const originalError = error.originalError
        const message = `Wrong ${originalError.context[0].arg} for ${error.originalError.fieldName}, expected ${originalError.context[0].arg}: ${originalError.context[0].value}`
        return {message: message, statusCode: 'ERR_WRONG_DATA_PROVIDED'}
    }

    if (error.message === 'LOGIN_UNSUCCESSFUL')
        return {message: 'Wrong login or password', statusCode: 'UNAUTHORIZED'}

    if (error.message === 'UNAUTHORIZED' || error.message === 'jwt expired')
        return {message: 'Token expired or wrong', statusCode: 'UNAUTHORIZED'}

    if (error.originalError && error.originalError.name === 'SequelizeUniqueConstraintError'
        && error.originalError.errors[0].path === 'login')
        return {message: 'Login is in use, try another', statusCode: 'NOT_CREATED'}

    if (error.message === 'PRODUCT_CANNOT_FIND')
        return {message: 'Product can\'t be finded', statusCode: 'OBJECT_NOT_FOUND'}
    if (error.message)
        return {message: error.message, statusCode:'UNKNOWN_ERROR' }

    return {message: 'Server can\'t process this request', statusCode: 'UNKNOWN_ERROR'}
}