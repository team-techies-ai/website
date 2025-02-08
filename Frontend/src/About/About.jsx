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
        <p className="text-lg sm:text-xl font-medium">
          Empowering the next generation of AI Innovators.
        </p>
      </div>

      {/* Who We Are Section */}
      <div className="mb-12 flex flex-col lg:flex-row items-center justify-start">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4">Who Are We?</h2>
          <p className="text-base sm:text-lg mb-4">
            Team Techies is a group of passionate students and professionals who come together to explore and innovate in the world of Artificial Intelligence. Our focus is on continuous learning, innovation, and collaboration to develop AI-driven solutions that enhance human productivity. We're here to make a real impact in society with our innovation and help each other succeed in the AI world.
          </p>
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
        <p className="text-base sm:text-lg">
          To build innovative and efficient AI solutions for our clients that enhances human productivity and to empower 1 million students with AI skills over the next three years.
        </p>
      </div>

      {/* What We Do Section */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">What We Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border-2 border-[#2D0C57]">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">AI Product Development</h3>
            <p className="mt-2  text-lg  md:text-lg mb-4 font-small text-justify text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-white to-[#817e7e]">
                We specialize in building AI solutions across Speech AI, Computer Vision, Chatbots, and NLP. Our focus is on developing computationally efficient AI systems that solve real-world challenges effectively.
            </p>
          </div>
          <div className="p-6 rounded-2xl border-2 border-[#2D0C57]">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Student Empowerment</h3>
            <p className="mt-2 text-lg md:text-lg mb-4 font-small text-justify text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-white to-[#817e7e]">
              We’re dedicated to spreading knowledge about AI through webinars and workshops. These sessions are designed to help students understand and dive into the world of AI, empowering them with the skills needed to excel in this fast-growing field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
