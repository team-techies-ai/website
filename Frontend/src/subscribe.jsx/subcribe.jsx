// import { useForm } from "react-hook-form";
// import { Savesubscribe } from "../utils/api";

// const Subscribe = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm();

//   const onSubmit = (data) => {
//     Savesubscribe(data);
//     console.log("Subscription Data Submitted:", data);
//     alert("Subscription Successful!");
//     reset();
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center text-white">
//       <div className="bg-[#0b0314] backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md mt-32 border border-white">
//         <h2 className="text-3xl font-bold mb-6 text-center">Subscribe</h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
//           <div>
//             <label htmlFor="name" className="block mb-2 text-sm font-medium">
//               Name
//             </label>
//             <input
//               {...register("name", {
//                 required: "Name is required",
//                 minLength: {
//                   value: 2,
//                   message: "Name must be at least 2 characters long",
//                 },
//               })}
//               id="name"
//               placeholder="Enter your name"
//               className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
//             />
//             {errors.name && (
//               <span className="text-red-400 text-sm">{errors.name.message}</span>
//             )}
//           </div>

//           {/* Email Field */}
//           <div>
//             <label htmlFor="email" className="block mb-2 text-sm font-medium">
//               Email Address
//             </label>
//             <input
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                   message: "Invalid email address",
//                 },
//               })}
//               id="email"
//               placeholder="Enter your email"
//               className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
//             />
//             {errors.email && (
//               <span className="text-red-400 text-sm">{errors.email.message}</span>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full p-3 rounded bg-blue-600 hover:bg-blue-700 transition duration-200 text-white font-semibold"
//           >
//             Subscribe
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Subscribe;
"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Savesubscribe } from "../utils/api"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { Loader2 } from "lucide-react"

const Subscribe = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    setIsLoading(true)
    try {
      await Savesubscribe(data)
      console.log("Subscription Data Submitted:", data)
      setIsSuccess(true)
      reset()
    } catch (error) {
      console.error("Error saving subscription:", error)
      alert("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="bg-[#0b0314] backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md mt-32 border border-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Subscribe</h2>
        {!isSuccess ? (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name
              </label>
              <input
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters long",
                  },
                })}
                id="name"
                placeholder="Enter your name"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
              />
              {errors.name && <span className="text-red-400 text-sm">{errors.name.message}</span>}
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email Address
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                id="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
              />
              {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full p-3 rounded bg-blue-600 hover:bg-blue-700 transition duration-200 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? <Loader2 className="animate-spin mx-auto" /> : "Subscribe"}
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center">
            <DotLottieReact
              src="https://lottie.host/1e0395f5-91b1-414b-8702-8396a991ce51/sjSBcCkbEg.lottie"
              loop
              autoplay
              className="w-64 h-64"
            />
            <p className="text-center mt-4 text-lg font-semibold">Subscription Successful!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Subscribe

