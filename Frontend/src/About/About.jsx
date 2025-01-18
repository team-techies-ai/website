import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/Untitled design 1.svg"; // Your team image
import gradient1 from "../assets/Gradients.png";  // Your gradient image

const About = () => {
  return (
    <div className="container mx-auto px-4 pt-[120px] lg:pt-[150px]">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-medium mb-4 tracking-wide">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#035bff] via-white to-[#4c70b3] leading-tight">
            About Team Techies
          </span>
        </h1>
        <p className="text-lg sm:text-xl font-medium">
          Empowering the next generation of tech innovators through collaboration, AI, and Web Development.
        </p>
      </div>

      {/* Who We Are Section */}
      <div className="mb-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-base sm:text-lg mb-4">
            Team Techies is a group of passionate students and professionals who come together to explore and innovate in the world of technology. Our goal is to learn, grow, and create amazing solutions with Artificial Intelligence (AI) and Web Development. We're here to make a real impact and help each other succeed in the tech world.
          </p>
          <p className="text-base sm:text-lg">
            We focus on continuous learning, innovation, and collaboration to create AI-driven solutions and build impactful web applications.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src={img || "/placeholder.svg"}
            alt="Team Techies"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* What We Do Section */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">What We Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border-2 border-[#2D0C57]">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">AI Development</h3>
            <p className="text-base sm:text-lg">
              We create smart solutions using AI, like speech processing tools, accent conversion systems, and much more.
            </p>
          </div>
          <div className="p-6 rounded-2xl border-2 border-[#2D0C57]">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Web Development</h3>
            <p className="text-base sm:text-lg">
              We design and build user-friendly websites and apps that solve real problems for businesses and people.
            </p>
          </div>
          <div className="p-6 rounded-2xl border-2 border-[#2D0C57]">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Collaborative Projects</h3>
            <p className="text-base sm:text-lg">
              We work together with our clients on exciting projects to deliver great results.
            </p>
          </div>
          <div className="p-6 rounded-2xl border-2 border-[#2D0C57]">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Learning & Innovation</h3>
            <p className="text-base sm:text-lg">
              We provide opportunities for students and professionals to learn by working on hands-on projects in AI, machine learning, web development, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Our Collaborations Section */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Our Collaborations</h2>
        <p className="text-base sm:text-lg mb-4">
          We are proud to collaborate with two amazing clients in the tech industry. These partnerships bring us exciting new projects where our team gets to work on real-world challenges. These collaborations help our team gain valuable experience, create top-notch solutions, and contribute to the growing world of AI.
        </p>
      </div>

      {/* Why Join Us Section */}
      <div className="mb-12 bg-[#2D0C57] text-white p-8 rounded-2xl">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Why Join Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex items-center">
            <p className="text-lg sm:text-xl">
              <strong>Work with Amazing People:</strong> Join a community of passionate people who love creating and learning together.
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-lg sm:text-xl">
              <strong>Get Real Experience:</strong> Work on projects that matter and make a difference.
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-lg sm:text-xl">
              <strong>Grow Your Career:</strong> Get the chance to learn, develop new skills, and take your career to the next level.
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-lg sm:text-xl">
              <strong>Build Connections:</strong> Meet and collaborate with other talented people in the tech industry.
            </p>
          </div>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Our Vision</h2>
        <p className="text-base sm:text-lg">
          Our mission is simple: to empower people to build the future of AI and technology. By creating a space for learning and collaboration, we want to help the next generation of innovators create tech solutions that make a real difference in the world.
        </p>
      </div>

      {/* What We Offer Section */}
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border-2 border-[#2D0C57]">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">AI Solutions</h3>
            <p className="text-base sm:text-lg">
              We work on a wide range of AI projects, from speech recognition to accent conversion and much more.
            </p>
          </div>
          <div className="p-6 rounded-2xl border-2 border-[#2D0C57]">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Web Development</h3>
            <p className="text-base sm:text-lg">
              We provide full-stack web development services, focusing on simple, user-friendly designs that work.
            </p>
          </div>
          <div className="p-6 rounded-2xl border-2 border-[#2D0C57]">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Collaboration</h3>
            <p className="text-base sm:text-lg">
              Work on real-world projects with real clients, solving actual problems.
            </p>
          </div>
          <div className="p-6 rounded-2xl border-2 border-[#2D0C57]">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Learning & Growth</h3>
            <p className="text-base sm:text-lg">
              Whether you’re a student or professional, we help you learn new skills and develop your career.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <Link
          to="/jointeam"
          className="bg-[#035bff] text-white border rounded-2xl px-6 py-3 hover:bg-opacity-90 transition-colors"
        >
          Join Team Techies
        </Link>
      </div>
    </div>
  );
};

export default About;