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
        <div className="w-full lg:w-3/5 mb-8 lg:mb-0">
          <h2 className="text-2xl sm:text-3xl font-semibold mt-10 mb-4">Who Are We?</h2>
          <p className="text-base sm:text-lg mb-4">
          Team Techies is a group of innovators passionate about building AI solutions that enhance human productivity. Our primary focus is on researching and developing AI solutions that help businesses overcome challenges and grow. We specialize in studying real-world business problems, identifying the right AI strategies, and creating efficient solutions tailored to our client needs.
         </p> <p className="text-base sm:text-lg mb-4">But we’re not just an AI solutions company—we’re a team of curious learners, creative builders, and problem-solvers. We believe the best way to learn is through hands-on experience, so we work on real AI challenges that help businesses while also giving students practical knowledge. As we create AI solutions for companies, we also help students gain real-world experience, shaping them into future AI experts.
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
  <ul className="list-disc pl-5 text-base sm:text-lg">
    <li><strong>Innovate:</strong> We build smart, efficient AI solutions for our clients that boost human productivity.</li>
    <li><strong>Empower:</strong> We’re on a mission to equip 1 million students with hands-on AI skills over the next three years, preparing them for the future.</li>
  </ul>
</div>


    </div>
  );
};

export default About;
