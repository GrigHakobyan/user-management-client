import React, {useState} from 'react';
import {Navigate, Route, useNavigate} from 'react-router-dom'

import {useDispatch, useSelector} from "react-redux";
import {login} from "../../actions/authAction";
import {setErrorMessage} from "../../reducers/authReducer";


const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const authData = useSelector(state => state.authReducer)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(authData.errorMessage)

    const loginUser = () => {
        dispatch(login(username, password))

        if(authData.errorMessage) {
            setError(authData.errorMessage)
        } else {
            console.log('login')
            setErrorMessage("")
            navigate('/')
        }
    }


    return (
        <div className="content">
            <span style={{color: "red"}} >{error}</span>
            <label>
                Username: <input value={username} onChange={(e) => setUsername(e.target.value)} type="text"/>
            </label>
            <label>
                Password<input value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
            </label>

            <button onClick={loginUser}>Login</button>
        </div>
    );
};

export default Login;
