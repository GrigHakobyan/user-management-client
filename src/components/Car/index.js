import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getCarById} from "../../actions/carAction";

const Car = () => {

    const { id } = useParams()

    const [car, setCar] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        getCarById(id).then(data => {
            if(data.statusCode) {
                setError(data.message)
            } else {
                setCar(data)
            }
        })
    }, [id])

    return (
        <div className='content'>
            {
                !error ?
                    <>
                        <h3>{car.name}</h3>
                        <h5>{car.model}</h5>
                    </>
                    :
                    <h1>{error}</h1>
            }
        </div>
    );
};

export default Car;
