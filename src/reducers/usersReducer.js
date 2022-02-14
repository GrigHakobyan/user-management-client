const SET_USERS = 'SET_USERS'
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'

const initState = {
    users: [],
    errorMessage: ""
}


export const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS: return {...state, users: action.payload}
        case SET_ERROR_MESSAGE: return {...state, errorMessage: action.payload}

        default: return state
    }
}

export const setUsers = (payload) => ({type: SET_USERS, payload})
export const setErrorMessage = (payload) => ({type: SET_ERROR_MESSAGE, payload})
