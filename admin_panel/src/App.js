import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => {
    const appWindowSize = useSelector(
        (state) => state.appWindowSize.value
    )
    const dispatch = useDispatch();

    useEffect(() => {
        updateDimensions()
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    })

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
                <Route path="/" element={<Home />}>
                    <Route index element={<Overview />} />
                    <Route path="news" element={<News />} />
                    <Route path="users" element={<Users />} />
                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/my-account" element={<ProtectedRoute component={<MyAccount />} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
