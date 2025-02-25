import { useForm } from "react-hook-form";

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, 
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    alert("Signup Successful!"); 
    reset(); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="">
        
      </div>
      <div className="bg-[#0b0314] backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md mt-32 border border-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Signup</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
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

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
            />
            {errors.password && (
              <span className="text-red-400 text-sm">{errors.password.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full p-3 rounded bg-blue-600 hover:bg-blue-700 transition duration-200 text-white font-semibold"
          >
            login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
