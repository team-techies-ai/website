// import mainprofile from "../assets/sunil.jpeg";

// const Sunil = () => {
//   return (
//     <div className="ml-12 mr-44 mt-10 text-white font-thin text-xl" style={{ wordSpacing: '0.5rem' }}>
//       <hr className="my-4 border-gray-300/30 backdrop-blur-sm ml-44 mr-44" />

//       <div className="flex justify-between items-center">
//         <div className="">
//           <p className="m-4 p-2">
//             Hi, I&apos;m <span className="font-bold text-l">Sunil Yadav</span>, but you can call me <span className="font-bold text-l">Techy</span>
//           </p>
//           <p className="m-4 p-2">
//             Did you know that <span className="underline decoration-slate-50 decoration-opacity-50">more than 60% of graduates</span> struggle to find a job even after finishing their graduation? Many have strong academic knowledge but lack the real-world experience needed to solve industry problems. And that&apos;s where Team Techies comes in. We’re on a mission to bridge the gap between academic knowledge and industry demands.

//           </p>
//           <p className="m-4 p-2">
//           At Team Techies,our main goal is to provide innovative AI solutions for our clients,this is what we are doing so far. While building these solutions, we actively involve passionate AI students, giving them hands-on experience during their college years.
//           </p>
//           <p className="m-4 p-2 font-bebas">
//             Team Techies is not just a Team - It&apos;s a platform that empowers students to explore the world of AI and grow into Future AI Innovators.
//           </p>
         
//         </div>
//         <div className="border-white w-[300px] h-[300px] flex-shrink-0 ml-20" >
//           <img
//             src={mainprofile}
//             alt="Profile"
//             className="w-full h-full object-cover  shadow-lg rounded-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sunil;
import React from 'react';
import mainprofile from "../assets/sunil.jpeg";

const Sunil = () => {
  return (
    <div className="px-4 md:px-12 lg:px-24 py-8 text-white ">
      <hr className="my-4 border-gray-300/30 backdrop-blur-sm" />

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="md:order-2 flex flex-col items-center md:items-center">
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 flex-shrink-0 mb-4">
            <img
              src={mainprofile || "/placeholder.svg"}
              alt="Sunil Yadav"
              className="w-full h-full object-cover shadow-lg rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold mb-1">Sunil Yadav</h2>
          <p className="text-lg text-gray-300 mb-4">Founder, Team Techies</p>
        </div>

        <div className="md:order-1 md:flex-2 text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#817e7e] via-white to-[#817e7e] pt-4">
          <p className="mb-4">
            Hi, I'm <span className="font-bold">Sunil Yadav</span>, but you can call me <span className="font-bold">Techy</span>
          </p>
          <p className="mb-4 font-inter">
            Did you know that <span className="underline decoration-slate-50 decoration-opacity-50">more than 60% of graduates</span> struggle to find a job even after finishing their graduation? Many have strong academic knowledge but lack the real-world experience needed to solve industry problems. And that's where Team Techies comes in. We're on a mission to bridge the gap between academic knowledge and industry demands.
          </p>
          <p className="mb-4 font-inter">
            At Team Techies, our main goal is to provide innovative AI solutions for our clients, this is what we are doing so far. While building these solutions, we actively involve passionate AI students, giving them hands-on experience during their college years.
          </p>
          <p className="text-lg font-inter">
            Team Techies is not just a Team - It's a platform that empowers students to explore the world of AI and grow into Future AI Innovators.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sunil;

