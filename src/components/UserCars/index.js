import React, {useEffect, useState} from 'react';
import {addCar, changeCarData, deleteCarById, getCarsByUsername} from "../../actions/carAction";
import {useDispatch, useSelector} from "react-redux";
import Modal from "../Modal";
import {useNavigate} from "react-router-dom";

const UserCars = () => {
    const user = useSelector(state => state.authReducer.user)
    const cars = useSelector(state => state.carReducer.cars)

    const dispatch = useDispatch()

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [model, setModel] = useState("")
    const [error, setError] = useState("")

    const [modal, setModal] = useState(false)

    useEffect(() => {
        if(user.username) {
            dispatch(getCarsByUsername(user.username))
        }
    }, [user])

    const deleteCar = async (e) => {
        const id = e.target.dataset.id
        await deleteCarById(id)
        dispatch(getCarsByUsername(user.username))
    }

    const addNewCar = async () => {
        const data = await addCar(name,model)

        if(data.error) {
            setError(data.error.message)
        } else {
            setName("")
            setModel("")
            setError("")

            dispatch(getCarsByUsername(user.username))

            closeModal()
        }
    }

    const closeModal = () => {
        setModal(false)
    }

    const showModal = () => {
        setModal(true)
    }

    const oncChangeCarModal = (e) => {
        const id = e.target.dataset.id

        const car = cars.find(car => car.id === +id)

        setId(car.id)
        setModel(car.model)
        setName(car.name)

        showModal()
    }


    const changeCar = async () => {
        const data = await changeCarData(id,name, model)

        if(data.error) {
            setError(data.error.message)
        } else {
            setId("")
            setName("")
            setModel("")
            setError("")

            dispatch(getCarsByUsername(user.username))

            closeModal()
        }
    }

    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px'
            }}>
                <button className='btn' onClick={showModal}>Add new car</button>
            </div>
            <br/>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {
                   cars.map(car => <div
                        style={
                            {
                                display: 'flex',
                                border: '1px solid',
                                padding: '10px',
                                width: '500px',
                                marginBottom: "20px"
                            }
                        }
                        key={car.id}>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            marginRight: '15px',
                            paddingRight: '15px',
                            borderRight: '1px solid',
                            width: "100%",

                        }}>
                            <p style={{marginRight: "10px"}}>{car.name}</p>
                            <p>{car.model}</p>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', width: "100%"}}>
                            <button
                                data-id={car.id}
                                onClick={deleteCar}
                                className='btn'
                                style={{marginRight: "10px"}}
                            >DELETE</button>
                            <button
                                data-id={car.id}
                                onClick={oncChangeCarModal}
                                className='btn'
                            >CHANGE</button>
                        </div>
                        <br/>
                    </div>)
                }

                <Modal closeModal={closeModal} error={error} show={modal} header="Add new car">
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text"/>
                    <input value={model} onChange={(e) => setModel(e.target.value)} type="text"/>
                    <br/>
                    <button className='btn' onClick={addNewCar}>SAVE</button>
                </Modal>

                <Modal closeModal={closeModal} error={error} show={modal} header="Change car">
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text"/>
                    <input value={model} onChange={(e) => setModel(e.target.value)} type="text"/>
                    <br/>
                    <button className='btn' onClick={changeCar}>SAVE</button>
                </Modal>

            </div>
        </div>
    );
};

export default UserCars;
