// import { useForm } from "react-hook-form";
// import { JoinTeam } from "../utils/api";

// const Join = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("email", data.email);
//     formData.append("contact", data.contact);
//     formData.append("reason", data.reason);
//     formData.append("resume", data.resume[0]);

//     JoinTeam(formData)
//       .then((response) => {
//         alert(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//         alert("Error submitting form!");
//       });
//   };

//   return (
//     <div className="bg-[#0b0314] p-8 rounded-lg shadow-lg w-full max-w-md mt-32 mx-auto text-black border border-[#8154bb] ">
//       <h1 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#7203FF] via-[#ffffff] to-[#2D0C57] bg-clip-text text-transparent">
//         Join Team Techies
//       </h1>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         <div>
//           <label className="block text-sm  text-white font-medium mb-2">Name</label>
//           <input
//             type="text"
//             {...register("name", { required: "Name is required" })}
//             className="w-full p-3 rounded  focus:ring-2 focus:ring-[#7203FF] outline-none"
//           />
//           {errors.name && (
//             <p className="text-[#7203FF] text-sm mt-1">{errors.name.message}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm text-white font-medium mb-2">Email</label>
//           <input
//             type="email"
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//                 message: "Invalid email address",
//               },
//             })}
//             className="w-full p-3 rounded  text-black focus:ring-2 focus:ring-[#7203FF] outline-none"
//           />
//           {errors.email && (
//             <p className="text-[#7203FF] text-sm mt-1">{errors.email.message}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm text-white font-medium mb-2">Contact</label>
//           <input
//             type="tel"
//             {...register("contact", {
//               required: "Contact is required",
//               pattern: {
//                 value: /^[0-9]{10}$/,
//                 message: "Invalid contact number",
//               },
//             })}
//             className="w-full p-3 rounded   text-black  focus:ring-2 focus:ring-[#7203FF] outline-none"
//           />
//           {errors.contact && (
//             <p className="text-[#7203FF] text-sm mt-1">{errors.contact.message}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm text-white font-medium mb-2">Resume</label>
//           <input
//             type="file"
//             {...register("resume", { required: "Resume is required" })}
//             className="w-full p-3 bg-white  text-black  rounded focus:ring-2 focus:ring-[#7203FF] outline-none"
//           />
//           {errors.resume && (
//             <p className="text-[#7203FF] text-sm mt-1">{errors.resume.message}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm text-white font-medium mb-2">Why do you want to join?</label>
//           <textarea
//             {...register("reason", { required: "This field is required" })}
//             className="w-full p-3 rounded   text-black   focus:ring-2 focus:ring-[#7203FF] outline-none"
//             rows="4"
//           ></textarea>
//           {errors.reason && (
//             <p className="text-[#7203FF] text-sm mt-1">{errors.reason.message}</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="w-full p-3   bg-[#7203FF]  text-white  font-bold rounded hover:bg-[#7654a1] transition"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Join;

import React from "react";
import { useForm } from "react-hook-form";
import { JoinTeam } from "../utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Join = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const notifySuccess = () => {
    toast.success("Form submitted successfully!", {
      style: {
        background: "#7203FF", // Success color
        color: "white",
      },
      position: "bottom-right", // Toast position
      autoClose: 3000,
    });
  };

  const notifyError = () => {
    toast.error("Error submitting form!", {
      style: {
        background: "orange", // Error color
        color: "white",
      },
      position: "bottom-right", // Toast position
      autoClose: 3000,
    });
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("contact", data.contact);
    formData.append("resume", data.resume[0]);
    formData.append("coverLetter", data.coverLetter[0]);

    JoinTeam(formData)
      .then((response) => {
        notifySuccess();
      })
      .catch((error) => {
        console.error(error);
        notifyError();
      });
  };

  return (
    <div className="bg-[#0b0314] p-8 rounded-lg shadow-lg w-full max-w-md mt-32 mx-auto text-black border border-[#8154bb] ">
      <h1 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#7203FF] via-[#ffffff] to-[#2D0C57] bg-clip-text text-transparent">
        Join Team Techies
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Enter your Name"
            {...register("name", { required: "Name is required" })}
            className="w-full p-3 bg-[#0b0314] text-white border rounded-md outline-none relative z-10 placeholder-gray-500"
          />
          {errors.name && (
            <p className="text-[#7203FF] text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            className="w-full p-3 bg-[#0b0314] text-white border rounded-md outline-none relative z-10 placeholder-gray-500"
          />
          {errors.email && (
            <p className="text-[#7203FF] text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Enter your Contact"
            {...register("contact", {
              required: "Contact is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid contact number",
              },
            })}
            className="w-full p-3 bg-[#0b0314] text-white border rounded-md outline-none relative z-10 placeholder-gray-500"
          />
          {errors.contact && (
            <p className="text-[#7203FF] text-sm mt-1">{errors.contact.message}</p>
          )}
        </div>

        <div>
          <input
            type="file"
            placeholder="Enter your Resume"
            {...register("resume", { required: "Resume is required" })}
            className="w-full p-3 bg-[#0b0314] text-white border rounded-md outline-none relative z-10 placeholder-gray-500"
          />
          {errors.resume && (
            <p className="text-[#7203FF] text-sm mt-1">{errors.resume.message}</p>
          )}
        </div>

        {/* <div>
          <label className="block text-sm text-white font-medium mb-2">Why do you want to join?</label>
          <textarea
            {...register("reason", { required: "This field is required" })}
            className="w-full p-3 rounded focus:ring-2 focus:ring-[#7203FF] outline-none"
            rows="4"
          ></textarea>
          {errors.reason && (
            <p className="text-[#7203FF] text-sm mt-1">{errors.reason.message}</p>
          )}
        </div> */}

        <div>
          <input
            type="file"
            placeholder="Enter Cover Letter"
            {...register("coverLetter")}
            className="w-full p-3 bg-[#0b0314] text-white border rounded-md outline-none relative z-10 placeholder-gray-500"
          />
          {errors.coverLetter && (
            <p className="text-[#7203FF] text-sm mt-1">{errors.coverLetter.message}</p>
          )}
        </div>


        <button
          type="submit"
          className="w-full p-3 bg-[#7203FF] text-white font-bold rounded hover:bg-[#7654a1] transition"
        >
          Submit
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Join;
