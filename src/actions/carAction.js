import request from "../helpers/interceptor";
import {setErrorMessage, setCars} from "../reducers/carReducer";


export const getCarsByUsername = async (username) => {
        const { data } = await request.get(`/car/user/${username}`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })

    return data

}

export const getCars = () => {
    return async dispatch => {
        const {data} = await request.get('/cars', {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })

        if(data.statusCode){
            dispatch(setErrorMessage(data.message))
        } else {
            dispatch(setCars(data))
        }
    }
}

export const getCarById = async (id) => {
    const { data } = await request.get(`/car/${id}`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })

    return data
}

export const deleteCarById = async (id) => {
    await request.delete(`/car/${id}`, {
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
}


export const addCar = async (name, model) => {
    const {data} = await request.post(`/car/create`, {
        car:{
            name, model
        }
    } ,{
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })

    return data
}


export const changeCarData = async (carId,name, model) => {
    const {data} = await request.put('/car', {
        car: {
            name, model
        },
        carId: carId
    },{
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })

    return data
}

export const getCarsByCarName = async (carName) => {
    const { data } = await request.post('/car',
        {
            "carname": carName
        },
        {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })

    return data
}
