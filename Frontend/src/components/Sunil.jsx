import React from 'react';
import mainprofile from "../assets/sunil.jpeg";

const Sunil = () => {
  return (
    <div className="px-4 md:px-8 lg:px-24 py-8 text-white ">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium text-center m-4 mb-5 lg:mb-10">Message from Mr.Techy</h1>
      <hr className="my-4 border-gray-300/30 backdrop-blur-sm" />

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="md:order-2 flex flex-col items-center md:items-center">
          <div className="w-48 h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 flex-shrink-0 mb-4 mt-8">
            <img
              src={mainprofile || "/placeholder.svg"}
              alt="Sunil Yadav"
              className="w-full h-full object-cover shadow-lg rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold mb-1">Sunil Yadav</h2>
          <p className="text-lg text-gray-300 mb-4">Founder, Team Techies</p>
        </div>

        <div className="md:order-1 md:flex-2 text-lg font-medium text-transparent text-justify bg-clip-text bg-gradient-to-r from-[#ffffff] via-white to-[#d7d4d4] pt-4">
          <p className="mb-4">
            Heyy there Techy Boy Here, My Name is <span className="font-bold">Sunil</span>, but you can also call me <span className="font-bold">Techy</span>
          </p>
          <p className="mb-4 font-inter">
            Did you know that <span className="underline decoration-slate-50 decoration-opacity-50">more than 60% of graduates</span> struggle to find a job even after finishing their graduation?
            </p>
          <p className="mb-4 font-inter">
          These days, getting a job isn’t as easy as it used to be. Companies no longer require large teams for most tasks. With AI, one person can now handle the work of five people.
           </p>
          <p className="mb-4 font-inter">
          And in the near future, even that one person could be replaced entirely by AI for sure.
          This is one of the major factor behind my decision to start a mission to Empower 1 Million students with AI skills over the next 3 years.
         
          </p>
          <p className="text-lg font-inter">
            
          At Team Techies, our main goal is to provide innovative AI solutions for our clients, and this is what we’ve been doing so far. While building these solutions, we actively involve passionate AI students, giving them hands-on experience during their college years.
          </p>
        <p className="mt-4 font-inter">
        Team Techies is not just a Team - It&apos;s a Game Changing platform that empowers students to explore the world of AI and grow into Future AI Innovators. 
        </p>
        </div>
      </div>
    </div>
  );
};

export default Sunil;

