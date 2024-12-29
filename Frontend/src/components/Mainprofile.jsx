import mainprofile from "../assets/Rectangle.jpg"
const Mainprofile = () => {
  return (
    <div className="relative p-6 rounded-xl h-[400px] w-[1000px] m-8 ml-32">
      <div
        className="absolute inset-0 rounded-xl p-[2px]"
        style={{
          background:
            'conic-gradient(from 0deg, #2D0C57 0deg, #2D0C57 10deg, #2D0C57 50deg, white 70deg, #2D0C57 80deg, #2D0C57 93deg, white 110deg, #2D0C57 130deg, #2D0C57 150deg, #2D0C57 170deg, #2D0C57 190deg, #2D0C57 230deg, white 240deg, #2D0C57 260deg, #2D0C57 280deg, white 300deg, #2D0C57 310deg, #2D0C57 360deg)',
        }}
      >
        <div className="h-full w-full bg-[#0b0314] rounded-xl"></div>
      </div>

      <div className="relative flex  justify-center -mt-12">
        <div>
        <div className="h-[200px] w-[250px] rounded-full border-4 border-[#2D0C57] mt-20 shadow-2xl shadow-gradinet overflow-hidden ml-3">
          <img
            src={mainprofile}
            alt="Profile"
            className="h-full w-full object-cover rounded-full"
          />

        </div>
        <h1 className=" text-wrap text-lg m-3"> Mr.Techy ( Lead Innovator )</h1>
        <h1 className="m-1 ml-5 font-thin">Speech Synnthsis | Gen AI |</h1>
        <h1 className="m-1 ml-5 font-thin">NLP | Machine Transistion </h1>

        </div>
        <div className="h-[200px] w-[2px] bg-white/20 mt-32 ml-32 m-1"></div>

      <div className=" text-center mt-20 ">
        <h1 className="text-3xl m-5">Major focus on human computer Interaction </h1>
        <hr className="bg-gradient-to-tr from-black via-white to-black 0 h-[0.3px] ml-32 mr-32 border-none shadow shadow-gray-400"/> 
        <p className="text-gray-300 font-thin text-xl m-5  " >
            Passionate about empowering students to build real-world AI solutions .On Mission to bridge the Gap between academic knowledge and industry demands through innovation and mentorship.        </p>
      </div>
      </div>

    </div>
  );
};

export default Mainprofile;
