import { FacebookOutlined, GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Button from "../../components/Button";
import { login } from "../../utils/apis";

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let username = null;
    let password = null;

    const {isLoading, error, data, refetch } = useQuery('login', () => login(username, password), {
        enabled : false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: false,
    })
    const onSubmit = userdata => {
        username = userdata.username;
        password = userdata.password
        refetch()
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="shadow-lg border-solid border-2 rounded-xl w-72">
                <div className="flex flex-col mx-5 mt-5 items-center">
                    <p className="font-bold text-2xl">Login</p>
                    <input 
                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3" 
                        {...register("username")} 
                        placeholder="Username"
                    />
                    <input 
                        className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3" 
                        {...register("password", { required: true })}
                        placeholder="Password" 
                        type="password"
                    />
                    {errors.exampleRequired && <span>This field is required</span>}
                    
                    <Button loading={isLoading} type="submit" className="bg-slate-700 text-white mt-4 w-full hover:bg-slate-500 shadow-lg">
                        Submit
                    </Button>

                    <Divider/>

                    <Button type="submit" className="bg-slate-700 text-white mb-2 w-full hover:bg-slate-500 shadow-lg" icon={<GoogleOutlined className="text-md"/>}>
                        Google
                    </Button>
                    <Button type="submit" className="bg-slate-700 text-white mb-2 w-full hover:bg-slate-500 shadow-lg" icon={<FacebookOutlined className="text-md"/>}>
                        Facebook
                    </Button>
                    <Button type="submit" className="bg-slate-700 text-white mb-4 w-full hover:bg-slate-500 shadow-lg" icon={<GithubOutlined className="text-md"/>}>
                        Github
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Login;
