import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleGoogleAuth = async (credentialResponse) => {
    try {
      const res = await fetch("http://localhost:9001/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ credential: credentialResponse.credential }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Authentication failed");
      }

      // Store tokens
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      
      // Update auth context
      login(data.user);

      toast.success("Authentication successful!", {
        style: {
          background: "#7203FF",
          color: "white",
        },
        position: "bottom-right",
        autoClose: 3000,
      });

      // Navigate to home page
      navigate('/');
      
    } catch (error) {
      console.error("Auth error:", error);
      toast.error(error.message, {
        style: {
          background: "#FF0333",
          color: "white",
        },
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="bg-[#0b0314] p-8 rounded-lg shadow-lg w-full max-w-md mt-32 mx-auto text-black border border-[#8154bb] text-center">
      <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#7203FF] via-[#ffffff] to-[#2D0C57] bg-clip-text text-transparent">
        Register with Team Techies
      </h1>

      <div className="flex justify-center items-center space-y-6 p-4 rounded-lg bg-opacity-20 bg-purple-900 backdrop-blur-sm border border-purple-500/20 shadow-lg hover:bg-opacity-30 transition-all duration-300">
        <GoogleLogin
          onSuccess={handleGoogleAuth}
          onError={() => {
            console.error("Login Failed");
            toast.error("Google Sign In failed. Please try again.", {
              style: {
                background: "#FF0333",
                color: "white",
              },
              position: "bottom-right",
              autoClose: 3000,
            });
          }}
        />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Register;