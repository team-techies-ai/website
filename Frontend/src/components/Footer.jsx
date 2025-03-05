import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-screen-lg mx-auto text-white p-6 sm:p-8 md:p-10 mt-5 sm:mt-8 md:mt-5">
      {/* Footer Sections in a Single Row */}
      <hr className="my-4 border-gray-300/30 backdrop-blur-sm" />
      <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-12">
        {/* Copyright Section */}
        <div className="text-center sm:text-left">
          <p className="font-small text-lg sm:text-lg md:text-lg text-gray-300">
            Copyrights &copy; 2025 Team Techies Innovations
          </p>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 text-center sm:text-left">
          <h4 className="font-small text-lg sm:text-lg md:text-lg text-gray-300">Follow Us</h4>
          <div className="flex gap-6 justify-center sm:justify-start">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-700" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-blue-400" />
            </a>
          </div>
        </div>

        {/* About Us and Privacy Policy Section */}
        <div className="flex flex-col sm:flex-row gap-6 text-center sm:text-left">
          {/* <a href="/about" className="font-small text-lg sm:text-lg md:text-lg text-gray-300 hover:underline">
            About Us
          </a> */}
          <a href="/jointeam" className="font-small text-lg sm:text-lg md:text-lg text-gray-300 hover:underline">
            Join Team
          </a>
          <a href="/privacy-policy" className="font-small text-lg sm:text-lg md:text-lg text-gray-300 hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
