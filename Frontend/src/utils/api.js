import axios from "axios";

const Baseurl="http://localhost:9001/api";
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
    return await axios.post(`${Baseurl}/team`,data)
}
export const ContactApi=async(data)=>{
    return await axios.post(`${Baseurl}/clients`,data)
}

