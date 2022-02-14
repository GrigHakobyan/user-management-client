const SET_CARS = 'SET_CARS'
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'


const initState = {
    cars: [],
    errorMessage: ""
}


export const carReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CARS: return {...state, cars: action.payload}
        case SET_ERROR_MESSAGE: return {...state, errorMessage: action.payload}

        default: return state
    }
}


export const setCars = (payload) => ({type: SET_CARS, payload})
export const setErrorMessage = (payload) => ({type: SET_CARS, payload})



