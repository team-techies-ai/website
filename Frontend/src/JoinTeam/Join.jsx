import React ,{ useState } from "react";
import { useForm } from "react-hook-form";
import { JoinTeam } from "../utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Upload ,File, X} from "lucide-react";

const Join = () => {
  const [coverLetterFile, setCoverLetterFile] = useState(null)
  const [resumeFile, setResumeFile] = useState(null)
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
    formData.append("resume", resumeFile);
    formData.append("coverLetter", coverLetterFile);

    console.log(formData,"----------------------------")

    JoinTeam(formData)
      
      .then((response) => {
        notifySuccess();
      })
      .catch((error) => {
        console.error(error);
        notifyError();
      });
  };
  const handleFileChange = (e, setFile) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleRemoveFile = (setFile) => {
    setFile(null)
  }



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

        <div className="mb-4">
          <div className="border border-dashed rounded-lg p-2">
            <input
              id="resume-upload"
              type="file"
              className="hidden"
              {...register("resume", { required: "Resume is required" })}
              onChange={(e) => handleFileChange(e, setResumeFile)}
            />
            {!resumeFile ? (
              <label htmlFor="resume-upload" className="flex flex-col items-center justify-center h-32 cursor-pointer">
                <Upload className="w-10 h-10 text-gray-400 mb-2" />
                <span className="text-sm text-gray-400">Drag & drop or click to upload resume</span>
              </label>
            ) : (
              <div className="flex items-center justify-between p-2">
                <div className="flex items-center">
                  <File className="w-8 h-8 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-400">{resumeFile.name}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveFile(setResumeFile)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
          {errors.resume && <p className="text-[#7203FF] text-sm mt-1">{errors.resume.message}</p>}
        </div>

        <div className="mb-4">
          <div className="border border-dashed rounded-lg p-2">
            <input
              id="cover-letter-upload"
              type="file"
              className="hidden"
              {...register("coverLetter")}
              onChange={(e) => handleFileChange(e, setCoverLetterFile)}
            />
            {!coverLetterFile ? (
              <label
                htmlFor="cover-letter-upload"
                className="flex flex-col items-center justify-center h-32 cursor-pointer"
              >
                <Upload className="w-10 h-10 text-gray-400 mb-2" />
                <span className="text-sm text-gray-400">Drag & drop or click to upload cover letter(optional)</span>
              </label>
            ) : (
              <div className="flex items-center justify-between p-2">
                <div className="flex items-center">
                  <File className="w-8 h-8 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-400">{coverLetterFile.name}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveFile(setCoverLetterFile)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
          {errors.coverLetter && <p className="text-[#7203FF] text-sm mt-1">{errors.coverLetter.message}</p>}
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
