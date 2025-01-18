import mainprofile from "../assets/Rectangle.jpg"

const Mainprofile = () => {
  return (
    <div className="relative p-4 md:p-6 rounded-xl w-full max-w-[1000px] mx-auto my-8">
      <div
        className="absolute inset-0 rounded-xl p-[2px]"
        style={{
          background:
            'conic-gradient(from 0deg, #2D0C57 0deg, #2D0C57 10deg, #2D0C57 50deg, white 70deg, #2D0C57 80deg, #2D0C57 93deg, white 110deg, #2D0C57 130deg, #2D0C57 150deg, #2D0C57 170deg, #2D0C57 190deg, #2D0C57 230deg, white 240deg, #2D0C57 260deg, #2D0C57 280deg, white 300deg, #2D0C57 310deg, #2D0C57 360deg)',
        }}
      >
        <div className="h-full w-full bg-[#0b0314] rounded-xl"></div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-8 pt-8">
        <div className="text-center md:text-left">
          <div className="h-[200px] w-[200px] md:h-[250px] md:w-[250px] rounded-full border-4 border-[#2D0C57] shadow-2xl shadow-gradient overflow-hidden mx-auto md:mx-0">
            <img
              src={mainprofile || "/placeholder.svg"}
              alt="Profile"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <h1 className="text-xl mt-4">Mr.Techy ( Lead Innovator )</h1>
          <h2 className="font-thin">Speech Synthesis | Gen AI |</h2>
          <h2 className="font-thin">NLP | Machine Transition</h2>
        </div>

        <div className="hidden md:block h-[200px] w-[2px] bg-white/20 my-8"></div>

        <div className="text-center md:text-left mt-8 md:mt-0 max-w-lg">
          <h1 className="text-2xl md:text-3xl mb-4">Major focus on human computer Interaction</h1>
          <hr className="bg-gradient-to-tr from-black via-white to-black h-[0.3px] mx-8 md:mx-0 border-none shadow shadow-gray-400"/> 
          <p className="text-gray-300 font-thin text-lg md:text-xl mt-4">
            Passionate about empowering students to build real-world AI solutions. On Mission to bridge the Gap between academic knowledge and industry demands through innovation and mentorship.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mainprofile;