import { apiBaseUrl } from "./settings";
export function createAccount(data){
    return fetch(`${apiBaseUrl}/api/user_auth/signup`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}
export function loginUser(data){
    return fetch(`${apiBaseUrl}/api/user_auth/login`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}