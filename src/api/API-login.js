import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "9832db98-b9d3-460c-9cab-5d06ff193b07" },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export function getAuthStatus() {
   return instance.get(`auth/me`);
}


export const Login = (email,password,rememberMe) => {
    return (
        instance.post(`/auth/login`, { email, password, rememberMe})
    )
}

export const Logout = () => {
    return (
        instance.delete(`/auth/login`)
    )
}