import { FacebookOutlined, GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Button from "../../components/Button";
import { Provider, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setToken, setUserInfo } from "../../features/user";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    const userData = useSelector(
        (state) => state.user
    )

    const dispatch = useDispatch();

    let username = null;
    let password = null;

    useEffect(() => {
        console.log('a',localStorage.getItem('isLoggedIn'))
        if(localStorage.getItem('isLoggedIn') === 'true'){
            navigate('/')
        }
    }, []);

    const onLogin = (username, password)  => {
        setIsLoading(true)
        axios.post(
            `http://localhost:5000/auth/login`, 
            {
                username: username,
                password: password
            }
        ).then(res => {
            dispatch(setToken(res.data.accessToken))
            getUserInfo(username, res.data.accessToken)
            localStorage.setItem('refreshToken', res.data.refreshToken)
        }).catch((err) => {
            setIsLoading(false)
        })
    }

    const getUserInfo = (username, token)  => {
        setIsLoading(true)
        console.log(userData)
        axios.get(
            `http://localhost:5000/users/${username}`,
            {
                headers: {
                    'Authorization': 'bearer ' + token
                }
            }
        ).then(res => {
            setIsLoading(false)
            dispatch(setUserInfo(res.data))
            localStorage.setItem("isLoggedIn", true)
            localStorage.setItem("username", res.data.username)
            navigate('/')
        }).catch((err) => {
            setIsLoading(false)
        })
    }

    const onSubmit = userdata => {
        username = userdata.username;
        password = userdata.password
        onLogin(username, password)
    }

    const showToken = () => {
        console.log(userData)
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="shadow-lg border-solid border-2 rounded-xl w-96">
                <div className="flex flex-col mx-5 mt-5 items-center">
                    <p className="font-bold text-2xl">Login</p>
                    <input 
                        className="shadow appearance-none border h-10 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3" 
                        {...register("username")} 
                        placeholder="Username"
                    />
                    <input 
                        className="shadow appearance-none border h-10 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3" 
                        {...register("password", { required: true })}
                        placeholder="Password" 
                        type="password"
                    />
                    {errors.exampleRequired && <span>This field is required</span>}
                    
                    <Button loading={isLoading} type="submit" className="bg-slate-700 h-10 text-white mt-4 w-full hover:bg-slate-500 shadow-lg">
                        Submit
                    </Button>

                    <Divider/>

                    <Button onClick={showToken} className="bg-slate-700 text-white mb-2 w-full hover:bg-slate-500 shadow-lg" icon={<GoogleOutlined className="text-md"/>}>
                        Google
                    </Button>
                    <Button className="bg-slate-700 text-white mb-2 w-full hover:bg-slate-500 shadow-lg" icon={<FacebookOutlined className="text-md"/>}>
                        Facebook
                    </Button>
                    <Button className="bg-slate-700 text-white mb-4 w-full hover:bg-slate-500 shadow-lg" icon={<GithubOutlined className="text-md"/>}>
                        Github
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Login;
