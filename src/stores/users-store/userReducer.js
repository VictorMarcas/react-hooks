import {ADD_USER, DELETE_USER, EDITED_USER, GET_USERS, UPDATE_USER} from "../../actions";

const reducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload
            }
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, payload]
            }
        case DELETE_USER:
            const users = state.users.filter(user => user.id !== payload)
            return {
                ...state,
                users: users
            }
        case EDITED_USER:
            return {
                ...state,
                editedUser: payload
            }
        case UPDATE_USER:
            const updateUsers = state.users.map(user => user.id === payload.id ? {...user, ...payload} : user)
            return {
                ...state,
                editedUser: null,
                users: updateUsers
            }
        default:
            return state
    }
}

export default reducer;