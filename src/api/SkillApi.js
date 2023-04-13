import { apiBaseUrl } from "./settings";

export function getAllSkills(){
    const token = window.localStorage.getItem('token')
    return fetch(`${apiBaseUrl}/api/skill`,{
        headers:{
            "Content-Type": "application/json",
            "x-access-token": token
        }
    })
}