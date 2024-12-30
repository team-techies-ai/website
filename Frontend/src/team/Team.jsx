import Profile from "./Profile";
import Mainprofile from "./Mainprofile";
import Allprofiles from "./Allprofiles";

const Team = () => {
  return (
    <div className="bg-[#0b0314] min-h-screen text-white mt-32 flex flex-col">
      <h1 className="text-6xl font-medium text-center m-4">Meet our Team</h1>
      <Mainprofile />
      <div className="flex justify-center">
        <Profile />
        <Profile />
      </div>
      <div className="mt-auto">
        <Allprofiles />
        
      </div>
    </div>
  );
};

export default Team;