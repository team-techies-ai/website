import Profile from "./Profile";
import Mainprofile from "./Mainprofile";
import Allprofiles from "./Allprofiles";

const Team = () => {
  return (
    <div className="bg-[#0b0314] min-h-screen text-white pt-16 md:pt-32 flex flex-col">
      <h1 className="text-4xl md:text-6xl font-medium text-center m-4">Meet our Team</h1>
      <Mainprofile />
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 my-8">
        <Profile />
        <Profile />
      </div>
      <div className="mt-auto w-full">
        <Allprofiles />
      </div>
    </div>
  );
};

export default Team;