import request from "../helpers/interceptor";
import {setErrorMessage, setUsers} from "../reducers/usersReducer";

export const getUsers = () => {
    return async dispatch => {
        const {data} = await request.get('/users', {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })

        if(data.error && data.error.statusCode){
            dispatch(setErrorMessage(data.error.message))
        } else {
            dispatch(setUsers(data))
        }
    }
}

export const getUserById = async (id) => {
    const { data } = await request.get(`/user/${id}`,{
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })

    return data

}
