import React from "react";
import img from "../assets/Contact.png"; // Your team image

const About = () => {
  return (
    <div className="container mx-auto px-4 pt-[120px] lg:pt-[150px]">
      <div className="text-center ">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-wide">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#035bff] via-white to-[#4c70b3] leading-tight">
            About Team Techies
          </span>

          
        </h1>
        {/* <p className="text-lg sm:text-xl font-medium">
          Empowering the next generation of AI Innovators.
        </p> */}
      </div>

      {/* Who We Are Section */}
      <div className="mb-12 flex flex-col lg:flex-row items-center justify-start">
        <div className="w-full lg:w-3/5 mb-8 lg:mb-0">
          <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4">Who Are We?</h2>
          <p className="text-base sm:text-lg mb-4">
          Team Techies is a group of AI innovators dedicated to building solutions that enhance human productivity. We focus on researching, developing, and implementing AI strategies to help businesses overcome challenges and grow.
          </p> <p className="text-base sm:text-lg mb-4">By solving real-world problems, we build smart AI solutions while involving students in the process. They work with our team, gain practical skills, and get real industry experience, helping them become future AI experts.</p>
          </div>
        <div className="w-full lg:w-1/3 ">
          <img
            src={img || "/placeholder.svg"}
            alt="Team Techies"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Mission Section */}
<div className="mb-12">
  <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Mission</h2>
  <ul className="list-disc pl-5 text-base sm:text-lg">
    <li><strong>Innovate: </strong>We develop cutting-edge AI solutions that transform businesses, making work smarter and more efficient.</li>
    <li><strong>Empower: </strong>Our goal is to train 1 million students in AI skills over the next three years, giving them real experience to prepare for the future.</li>
  </ul>
</div>


    </div>
  );
};

export default About;
