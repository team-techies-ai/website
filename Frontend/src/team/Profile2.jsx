import profile from "../assets/adarsh.jpg";

const Profile2 = () => {
  return (
    <div className="relative max-w-md mx-auto p-2 md:p-4 rounded-xl h-auto md:h-[400px] w-full md:w-[500px]">
      <div
        className="absolute inset-0 rounded-xl p-[2px]"
        style={{
          background:
            'conic-gradient(from 0deg, #2D0C57 0deg, #2D0C57 10deg, #2D0C57 50deg, white 70deg, #2D0C57 80deg, #2D0C57 93deg, white 110deg, #2D0C57 130deg, #2D0C57 150deg, #2D0C57 170deg, #2D0C57 190deg, #2D0C57 230deg, white 240deg, #2D0C57 260deg, #2D0C57 280deg, white 300deg, #2D0C57 310deg, #2D0C57 360deg)',
        }}
      >
        <div className="h-full w-full bg-[#0b0314] rounded-xl"></div>
      </div>

      <div className="relative flex flex-col items-center pt-8">
        <div className="h-[140px] w-[140px] rounded-full bg-white border-4 border-[#2D0C57] shadow-2xl shadow-gradient overflow-hidden">
          <img
            src={profile || "/placeholder.svg"}
            alt="Profile"
            className="h-full w-full object-cover rounded-full"
          />
        </div>

        <div className="text-center mt-4">
          <h2 className="text-white text-2xl font-medium">Arigala Adarsh</h2>
          <p className="text-gray-400 mt-1 text-lg">R&D Team Lead</p>
          <p className="text-gray-300 mt-3 font-medium text-lg">
            Major Focus on Research in Audio Captioning, Audio Tagging and Computer Vision Applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile2;
