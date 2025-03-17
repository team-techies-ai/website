import studentCollabImg from "../assets/StudentCollaboration.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const StudentCollaboration = () => {
  return (
    <div className="px-6 md:px-12 lg:px-24 py-12 bg-[#0b0314] text-white flex flex-col lg:flex-row items-center gap-10">
      {/* Left Side - Content */}
      <motion.div
        className="lg:w-9/12 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#ffffff] via-white to-[#d7d4d4] bg-clip-text text-transparent">
        Turning AI Enthusiasts into
        </h1>
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#ffffff] via-white to-[#d7d4d4] bg-clip-text text-transparent">
    AI Innovators
        </h1>
        <p className="mt-6 text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-white to-[#d7d4d4] leading-relaxed">
          At <span className="font-bold text-indigo-400">Team Techies</span>, we believe in the power of <b>Teamwork</b>. 
          Our platform enables students and professionals to <b>collaborate, share ideas, and learn </b> 
          from each other in Research & Development of <b>Innovative AI Solutions</b>.  
        </p>

        <p className="mt-4 text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-white to-[#d7d4d4]">
          Join hands with AI enthusiasts, researchers, and tech leaders to innovate 
          and grow together
        </p>

        {/* Creative Button */}
        
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="lg:w-1/3 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={studentCollabImg || "/placeholder.svg"}
          alt="Student Collaboration"
          className="rounded-2xl w-80 h-80 lg:w-96 lg:h-64 shadow-lg shadow-purple-500/50"
        />


        
      </motion.div>

    </div>
    
  );
};

export default StudentCollaboration;
