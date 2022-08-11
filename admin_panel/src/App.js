import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import About from "./scenes/About";
import Home from "./scenes/Home";
import MyAccount from "./scenes/MyAccount";
import ProtectedRoute from "./components/ProtectedRoute";
import UnAuthorized from "./scenes/Unauthorized";
import 'antd/dist/antd.css';
import './index.css';
import News from "./scenes/News";
import Users from "./scenes/Users";
import Overview from "./scenes/Overview";
import { Provider, useDispatch, useSelector } from "react-redux";
import { changeAppWindowSize } from "./features/appWindowSize";
import Login from "./scenes/Login";
import axios from "axios";
import { setToken } from "./features/user";

const App = () => {
    const appWindowSize = useSelector(
        (state) => state.appWindowSize.value
    )
    const userData = useSelector(
        (state) => state.user
    )

    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false)
    // const navigate = useNavigate();

    let username = null;

    useEffect(() => {
        updateDimensions()
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    })

    useEffect(() => {
        console.log('useee')
        if(localStorage.getItem('isLoggedIn') === 'true' && username === null){
            generateNewAccessToken(localStorage.getItem('refreshToken'))
        }
    }, [])

    const generateNewAccessToken = async (refreshToken)  => {
        // setIsLoading(true)
        axios.post(
            `http://localhost:5000/auth/token`, 
            {
                "refreshToken": refreshToken
            }
        ).then(res => {
            console.log(res.data.accessToken)
            dispatch(setToken(res.data.accessToken))
            getUserInfo(localStorage.getItem('username'), res.data.accessToken)
        }).catch((err) => {
            setIsLoading(false)
        })
    }

    const getUserInfo = (username, token)  => {
        console.log('ssss')
        // setIsLoading(true)
        axios.get(
            `http://localhost:5000/users/${username}`,
            {
                headers: {
                    'Authorization': 'bearer ' + token
                }
            }
        ).then(res => {
            // setIsLoading(false)
            dispatch(setUserInfo(res.data))
            username = res.data.username
            localStorage.setItem("isLoggedIn", true)
            // navigate('/')
        }).catch((err) => {
            setIsLoading(false)
        })
    }

    const updateDimensions = () => {
        const width = window.innerWidth;
        if (width > 850) {
            dispatch(changeAppWindowSize("full"))
        } else if (width > 550) {
            dispatch(changeAppWindowSize("medium"))
        } else {
            dispatch(changeAppWindowSize("small"))
        }
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element={<Login/>}/>
                <Route path="/" element={<ProtectedRoute component={!isLoading && <Home/>}/>}>
                    <Route index element={<ProtectedRoute component={<Overview />} />}/>
                    <Route path="news" element={<ProtectedRoute component={<News />} />}/>
                    <Route path="users" element={<ProtectedRoute component={<Users />} />}/>
                </Route>
                <Route path="/my-account" element={<MyAccount/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
