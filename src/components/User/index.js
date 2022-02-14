import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getUserById} from "../../actions/userAction";

const User = () => {
    const { id } = useParams()

    const [error, setError] = useState("")
    const [user, setUser] = useState({})

    useEffect(() => {
            getUserById(id).then(data => {
                if(data.err && data.error.statusCode) {
                    setError(data.message)
                } else {
                    setUser(data)
                }
            })
    }, [id])


    return (
        <div className='content'>
            {
                !error ?
                    <>
                        <h3>{user.username}</h3>
                        <h5>{user.email}</h5>
                        <br/>

                        {
                            user?.cars?.map(car => <div key={car.id}>
                                <p>{car.name}</p>
                                <p>{car.model}</p>
                                <br/>
                            </div>)
                        }
                    </>
                    :
                    <h1>{error}</h1>
            }
        </div>
    );
};

export default User;
