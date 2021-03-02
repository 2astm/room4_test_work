const errors = {
    'LOGIN_UNSUCCESSFUL': {message: 'Wrong login or password', statusCode: 'UNAUTHORIZED'},
    'UNAUTHORIZED': {message: 'Token expired or wrong', statusCode: 'UNAUTHORIZED'},
    'PRODUCT_CANNOT_FIND': {message: 'Product can\'t be found', statusCode: 'OBJECT_NOT_FOUND'},
    'USER_NOT_FOUND': {messsage: 'User can\'t be found', statusCode: 'OBJECT_NOT_FOUND'},
    'CATEGORY_NOT_FOUND': {messsage: 'Category can\'t be found', statusCode: 'OBJECT_NOT_FOUND'}
}

module.exports = error => {
    console.log(error.originalError)
    if (error.originalError && error.originalError.code === 'ERR_GRAPHQL_CONSTRAINT_VALIDATION') {
        const originalError = error.originalError
        const message = `Wrong ${originalError.context[0].arg} for ${error.originalError.fieldName}, expected ${originalError.context[0].arg}: ${originalError.context[0].value}`
        return {message: message, statusCode: 'ERR_WRONG_DATA_PROVIDED'}
    }

    if (error.originalError && error.originalError.name === 'SequelizeUniqueConstraintError'
        && error.originalError.errors[0].path === 'login')
        return {message: 'Login is in use, try another', statusCode: 'NOT_CREATED'}

    if (error.originalError && error.originalError.name === 'SequelizeForeignKeyConstraintError'
        && error.originalError.table === 'products')
        return {message: 'Category id can\t be found', statusCode: 'NOT_CREATED'}


    if (error.message in errors)
        return errors[error.message]

    return {message: 'Server can\'t process this request', statusCode: 'UNKNOWN_ERROR'}
}