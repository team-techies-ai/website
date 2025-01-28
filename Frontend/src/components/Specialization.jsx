// import pic1 from "../assets/ai prod dev.gif"
// import pic2 from "../assets/contact.jpg"

// const Specialization = () => {
//   return (
//     <div className="backdrop-blur-lg border border-gray-300/50 p-9 rounded-3xl shadow-lg mx-4 sm:mx-10 md:mx-32 text-white mt-20 bg-black/40">
//       <h1 className="text-3xl sm:text-4xl font-medium font-mono text-center mb-6">Core Specializations</h1>

//       <div className="mb-6 p-7 rounded-2xl border-2 border-[#2D0C57] flex flex-col sm:flex-row items-center">
//         <div className="sm:w-2/3 sm:pr-4">
//           <h1 className="text-xl sm:text-2xl font-semibold">AI Product Development</h1>
//           <p className="mt-2 text-sm sm:text-base">
//             We develop AI solutions for real-world problems across industries, with guidance from industry experts.
//           </p>
//         </div>
//         <div className="sm:w-1/3 mt-4 sm:mt-0">
//           <img src={pic1} alt="AI Product Development" className="rounded-lg w-80 h-52" />
//         </div>
//       </div> 

//       <div className="mb-6 p-7 rounded-2xl border-2 border-[#2D0C57] flex flex-col sm:flex-row items-center">
//         <div className="sm:w-2/3 sm:pr-4">
//           <h1 className="text-xl sm:text-2xl font-semibold">Student Collaboration and Mentorship</h1>
//           <p className="mt-2 text-sm sm:text-base">
//             Students collaborate, share ideas, and learn from mentors to build impactful projects.
//           </p>
//           <p className="mt-2 text-sm sm:text-base">
//             Students collaborate, share ideas, and learn from mentors to build impactful projects.
//           </p>
//           <p className="mt-2 text-sm sm:text-base">
//             Students collaborate, share ideas, and learn from mentors to build impactful projects.
//           </p>
//           <p className="mt-2 text-sm sm:text-base">
//             Students collaborate, share ideas, and learn from mentors to build impactful projects.
//           </p>
//         </div>
//         <div className="sm:w-1/3 mt-4 sm:mt-0">
//           <img
//             src={pic2}
//             alt="Student Collaboration and Mentorship"
//             className="rounded-lg w-80 h-52"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Specialization;
import pic1 from "../assets/ai prod dev.gif"
import pic2 from "../assets/contact.jpg"

const Specialization = () => {
  return (
    <div className="backdrop-blur-lg border border-gray-300/50 p-9 rounded-3xl shadow-lg mx-4 sm:mx-10 md:mx-32 text-white mt-20 bg-black/40">
      <h1 className="text-3xl sm:text-4xl font-medium font-mono text-center mb-6">Core Specializations</h1>

      <div className="mb-6 p-7 rounded-2xl border-2 border-[#2D0C57] flex flex-col lg:flex-row items-center">
        <div className="order-2 lg:order-1 lg:w-2/3 lg:pr-4 mt-4 lg:mt-0">
          <h1 className="text-xl sm:text-2xl font-semibold">AI Product Development</h1>
          <p className="mt-2 text-sm sm:text-base">
            We develop AI solutions for real-world problems across industries, with guidance from industry experts.
          </p>
        </div>
        <div className="order-1 lg:order-2 lg:w-1/3">
          <img src={pic1 || "/placeholder.svg"} alt="AI Product Development" className="rounded-lg w-80 h-52 mx-auto" />
        </div>
      </div>

      <div className="mb-6 p-7 rounded-2xl border-2 border-[#2D0C57] flex flex-col lg:flex-row items-center">
        <div className="order-2 lg:order-1 lg:w-2/3 lg:pr-4 mt-4 lg:mt-0">
          <h1 className="text-xl sm:text-2xl font-semibold">Student Collaboration and Mentorship</h1>
          <p className="mt-2 text-sm sm:text-base">
            Students collaborate, share ideas, and learn from mentors to build impactful projects.
          </p>
          <p className="mt-2 text-sm sm:text-base">
            Students collaborate, share ideas, and learn from mentors to build impactful projects.
          </p>
          <p className="mt-2 text-sm sm:text-base">
            Students collaborate, share ideas, and learn from mentors to build impactful projects.
          </p>
          <p className="mt-2 text-sm sm:text-base">
            Students collaborate, share ideas, and learn from mentors to build impactful projects.
          </p>
        </div>
        <div className="order-1 lg:order-2 lg:w-1/3">
          <img
            src={pic2 || "/placeholder.svg"}
            alt="Student Collaboration and Mentorship"
            className="rounded-lg w-80 h-52 mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Specialization

