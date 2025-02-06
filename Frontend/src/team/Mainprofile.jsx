import mainprofile from "../assets/sunil.jpeg";

const Mainprofile = () => {
  return (
    <div className="relative p-4 md:p-6 rounded-xl w-full max-w-[1100px] mx-auto my-8">
      <div
        className="absolute inset-0 rounded-xl p-[2px]"
        style={{
          background:
            "conic-gradient(from 0deg, #2D0C57 0deg, #2D0C57 10deg, #2D0C57 50deg, white 70deg, #2D0C57 80deg, #2D0C57 93deg, white 110deg, #2D0C57 130deg, #2D0C57 150deg, #2D0C57 170deg, #2D0C57 190deg, #2D0C57 230deg, white 240deg, #2D0C57 260deg, #2D0C57 280deg, white 300deg, #2D0C57 310deg, #2D0C57 360deg)",
        }}
      >
        <div className="h-full w-full bg-[#0b0314] rounded-xl"></div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 pt-8 h-full">
  {/* Image Section */}
  <div className="flex flex-col items-center flex-shrink-0">
    <div className="h-[200px] w-[200px] md:h-[250px] md:w-[250px] rounded-full border-4 border-[#2D0C57] shadow-2xl shadow-gradient overflow-hidden">
      <img
        src={mainprofile || "/placeholder.svg"}
        alt="Profile"
        className="h-full w-full object-cover rounded-full"
      />
    </div>
    <h2 className="text-xl text-center mt-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#817e7e] via-white to-[#817e7e]">Mr.Techy ( Lead Innovator )</h2>
    <h3 className="text-gray-300 text-center text-lg md:text-xl mt-4 ">
      Speech Synthesis | Gen AI | NLP | Machine Transition
    </h3>
  </div>



        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
          <h1 className="text-2xl md:text-3xl mb-4 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#817e7e] via-white to-[#817e7e]">Major focus on human-computer Interaction</h1>
          <hr className="bg-gradient-to-tr from-black via-white to-black h-[0.3px] w-3/4 md:w-full border-none shadow shadow-gray-400 mb-4" />
         
          <p className="text-gray-300 text-justify text-lg md:text-xl mt-4 ">
            Passionate about empowering students to build real-world AI solutions. On a mission to bridge the gap
            between academic knowledge and industry demands through innovation and mentorship.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mainprofile;
