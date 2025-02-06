import pic1 from "../assets/ai_product_dev.jpg";
import pic2 from "../assets/contact.jpg";

const Specialization = () => {
  return (
    <div className="px-4 md:px-12 lg:px-24 py-8 text-white">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium text-center m-4  lg:mb-10">
        Our Services
      </h1>

      <div
        className="relative mb-6 rounded-2xl"
        style={{
          background:
            'conic-gradient(from 0deg, #2D0C57 0deg, #2D0C57 10deg, #2D0C57 50deg, white 70deg, #2D0C57 80deg, #2D0C57 93deg, white 110deg, #2D0C57 130deg, #2D0C57 150deg, #2D0C57 170deg, #2D0C57 190deg, #2D0C57 230deg, white 240deg, #2D0C57 260deg, #2D0C57 280deg, white 300deg, #2D0C57 310deg, #2D0C57 360deg)',
        }}
      >
        <div className="p-[2px] rounded-2xl">
          <div className="bg-[#0b0314] rounded-2xl p-7 flex flex-col lg:flex-row items-center">
            <div className="order-2 lg:order-1 lg:w-2/3 lg:pr-4 mt-4 lg:mt-0">
              <h1 className="text-2xl md:text-3xl mb-4 font-semibold text-justify text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-white to-[#817e7e]">
                AI Product Development
              </h1>
              <p className="mt-2  text-lg  md:text-lg mb-4 font-small text-justify text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-white to-[#817e7e]">
                We specialize in building AI solutions across Speech AI, Computer Vision, Chatbots, and NLP. Our focus is on developing computationally efficient AI systems that solve real-world challenges effectively.
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

      <div
        className="relative mb-6 rounded-2xl"
        style={{
          background:
            'conic-gradient(from 0deg, #2D0C57 0deg, #2D0C57 10deg, #2D0C57 50deg, white 70deg, #2D0C57 80deg, #2D0C57 93deg, white 110deg, #2D0C57 130deg, #2D0C57 150deg, #2D0C57 170deg, #2D0C57 190deg, #2D0C57 230deg, white 240deg, #2D0C57 260deg, #2D0C57 280deg, white 300deg, #2D0C57 310deg, #2D0C57 360deg)',
        }}
      >
        <div className="p-[2px] rounded-2xl">
          <div className="bg-[#0b0314] rounded-2xl p-7 flex flex-col lg:flex-row items-center">
            <div className="order-2 lg:order-1 lg:w-2/3 lg:pr-4 mt-4 lg:mt-0">
            <h1 className="text-2xl md:text-3xl mb-4 font-semibold text-justify text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-white to-[#817e7e]">

                Empowering Students
              </h1>
              <p className="mt-2 text-lg md:text-lg mb-4 font-small text-justify text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-white to-[#817e7e]">

                We’re dedicated to spreading knowledge about AI through webinars and workshops. These sessions are designed to help students understand and dive into the world of AI, empowering them with the skills needed to excel in this fast-growing field.
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
    </div>
  );
};

export default Specialization;
