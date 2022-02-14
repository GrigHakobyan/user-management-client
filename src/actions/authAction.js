import axios from "axios";
import {setErrorMessage, setIsAuth, setUser} from "../reducers/authReducer";
import request from "../helpers/interceptor";
import {setCars} from "../reducers/carReducer";
import {setUsers} from "../reducers/usersReducer";


export const registration = (username, email, password) => {
    return async dispatch => {

        const {data} = await request.post(`/registration`, {
            username, email, password
        })

        if(data.statusCode === 400){
            dispatch(setErrorMessage(data.message))

        }else{
            dispatch(setErrorMessage(""))
            localStorage.setItem('token', data.accessToken)
            dispatch(setIsAuth(true))
        }

    }
}


export const login = (username, password) => {
    return async dispatch => {
        const {data} = await request.post(`http://localhost:5000/login`, {
            username, password
        })


        if(data.statusCode === 400){
            dispatch(setErrorMessage(data.message))

        }else{
            dispatch(setErrorMessage(data.message))
            localStorage.setItem('token', data.accessToken)
            dispatch(setIsAuth(true))
        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const { data } = await request.get('/auth', {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                }
            })

            if(!data.error || !data.error.statusCode || !data.error.message) {
                dispatch(setErrorMessage(''))
                dispatch(setIsAuth(true))
                dispatch(setUser(data))

                localStorage.setItem('token', data.accessToken)
            } else {
                dispatch(setIsAuth(false))
                dispatch(setErrorMessage(data.error.message))
                dispatch(setUser({}))

                if(localStorage.getItem('token')) {
                    localStorage.removeItem('token')
                }
            }

        } catch (e) {
            console.log(e)
        }
    }
}


export const logout = () => {
    return dispatch => {
        dispatch(setIsAuth(false))
        dispatch(setCars([]))
        dispatch(setUsers([]))
        localStorage.removeItem('token')
    }
}
