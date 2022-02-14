import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../actions/userAction";
import {Link} from "react-router-dom";

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.usersReducer.users)
    const error = useSelector(state => state.usersReducer.errorMessage)


    useEffect(() => {
        dispatch(getUsers())

    }, [])



    return (
        <div className='content'>
            {
                error ?
                    <h1>{error}</h1>
                    :
                    users.map(user => <Link to={`/user/${user.id}`} key={user.id}>
                        <p>{user.username} - {user.email}</p>
                    </Link> )

            }
        </div>
    );
};

export default Users;
