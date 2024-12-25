import gifAi from "../assets/Animation - 1735111996513.gif"
import img from "../assets/1.png"
const Hero = () => {
  return (
    <div className="flex">
        <div>
            <h1 className="text-5xl font-bold gap-2">A Game changing platform for AI  Inovators</h1>
            <p>Empowering Stundents and Profesional to Build the Future of AI </p>
            <p>Join commuinty of passionate minds developing Inovative AI</p>
            <p>Soultions for real world problems.</p>
            <button>Get Started</button>
            <button>About us</button>

        </div>
        <div className="">
            <img  src={gifAi} alt="AI" className="ml-40 h-[300px]" />
            <img  src={img} alt="AI" />
            

        </div>

    </div>
  )
}

export default Hero