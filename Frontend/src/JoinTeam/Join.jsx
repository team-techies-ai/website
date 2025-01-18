import { useForm } from "react-hook-form";
import { JoinTeam } from "../utils/api";

const Join = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("contact", data.contact);
    formData.append("reason", data.reason);
    formData.append("resume", data.resume[0]);

    JoinTeam(formData)
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert("Error submitting form!");
      });
  };

  return (
    <div className="bg-[#0b0314] p-8 rounded-lg shadow-lg w-full max-w-md mt-32 mx-auto text-black border border-[#8154bb] ">
      <h1 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#7203FF] via-[#ffffff] to-[#2D0C57] bg-clip-text text-transparent">
        Join Team Techies
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm  text-white font-medium mb-2">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full p-3 rounded  focus:ring-2 focus:ring-[#7203FF] outline-none"
          />
          {errors.name && (
            <p className="text-[#7203FF] text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-white font-medium mb-2">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            className="w-full p-3 rounded  text-black focus:ring-2 focus:ring-[#7203FF] outline-none"
          />
          {errors.email && (
            <p className="text-[#7203FF] text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-white font-medium mb-2">Contact</label>
          <input
            type="tel"
            {...register("contact", {
              required: "Contact is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid contact number",
              },
            })}
            className="w-full p-3 rounded   text-black  focus:ring-2 focus:ring-[#7203FF] outline-none"
          />
          {errors.contact && (
            <p className="text-[#7203FF] text-sm mt-1">{errors.contact.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-white font-medium mb-2">Resume</label>
          <input
            type="file"
            {...register("resume", { required: "Resume is required" })}
            className="w-full p-3 bg-white  text-black  rounded focus:ring-2 focus:ring-[#7203FF] outline-none"
          />
          {errors.resume && (
            <p className="text-[#7203FF] text-sm mt-1">{errors.resume.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-white font-medium mb-2">Why do you want to join?</label>
          <textarea
            {...register("reason", { required: "This field is required" })}
            className="w-full p-3 rounded   text-black   focus:ring-2 focus:ring-[#7203FF] outline-none"
            rows="4"
          ></textarea>
          {errors.reason && (
            <p className="text-[#7203FF] text-sm mt-1">{errors.reason.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full p-3   bg-[#7203FF]  text-white  font-bold rounded hover:bg-[#7654a1] transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Join;
