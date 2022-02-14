import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCars} from "../../actions/carAction";
import {Link} from "react-router-dom";

const Cars = () => {
    const dispatch = useDispatch()
    const cars = useSelector(state => state.carReducer.cars)

    useEffect(() => {
        dispatch(getCars())
    }, [])

    return (
        <div className='content'>
            {
                cars.map(car => <Link to={`/car/${car.id}`} key={car.id}>
                    <div>
                        <span>{car.name}</span>
                        <span>{car.model}</span>
                    </div>
                    <br/>
                </Link>)
            }
        </div>
    );
};

export default Cars;
