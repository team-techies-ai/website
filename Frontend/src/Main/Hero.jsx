import React from 'react';
import { Link } from "react-router-dom";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Hero = () => {
  return (
    <div className=" mx-auto sm:px-6  pt-[80px] lg:pt-[120px] overflow-hidden">
      {/* Top right blowing gradient */}
      <div className="absolute top-0 right-0 w-[250px] h-[250px] opacity-30 animate-blow-gradient">
        <div className="w-full h-full bg-gradient-to-br from-[#8C81FF] via-[#A0A0A0] to-transparent blur-3xl" />
      </div>

      {/* Bottom left blowing gradient */}
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] opacity-30 animate-blow-gradient">
        <div className="w-full h-full bg-gradient-to-tl from-[#1000C1] via-[#8C81FF] to-transparent blur-3xl" />
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between">
        {/* Lottie Animation */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="w-full max-w-[600px] mx-auto lg:ml-auto">
            <DotLottieReact
              src="https://lottie.host/bcea4257-8c6e-4956-aa7f-9155acc439ca/vHPaDTzOdq.lottie"
              loop
              autoplay
              className="w-full aspect-square rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Text content section */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left lg:pr-8 lg:ml-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium mb-4 tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#89a3d3] via-white to-[#035bff] leading-tight">
              Helping Businesses Grow with Custom AI Solutions
            </span>
          </h1>
          <p className="text-base sm:text-lg font-medium pl-2 pr-2 mb-6 text-lg md:text-xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-white to-[#817e7e]">
          We develop AI solutions that solve real business problems, making your work easier and more productive.
          </p>
          {/* <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link
              to="about"
              className="bg-white text-black border rounded-2xl px-6 py-3 hover:bg-opacity-90 transition-colors lg:w-auto sm:w-0.5 text-center"
            >
              What we do ?
            </Link>
            <Link
              to="jointeam"
              className="bg-black text-white border rounded-2xl px-6 py-3 hover:bg-opacity-90 transition-colors lg:w-auto sm:w-0.5 text-center"
            >
              Join Team
            </Link>
          </div> */} 
          <div className="flex flex-row justify-center  lg:justify-start gap-4">
        <Link
          to="about"
          className="bg-white font-medium text-black border rounded-xl px-2 py-3 hover:bg-opacity-90 transition-colors lg:w-auto text-center"
        >
          Who are we ?
        </Link>
        <Link
          to="our-work"
          className="bg-black text-white font-medium border rounded-2xl px-4 py-3 hover:bg-opacity-90 transition-colors lg:w-auto text-center"
        >
          Our Work
        </Link>
        
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
