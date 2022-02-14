import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../actions/authAction";

const Header = () => {
    const isAuth = useSelector(state => state.authReducer.isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    return (
        <header>
            {
                isAuth ?
                    <>
                        <Link to='/'>Users</Link>
                        <Link to='/cars'>Cars</Link>
                        <Link to='/mycars'>My cars</Link>
                        <button onClick={userLogout}>Logout</button>
                    </>
                    :
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/registration'>Registration</Link>
                    </>

            }

        </header>
    );
};

export default Header;
