import { useState, useEffect } from 'react';
import profileimg from "../assets/progile.jpg"
import { ChevronLeft, ChevronRight } from 'lucide-react';

const teamData = {
  "Design Team": [
    { name: "S MD Isharath", role: "[ UI/UX Designer,Figma,canva] ", image: "" },
    { name: "C Samsundar", role: "[ UI/UX Designer,Figma,canva] ", image: "" },
    { name: "B Naga Pavan", role: "[ UI/UX Designer,Figma,canva] ", image: "" }
  ],
  "Web Development": [
    { name: "Dinesh", role: "[full stack devloper]", image: "" },
    { name: "swapna", role: "[full stack devloper]", image: "" },
    { name: "praneeth", role: "[full stack devloper]", image: "" }
  ],
  "Computer Vision": [],
  "Gen AI": [],
  "Speech": [],
  "Other": []
};

const Profile = ({ name, role, image }) => {
  return (
    <div className="group">
      <div className="flex text-white justify-between w-full max-w-[400px] mx-auto my-4 rounded-xl p-2 hover:bg-white/10 transition-all duration-300">
        <div>
          <img src={profileimg || "/placeholder.svg"} alt={name} className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-white" />
        </div>
        <div className="flex flex-col justify-center ml-4">
          <h1 className="text-lg md:text-xl font-bold">{name}</h1>
          <p className="text-sm md:text-base text-gray-300">{role}</p>
        </div>
      </div>
      <hr className="bg-gradient-to-tr from-black via-white to-black h-[0.3px] mx-4 md:mx-32 border-none shadow shadow-gray-400 opacity-100 transition-opacity duration-300" />
    </div>
  );
};

const Allprofiles = () => {
  const [selectedTeam, setSelectedTeam] = useState("Design Team");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const teamNames = Object.keys(teamData);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : teamNames.length - 1));
    setSelectedTeam(teamNames[(currentIndex > 0 ? currentIndex - 1 : teamNames.length - 1)]);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < teamNames.length - 1 ? prev + 1 : 0));
    setSelectedTeam(teamNames[(currentIndex < teamNames.length - 1 ? currentIndex + 1 : 0)]);
  };

  return (
    <div className="relative p-4 md:p-6 rounded-xl w-full max-w-[1000px] mx-auto my-8">
      <div
        className="absolute inset-0 rounded-xl p-[2px]"
        style={{
          background:
            'conic-gradient(from 0deg, #2D0C57 0deg, #2D0C57 10deg, #2D0C57 50deg, white 70deg, #2D0C57 80deg, #2D0C57 93deg, white 110deg, #2D0C57 130deg, #2D0C57 150deg, #2D0C57 170deg, #2D0C57 190deg, #2D0C57 230deg, white 240deg, #2D0C57 260deg, #2D0C57 280deg, white 300deg, #2D0C57 310deg, #2D0C57 360deg)',
        }}
      >
        <div className="h-full w-full bg-[#0b0314] rounded-xl" />
      </div>

      <div className="relative flex flex-col md:flex-row -mt-4 md:-mt-16">
        <div className="text-xl md:text-3xl font-bold text-white mt-8 md:mt-20 flex items-center justify-between md:flex-col md:items-start p-4 md:p-0">
          {isMobile ? (
            <>
              <button
                onClick={handlePrev}
                className="p-2 bg-white/10 rounded-full"
                aria-label="Previous team"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="px-4 py-2 text-center">
                {teamNames[currentIndex]}
              </div>
              <button
                onClick={handleNext}
                className="p-2 bg-white/10 rounded-full"
                aria-label="Next team"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          ) : (
            teamNames.map((team) => (
              <button
                key={team}
                onClick={() => setSelectedTeam(team)}
                className={`px-4 py-2 text-left hover:bg-white/10 transition-all duration-300 ${
                  selectedTeam === team ? 'bg-black border border-white rounded-3xl' : ''
                }`}
              >
                {team}
              </button>
            ))
          )}
        </div>

        <div className="hidden md:block h-[400px] w-[2px] bg-white/20 mt-20 mx-8" />

        <div className="flex-1 overflow-y-auto max-h-[400px] md:max-h-[600px] mt-8 md:mt-10 pr-4">
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