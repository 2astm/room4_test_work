const debugUser = {_id: 4, name: 'user1', login: '123', password: ''}
module.exports = {
    login: ({login, password}) => {
        return "debugUser"
    },
    createUser: ({name, login, password}) => {
        return debugUser
    },
    updateUser: ({name, login, password}) => {
        return debugUser
    },
    deleteUser: () => {
        return false
    }
}