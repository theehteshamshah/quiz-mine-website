import { apiBaseUrl } from "./settings";

export function GenerateTest(data){
    const token = window.localStorage.getItem('token')
    return fetch(`${apiBaseUrl}/api/test/setuptest?number_of_mcqs=${data.number_of_mcqs}&skill_id=${data.skill_id}`,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": token
        },
    })
}

export function checkTest(data){
    const token = window.localStorage.getItem('token')
    return fetch(`${apiBaseUrl}/api/test/returnresult`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "x-access-token": token
        },
        body: JSON.stringify(data)
    })
}