import { Link } from "react-router-dom";
import pic1 from "../assets/ai_product_dev.jpg";
import pic2 from "../assets/contact.jpg";

const Specialization = () => {
  return (
    <div className="px-4 md:px-12 lg:px-24 py-8 text-white">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium text-center m-4 lg:mb-10">
        Our Services
      </h1>

      {/* AI Product Development Section */}
      <div
        className="relative mb-6 rounded-2xl"
        style={{
          background:
            "conic-gradient(from 0deg, #2D0C57 0deg, #2D0C57 10deg, #2D0C57 50deg, white 70deg, #2D0C57 80deg, #2D0C57 93deg, white 110deg, #2D0C57 130deg, #2D0C57 150deg, #2D0C57 170deg, #2D0C57 190deg, #2D0C57 230deg, white 240deg, #2D0C57 260deg, #2D0C57 280deg, white 300deg, #2D0C57 310deg, #2D0C57 360deg)",
        }}
      >
        <div className="p-[2px] rounded-2xl">
          <div className="bg-[#0b0314] rounded-2xl p-7 flex flex-col lg:flex-row items-center">
            <div className="order-2 lg:order-1 lg:w-8/12 lg:pr-4 mt-4 lg:mt-0">
              <h1 className="text-2xl md:text-3xl mb-4 font-semibold text-left text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-white to-[#d7d4d4]">
                AI Product Development
              </h1>
              <p className="mt-2 text-lg md:text-lg mb-4 font-medium text-justify text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-white to-[#d7d4d4]">
                We specialize in building AI solutions across Speech AI, Computer Vision, Generative AI, and Customized Chatbots. Our focus is on developing computationally efficient AI systems that solve real-world challenges effectively.
              </p>
            </div>
            <div className="order-1 lg:order-2 lg:w-1/3">
              <img
                src={pic1 || "/placeholder.svg"}
                alt="AI Product Development"
                className="rounded-lg w-80 h-52 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Empowering Businesses Section */}
      <div
        className="relative mb-6 rounded-2xl"
        style={{
          background:
            "conic-gradient(from 0deg, #2D0C57 0deg, #2D0C57 10deg, #2D0C57 50deg, white 70deg, #2D0C57 80deg, #2D0C57 93deg, white 110deg, #2D0C57 130deg, #2D0C57 150deg, #2D0C57 170deg, #2D0C57 190deg, #2D0C57 230deg, white 240deg, #2D0C57 260deg, #2D0C57 280deg, white 300deg, #2D0C57 310deg, #2D0C57 360deg)",
        }}
      >
        <div className="p-[2px] rounded-2xl">
          <div className="bg-[#0b0314] rounded-2xl p-7 flex flex-col lg:flex-row items-center">
            <div className="order-2 lg:order-1 lg:w-8/12 lg:pr-4 mt-4 lg:mt-0">
              <h1 className="text-2xl md:text-3xl mb-4 font-semibold text-left text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-white to-[#d7d4d4]">
                Empowering Businesses & Innovators
              </h1>
              <p className="mt-2 text-lg md:text-lg font-medium text-justify text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-white to-[#d7d4d4]">
                We work closely with clients to deliver custom AI solutions that drive their success. At the same time, we empower the next generation of AI innovators through free live webinars and workshops—giving students hands-on experience and the skills they need to excel in AI.
              </p>
            </div>
            <div className="order-1 lg:order-2 lg:w-1/3">
              <img
                src={pic2 || "/placeholder.svg"}
                alt="Student Collaboration and Mentorship"
                className="rounded-lg w-80 h-52 mx-auto border-4 border-[#2D0C57]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Creative Button */}
      <div className="flex justify-center mt-8">
        <Link
          to="/our-work"
          className="relative px-6 py-3 text-lg font-semibold text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-600 hover:shadow-indigo-500/50"
        >
          <span className="relative inset-0 flex items-center justify-center">
           Explore Our Work
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Specialization;
