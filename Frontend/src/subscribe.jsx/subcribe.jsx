import { useForm } from "react-hook-form";
import { Savesubscribe } from "../utils/api";

const Subscribe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    Savesubscribe(data);
    console.log("Subscription Data Submitted:", data);
    alert("Subscription Successful!");
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="bg-[#0b0314] backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md mt-32 border border-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Subscribe</h2>
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
            {errors.name && (
              <span className="text-red-400 text-sm">{errors.name.message}</span>
            )}
          </div>

          {/* Email Field */}
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
            {errors.email && (
              <span className="text-red-400 text-sm">{errors.email.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full p-3 rounded bg-blue-600 hover:bg-blue-700 transition duration-200 text-white font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
