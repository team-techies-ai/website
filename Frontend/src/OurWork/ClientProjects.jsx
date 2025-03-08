import React from "react";
import pic1 from "../assets/benfranklin.png" ;
import pic2 from "../assets/bharathNyayMithra.png";
const ClientProjects = () => {
  return (
    <div className="container mx-auto px-4 pt-[120px] lg:pt-[150px]">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-wide">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#035bff] via-white to-[#4c70b3] leading-tight">
            Our Client Projects
          </span>
        </h1>
        <p className="text-lg sm:text-xl font-medium">
          Innovative AI solutions for real world challenges
        </p>
      </div>

      {/* Ben Franklin Client Project */}
      <div className="mb-16 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-4/5 p-4">
          <h2 className="text-3xl font-semibold mb-4">Ben Franklin - Spectacle Lens Defects Detection System </h2>
          <p className="text-lg mb-4 text-justify">
          Ben Franklin is India’s No.1 hospital-based optical chain, offering international-standard optical dispensing across the country.
          </p>
          <p className="text-lg mb-4 text-justify">In collaboration with Ben Franklin Company, Team Techies has developed an AI-powered solution for detecting and classifying defects in spectacle lenses. This advanced system automates quality inspection, ensuring precision in identifying imperfections. Our AI model not only detects and classifies defects but also measures their length, providing detailed insights for better quality control.
This innovative technology is set to transform quality assurance in the eyewear industry, making inspections faster, more accurate, and highly efficient.</p>
             
        </div>
        <div className="w-full lg:w-1/2 p-4">
        <img
            src={pic1 || "/placeholder.svg"}
            alt="Ben Franklin"
            className="rounded-lg w-100 h-80 mx-auto border-4 border-[#eeebf1]"
          />
        </div>
      </div>

      {/* AI Lawyer Project */}
      <div className="mb-16 flex flex-col lg:flex-row-reverse items-center">
        <div className="w-full lg:w-4/5 p-4">
          <h2 className="text-3xl font-semibold mb-4">Bharath Nyay Mithra: AI-Powered Legal Assistance for Indian Citizens</h2>
          <p className="text-lg mb-4">
          In partnership with a Supreme Court Advocate, Team Techies is developing Bharath Nyay Mithra, an AI-powered legal advocate that helps Indian citizens file legal applications in district courts, high courts, and the Supreme Court using speech input in their regional language.
Our system ensures accurate case filing by engaging users in a conversational AI-driven interaction instead of static form filling.          </p>
        <p className="text-lg mb-4">
        This AI-powered solution is a game-changer in the LegalTech industry, empowering citizens with an affordable and scalable alternative to traditional legal assistance.
        </p>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <img
            src={pic2 || "/placeholder.svg"}
            alt="Bharath Nyay Mithra"
            className="rounded-lg w-100 h-80 mx-auto border-4 border-[#eeebf1]"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-lg">
          Interested in working with us?{" "}
          <a href="/contact" className="text-blue-600 underline">
            Get in touch
          </a>
          !
        </p>
      </div>
    </div>
  );
};

export default ClientProjects;
