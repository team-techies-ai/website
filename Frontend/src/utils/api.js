import axios from "axios";

const Baseurl= import.meta.env.VITE_API_URL;
export const getAuth=async()=>{
    return `Bearer ${localStorage.getItem('accessToken')}`
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

// New Authentication and Profile APIs
export const googleAuthApi = async (credential) => {
    return await axios.post(`${Baseurl}/auth/google`, { credential });
};

export const refreshTokenApi = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    return await axios.post(
        `${Baseurl}/auth/refresh-token`,
        { refreshToken },
        {
            headers: {
                Authorization: await getAuth()
            }
        }
    );
};

// Profile APIs
export const getUserProfileApi = async () => {
    try {
        const response = await axios.get(
            `${Baseurl}/auth/user/profile`,
            {
                headers: {
                    Authorization: await getAuth()
                }
            }
        );
        return response;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

export const updateUserProfileApi = async (profileData) => {
    try {
        const response = await axios.put(
            `${Baseurl}/auth/user/profile`,
            profileData,
            {
                headers: {
                    Authorization: await getAuth()
                }
            }
        );
        return response;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

// Axios interceptor for handling token expiration
axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If the error is 401 and we haven't tried to refresh the token yet
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // Try to refresh the token
                const response = await refreshTokenApi();
                const { accessToken } = response.data;

                // Save the new token
                localStorage.setItem('token', accessToken);

                // Update the original request with the new token
                originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

                // Retry the original request
                return axios(originalRequest);
            } catch (refreshError) {
                // If refresh token fails, redirect to login
                localStorage.clear();
                window.location.href = '/login';
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

// Helper function to setup axios defaults
export const setupAxiosDefaults = () => {
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Accept'] = 'application/json';
};

