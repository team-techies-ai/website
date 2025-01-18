
import { Link } from 'react-router-dom';
import logo from "../assets/Untitled design 1.svg"


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-filter backdrop-blur-lg bg-opacity-30 bg-[#0b0314] h-[100px] mt-4 text-white z-50  border border-none rounded-3xl">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
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
       <div className="flex gap-4 mr-6">
       <button className="bg-red-500 text-white border rounded-2xl p-[2px] m-1">
  <span>
    <span>&nbsp;</span>
  </span>
  <Link to={"/subscribe"}>
  Subscribe</Link> <span>&nbsp;</span>
</button>

            <button className=" bg-white  text-black border rounded-2xl p-[2px] m-1"> <span><span>&nbsp;</span></span><Link to="/signin"> Sign in </Link><span>&nbsp;</span></button>
            <button className=" bg-black  text-white border rounded-2xl p-1 m-1" > <span>&nbsp;</span> <Link to="/signup"> Sign up </Link> <span>&nbsp;</span></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;