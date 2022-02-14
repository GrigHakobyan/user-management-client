import React, {useState} from 'react'
import axios from 'axios'
import request from "../../helpers/interceptor";
import {setErrorMessage} from "../../reducers/authReducer";

const Registration = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")


    const registerUser = async () => {

        const {data} = await request.post(`/registration`, {
            username, email, password
        })

        if(data.statusCode === 400){
            setError(data.message)


        }else{
            localStorage.setItem('token', data.accessToken)
        }
    }


    return (
        <div className="content">
            <label style={{color: "red"}}>{error}</label>
            <label>
               Username: <input value={username} onChange={(e) => setUsername(e.target.value)} type="text"/>
            </label>
            <label>
                Email: <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"/>
            </label>
            <label>
                Password<input value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
            </label>

            <button onClick={registerUser}>Register</button>
        </div>
    );
};

export default Registration;
