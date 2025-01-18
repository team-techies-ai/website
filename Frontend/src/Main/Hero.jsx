import img from "../assets/ai prod dev.gif"
import { Link } from "react-router-dom"
const Hero = () => {
  return (
    <div className="flex mt-32">
        <div className="  p-10 ml-32 w-[700px]">

            <div className="text-6xl font-medium m-4 text-balance tracking-wide">
            <h1 className="p-2 m-1 text-transparent bg-clip-text bg-gradient-to-r from-[#035bff] via-white to-[#4c70b3] "  >A Game changing platform for AI  Inovators</h1>

             
            </div>
            <p className="text-xl font-medium p-2">Empowering Stundents and Profesional to Build the Future of AI 
            Join commuinty of passionate minds developing Inovative AI
            Soultions for real world problems.</p>
            <button className=" bg-white  text-black border rounded-2xl p-[2px] m-1"> <span>&nbsp;</span> <Link to="jointeam"> Join Team Techies </Link>  <span>&nbsp;</span>  </button>
            <button className=" bg-black  text-white border rounded-2xl p-1 m-1">About us</button>
            
    

        </div>
        <div>
          <img src={img} />
        </div>


    </div>
  )
}

export default Hero