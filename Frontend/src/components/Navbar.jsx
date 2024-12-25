import { Link } from "react-router-dom"
import logo from "../assets/Untitled design 1.svg"
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4   backdrop-filter backdrop-blur-lg bg-opacity-30">
        <div className="flex gap-2 items-center">
            <img src={logo} alt="logo" className="w-20"/>
            <span className="text-2xl font-bold">TEAM TECHIES</span>
        </div>
        <div className="border border-white p-2 rounded-2xl">
            <ul className="flex gap-8 mouse-pointer"> 
                <li><Link to="/">Home</Link></li>
                <li><Link to="/team">Our Team</Link></li>   
                <li><Link to="/blog">Blogs</Link></li>            
                <li><Link to="/contact">Contact us</Link></li>
                
               
            </ul>
        </div>
        <div className="flex gap-4">
            <button>Sign in</button>
            <button>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar