// import { ToastContainer, toast } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"
// import { GoogleLogin } from "@react-oauth/google"
// import { GoogleOAuthProvider } from "@react-oauth/google"

// const Register = () => {
//   const handleGoogleAuth = async (credentialResponse) => {
//     try {
//       const res = await fetch("http://localhost:9000/api/google", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ credential: credentialResponse.credential }),
//       })

//       const data = await res.json()

//       if (res.ok) {
//         // Store tokens in localStorage
//         localStorage.setItem("accessToken", data.accessToken)
//         localStorage.setItem("refreshToken", data.refreshToken)

//         toast.success("Authentication successful!", {
//           style: {
//             background: "#7203FF",
//             color: "white",
//           },
//           position: "bottom-right",
//           autoClose: 3000,
//         })
//       } else {
//         throw new Error(data.message || "Authentication failed")
//       }
//     } catch (error) {
//       toast.error(error.message, {
//         style: {
//           background: "#FF0333",
//           color: "white",
//         },
//         position: "bottom-right",
//         autoClose: 3000,
//       })
//     }
//   }

//   return (
//     <div className="bg-[#0b0314] p-8 rounded-lg shadow-lg w-full max-w-md mt-32 mx-auto text-black border border-[#8154bb] text-center">
//       <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#7203FF] via-[#ffffff] to-[#2D0C57] bg-clip-text text-transparent">
//         Register with Team Techies
//       </h1>

//       <div className="space-y-4">
//         <GoogleLogin
//           onSuccess={handleGoogleAuth}
//           onError={() => {
//             toast.error("Google Sign In was unsuccessful. Try again later", {
//               style: {
//                 background: "#FF0333",
//                 color: "white",
//               },
//               position: "bottom-right",
//               autoClose: 3000,
//             })
//           }}
//           useOneTap
//         />
//       </div>

//       {/* Toast Container */}
//       <ToastContainer />
//     </div>
//   )
// }

// const RegisterWithGoogle = () => (
//   <GoogleOAuthProvider clientId={"863550972896-mvid9c4232c8oacokuavvledct0l6kvs.apps.googleusercontent.com"}>
//     <Register />
//   </GoogleOAuthProvider>
// )

// export default RegisterWithGoogle

import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { GoogleLogin } from "@react-oauth/google"
import { GoogleOAuthProvider } from "@react-oauth/google"

const Register = () => {
  const handleGoogleAuth = async (credentialResponse) => {
    try {
      console.log("Google response:", credentialResponse) // Log the entire response
      const res = await fetch("http://localhost:9001/api/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ credential: credentialResponse.credential }),
      })

      const data = await res.json()

      if (res.ok) {
        localStorage.setItem("accessToken", data.accessToken)
        localStorage.setItem("refreshToken", data.refreshToken)

        toast.success("Authentication successful!", {
          style: {
            background: "#7203FF",
            color: "white",
          },
          position: "bottom-right",
          autoClose: 3000,
        })
      } else {
        throw new Error(data.message || "Authentication failed")
      }
    } catch (error) {
      console.error("Auth error:", error) // Log any errors
      toast.error(error.message, {
        style: {
          background: "#FF0333",
          color: "white",
        },
        position: "bottom-right",
        autoClose: 3000,
      })
    }
  }

  return (
    <div className="bg-[#0b0314] p-8 rounded-lg shadow-lg w-full max-w-md mt-32 mx-auto text-black border border-[#8154bb] text-center">
      <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#7203FF] via-[#ffffff] to-[#2D0C57] bg-clip-text text-transparent">
        Register with Team Techies
      </h1>

      <div className="space-y-4">
        <GoogleLogin
          onSuccess={handleGoogleAuth}
          onError={() => {
            console.error("Login Failed")
            toast.error("Google Sign In was unsuccessful. Try again later", {
              style: {
                background: "#FF0333",
                color: "white",
              },
              position: "bottom-right",
              autoClose: 3000,
            })
          }}
        />
      </div>

      <ToastContainer />
    </div>
  )
}

const RegisterWithGoogle = () => (
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <Register />
  </GoogleOAuthProvider>
)

export default RegisterWithGoogle

