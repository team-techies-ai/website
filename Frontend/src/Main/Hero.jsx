import React from 'react';
import { Link } from "react-router-dom";
import img from "../assets/ai prod dev.gif";  // Your main image (GIF or other)
import gradient1 from "../assets/Gradients.png";  // Your gradient image

const Hero = () => {
  return (
    <div className="container mx-auto px-4 pt-[120px] lg:pt-[150px]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between relative">
        {/* Image for mobile */}
        <div className="w-full lg:hidden order-1 mb-6">
          <img
            src={img || "/placeholder.svg"}
            alt="AI Production Development"
            className="w-1/2 h-auto rounded-lg shadow-lg" // Reduced size for mobile
          />
        </div>

        {/* Text content */}
        <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 text-center lg:text-left order-2 lg:order-1 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-6xl font-medium mb-4 tracking-wide">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#035bff] via-white to-[#4c70b3] leading-tight">
            A Game changing platform for AI Innovators
          </span>
        </h1>
          <p className="text-lg sm:text-l font-medium mb-6">
            Empowering Students and Professionals to Build the Future of AI.
            Join a community of passionate minds developing Innovative AI
            Solutions for real world problems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link
              to="jointeam"
              className="bg-white text-black border rounded-2xl px-6 py-3 hover:bg-opacity-90 transition-colors w-full sm:w-auto text-center"
            >
              Join Team Techies
            </Link>
            <Link
              to="/about"
              className="bg-black text-white border rounded-2xl px-6 py-3 hover:bg-opacity-90 transition-colors w-full sm:w-auto text-center"
            >
              About us
            </Link>
          </div>
        </div>

        {/* Image for larger screens */}
        <div className="w-full lg:w-1/2 hidden lg:block order-1">
          <img
            src={img || "/placeholder.svg"}
            alt="AI Production Development"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

    </div>
  );
};

export default Hero;


