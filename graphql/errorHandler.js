module.exports = error => {
    console.log(error)
    if (error.originalError && error.originalError.code === 'ERR_GRAPHQL_CONSTRAINT_VALIDATION') {
        const originalError = error.originalError
        const message = `Wrong ${originalError.context[0].arg} for ${error.originalError.fieldName}, expected ${originalError.context[0].arg}: ${originalError.context[0].value}`
        return {message: message, statusCode: 'ERR_WRONG_DATA_PROVIDED'}
    }

    if (error.message === 'LOGIN_UNSUCCESSFUL')
        return {message: 'Wrong login or password', statusCode: 'UNAUTHORIZED'}


    if (error.message === 'UNAUTHORIZED')
        return {message: 'Token expired or wrong', statusCode: 'UNAUTHORIZED'}

    if (error.message === 'ERR_CREATE_USER_DUPLICATED_LOGIN')
        return {message: 'Login is in use, try another', statusCode: 'NOT_CREATED'}

    if (error.message === 'ERR_CREATE_USER')
        return {message: 'User can\'t be created', statusCode: 'NOT_CREATED'}
    return error
}