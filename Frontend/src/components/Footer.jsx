import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-screen-lg mx-auto text-white p-6 sm:p-8 md:p-10 mt-10 sm:mt-16 md:mt-20">
      {/* Footer Sections in a Single Row */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-12">
        {/* Copyright Section */}
        <div className="text-center sm:text-left">
          <p className="font-light text-lg sm:text-xl md:text-xl text-gray-300">
            Copyrights &copy; Team Techies 2024
          </p>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 text-center sm:text-left">
          <h4 className="font-light text-lg sm:text-xl md:text-xl text-gray-300">Follow Us</h4>
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
          <a href="/about" className="font-light text-lg sm:text-xl md:text-xl text-gray-300 hover:underline">
            About Us
          </a>
          <a href="/privacy-policy" className="font-light text-lg sm:text-xl md:text-xl text-gray-300 hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
