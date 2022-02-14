import React, {useState} from 'react';
import request from "../../helpers/interceptor";
import {useLocation, useNavigate} from "react-router-dom";
import {getCarsByCarName, getCarsByUsername} from "../../actions/carAction";
import {useDispatch, useSelector} from "react-redux";

const SearchBar = () => {
    const [username, setUsername] = useState("")
    const [carName, setCarName] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const location = useLocation()

    const searchCarByUsername = async () => {
       const data = await getCarsByUsername(username)

        if(data.error) {
            setError(data.error.message)
        } else {
            setError("")
            navigate('/user/' + data.id)
        }
    }

    const searchCarByCarName = async () => {
        const data = await getCarsByCarName(carName)

        if(data.error) {
            setError(data.error.message)
        } else {
            setError("")
            navigate('/car/' + data.id)
        }
    }

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: "center"}}>
            <div>{error}</div>
            {
                location.pathname === '/cars' ?
                    <div>
                        <label  style={{
                            fontSize: "30px"
                        }}>
                            Search By Car name <input placeholder='Enter car name...' value={carName} onChange={(e) => setCarName(e.target.value)} type="text"/>
                        </label>
                        <button className='btn' onClick={searchCarByCarName}>Search</button>
                    </div>
                    :
                    <div>
                        <label style={{
                            fontSize: "30px"
                        }}>
                            Search By Username <input placeholder='Enter username...' value={username} onChange={(e) => setUsername(e.target.value)} type="text"/>
                        </label>
                        <button className='btn' onClick={searchCarByUsername}>Search</button>
                    </div>
            }

        </div>
    );
};

export default SearchBar;
