import axios from "axios";

const Baseurl="http://localhost:9000/api";
export const getAuth=async()=>{
    return `Bearer ${localStorage.getItem('token')}`
}
export const Savesubscribe=async(data)=>{
    return await axios.post(`${Baseurl}/subscribe`,data)
}
export const Savelogin=async(data)=>{
    return await axios.post(`${Baseurl}/login`,data)
}
export const JoinTeam=async(data)=>{
    return await axios.post(`${Baseurl}/join`,data)
}
export const Contact=async(data)=>{
    return await axios.post(`${Baseurl}/contact`,data)
}

