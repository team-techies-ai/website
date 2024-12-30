import profile from "../assets/progile.jpg"
const Profile = () => {
    return (
      <div className="relative max-w-sm mx-auto p-6 rounded-xl h-[400px] w-[400px]">
        <div
          className="absolute inset-0 rounded-xl p-[2px]"
          style={{
            background:
              'conic-gradient(from 0deg, #2D0C57 0deg, #2D0C57 10deg, #2D0C57 50deg, white 70deg, #2D0C57 80deg, #2D0C57 93deg, white 110deg, #2D0C57 130deg, #2D0C57 150deg, #2D0C57 170deg, #2D0C57 190deg, #2D0C57 230deg, white 240deg, #2D0C57 260deg, #2D0C57 280deg, white 300deg, #2D0C57 310deg, #2D0C57 360deg)',
          }}
        >
          <div className="h-full w-full bg-[#0b0314] rounded-xl"></div>
        </div>
  
        {/* Profile Image Container */}
        <div className="relative flex justify-center -mt-12">
          <div className="h-[130px] w-[130px] rounded-full bg-white border-4 border-[#2D0C57]  mt-20 shadow-2xl shadow-gradinet overflow-hidden">
            <img
              src={profile}
              alt="Profile"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
        </div>
  
        {/* Profile Content */}
        <div className="relative text-center mt-6">
          <h2 className="text-white text-2xl font-bold">Guru Darpan</h2>
          <p className="text-gray-400 mt-2 text-sm">[ Computer Vision | LLM’s ]</p>
          <p className="text-gray-300 mt-4">
            Major Focus on Low-Level Coding for Computer Vision Applications and LLM’s
          </p>
        </div>
      </div>
    );
  };
  
  export default Profile;
  