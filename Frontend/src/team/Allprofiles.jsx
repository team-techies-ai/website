import  { useState } from 'react';
import profileimg from "../assets/progile.jpg"
const teamData = {
  "Design Team": [
    { name: " S MD Isharath", role: "[ UI/UX Designer,Figma,canva] ", image: "" },
    { name: "C Samsundar", role: "[ UI/UX Designer,Figma,canva] ", image: "" },
    { name: "B Naga Pavan", role: "[ UI/UX Designer,Figma,canva] ", image: "" }

  ],
  "Web Development": [
    { name: "Dinesh", role: "[full stack devloper]", image: "" },
    { name: "swapna", role: "[full stack devloper]", image: "" },
    { name: "praneeth", role: "[full stack devloper]", image: "" }
  ],
  "Computer Vision": [
   
  ],
  "Gen AI": [
    
  ],
  "Speech": [
   
  ],
  "Other": [
    
  ]
};

const Profile = ({ name, role, image }) => {
  return (
    <div className="group">
      <div className="flex text-white justify-between w-[400px] m-5 ml-10  rounded-xl p-2 hover:bg-white/10 transition-all duration-300">
        <div>
          <img src={profileimg} alt={name} className="w-[100px] h-[100px] rounded-full bg-white" />
        </div>
        <div className="flex flex-col justify-center mr-4">
          <h1 className="text-xl font-bold">{name}</h1>
          <p className="text-gray-300">{role}</p>
        </div>
      </div>
      <hr className="bg-gradient-to-tr from-black via-white to-black h-[0.3px] ml-32 mr-32 border-none shadow shadow-gray-400 opacity-100  transition-opacity duration-300" />
    </div>
  );
};

const Allprofiles = () => {
  const [selectedTeam, setSelectedTeam] = useState("Design Team");

  return (
    <div className="relative p-6 rounded-xl h-[500px] w-[1000px] m-8 ml-32 mt-24">
      <div
        className="absolute inset-0 rounded-xl p-[2px]"
        style={{
          background:
            'conic-gradient(from 0deg, #2D0C57 0deg, #2D0C57 10deg, #2D0C57 50deg, white 70deg, #2D0C57 80deg, #2D0C57 93deg, white 110deg, #2D0C57 130deg, #2D0C57 150deg, #2D0C57 170deg, #2D0C57 190deg, #2D0C57 230deg, white 240deg, #2D0C57 260deg, #2D0C57 280deg, white 300deg, #2D0C57 310deg, #2D0C57 360deg)',
        }}
      >
        <div className="h-full w-full bg-[#0b0314] rounded-xl" />
      </div>

      <div className="relative flex -mt-16">
        <div className="text-3xl font-bold text-white mt-20 flex flex-col m-5 space-y-4">
          {Object.keys(teamData).map((team) => (
            <button
              key={team}
              onClick={() => setSelectedTeam(team)}
              className={`px-4 py-2 text-left hover:bg-white/10  transition-all duration-300 ${
                selectedTeam === team ? 'bg-black border border-white rounded-3xl' : ''
              }`}
            >
              {team}
            </button>
          ))}
        </div>

        <div className="h-[400px] w-[2px] bg-white/20 mt-20 mr-10 m-5 ml-10 mb-10 border-none" />

        <div className="flex flex-col overflow-y-auto max-h-[600px] mt-10 pr-4">
          {teamData[selectedTeam].map((profile, index) => (
            <Profile
              key={index}
              name={profile.name}
              role={profile.role}
              image={profile.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allprofiles;