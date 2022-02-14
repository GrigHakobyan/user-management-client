const SET_USER = 'SET_USER'
const SET_IS_AUTH = 'SET_TOKEN'
const SET_ERROR = 'SET_ERROR'

const initState = {
    user: {},
    isAuth: false,
    errorMessage: ""
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER: return {...state, user: action.payload}
        case SET_IS_AUTH: return {...state, isAuth: action.payload}
        case SET_ERROR: return {...state, errorMessage: action.payload}

        default: return state
    }
}


export const setUser = (payload) => ({type: SET_USER, payload})
export const setIsAuth = (payload) => ({type: SET_IS_AUTH, payload})
export const setErrorMessage = (payload) => ({type: SET_ERROR, payload})

