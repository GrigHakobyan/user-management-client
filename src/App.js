import './App.css';
import Header from "./components/Header";
import Login from "./components/Login";
import Registration from "./components/Registration";
import {Route, Routes, useNavigate, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Users from "./components/Users";
import User from "./components/User";
import {useEffect} from "react";
import { auth } from "./actions/authAction";
import SearchBar from "./components/SearchBar";
import Cars from "./components/Cars";
import Car from "./components/Car";
import UserCars from "./components/UserCars";

function App() {
    const isAuth = useSelector(state => state.authReducer.isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(auth())
    }, [])


      return (
        <div>
          <Header />
            {isAuth && <SearchBar />}

                {
                <Routes>
                    isAuth ?
                        <>
                            <Route path='/login' element={ <Login /> } />
                            <Route path='/registration' element={ <Registration /> } />
                        </>
                        :
                        <>
                            <Route path='/' element={<Users />} />
                            <Route path='/cars' element={<Cars />} />
                            <Route path='/car/:id' element={<Car />} />
                            <Route path='/user/:id' element={<User />} />
                            <Route path='/mycars' element={<UserCars />} />
                            <Route
                                path="*"
                                element={() => <Navigate to="/" />}
                            />
                        </>
                </Routes>
                }
        </div>
  );
}

export default App;
