import axios from "axios";

const Baseurl = import.meta.env.VITE_BACKEND_URL;  // ✅ Corrected env variable

export const getAuth = async () => {
    return `Bearer ${localStorage.getItem('token')}`;
}

export const Savesubscribe = async (data) => {
    return await axios.post(`${Baseurl}/subscribe`, data);
}

export const Savelogin = async (data) => {
    return await axios.post(`${Baseurl}/login`, data);
}

export const JoinTeam = async (data) => {
    return await axios.post(`${Baseurl}/team`, data);
}

export const ContactApi = async (data) => {
    return await axios.post(`${Baseurl}/clients`, data);
}
