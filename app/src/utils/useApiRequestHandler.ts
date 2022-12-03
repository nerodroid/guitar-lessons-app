import { setAccessToken } from './../redux/actions';
import axios from "axios";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useApiRequestHandler() {

    const dispatch = useDispatch();
    const newsData = useSelector((state: RootStateOrAny) => state.newsReducer);
    
    const apiRequest = (requestConfig:any) => new Promise((resolve, reject) => {
        axios.defaults.withCredentials = false;
        const headers = {
            "Accept": "application/json",
            "Content-Type": "*/*",
            "Authorization": "Bearer " + newsData.accessToken
        }
        axios({
            method: requestConfig.method,
            url: requestConfig.url,
            data: requestConfig.data,
            headers: headers
        }).then((response) => {
            if (response.status === 200) {
                return resolve(response)
            }
        }).catch(async (error) => {
            if(error.response.status === 401) {
                const refreshToken = await AsyncStorage.getItem('@refresh_token')
                const newAccessToken = await refreshTokenCall(refreshToken, requestConfig)
                const headers = {
                    "Accept": "application/json",
                    "Content-Type": "*/*",
                    "Authorization": "Bearer " + newAccessToken
                }
                axios({
                    method: requestConfig.method,
                    url: requestConfig.url,
                    data: requestConfig.data,
                    headers: headers
                }).then((response) => {
                    if (response.status === 200) {
                        return resolve(response)
                    }
                }).catch(async (error) => {
                    return reject(error)
                })
            } else {
                return reject(error)
            }
        })
    })

    const refreshTokenCall = async(refreshToken:string|null, requestConfig:any):Promise<string> => {
        return axios
            .post("http://10.0.2.2:5001/auth/token", {
                refreshToken: refreshToken,
            })
            .then((response) => {
                dispatch(setAccessToken(response.data.accessToken));
                return response.data.accessToken;
            })
            .catch((error) => {
                console.log(error);
                return null;
            });
    };

    return {
        apiRequest
    }
}
