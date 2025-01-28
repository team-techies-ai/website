import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Box } from '@mui/material';
import { useForm } from "react-hook-form";
import logo from "../assets/Untitled design 1.svg";
import HamburgerIcon from './HamburgerIcon';
import { Savesubscribe } from "../utils/api";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { Loader2 } from "lucide-react"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openSubscribeModal = () => {
    setIsSubscribeModalOpen(true);
  };

  const closeSubscribeModal = () => {
    setIsSubscribeModalOpen(false);
  };

  const notifySuccess = () => {
      toast.success("Form submitted successfully!", {
        style: {
          background: "#7203FF", // Success color
          color: "white",
        },
        position: "bottom-right", // Toast position
        autoClose: 3000,
      });
    };
  
    const notifyError = () => {
      toast.error("Error submitting form!", {
        style: {
          background: "orange", // Error color
          color: "white",
        },
        position: "bottom-right", // Toast position
        autoClose: 3000,
      });
    };

    const {
       register,
       handleSubmit,
       formState: { errors },
       reset,
     } = useForm()
   
     const onSubmit = async (data) => {
      try {
        await Savesubscribe(data)
        notifySuccess();
        console.log("Subscription Data Submitted:", data)
        reset()
      } catch (error) {
        notifyError();
        console.error("Error saving subscription:", error)
      } 
    }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full backdrop-filter backdrop-blur-lg bg-opacity-30 bg-[#0b0314] h-[100px] mt-4 text-white z-50 border border-none rounded-3xl px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src={logo || "/placeholder.svg"} alt="logo" className="w-20"/>
            <span className="text-2xl font-bold">TEAM TECHIES</span>
          </div>
          
          <div className="hidden lg:block">
            <div className="border-2 border-white px-4 py-2 rounded-full">
              <ul className="flex gap-8 cursor-pointer"> 
                <li><Link to="/">Home</Link></li>
                <li><Link to="/team">Our Team</Link></li>   
                <li><Link to="/about">About Us</Link></li>            
                <li><Link to="/contact">Need AI Solution?</Link></li>
              </ul>
            </div>
          </div>

          <div className="hidden lg:flex gap-4 mr-6">
            <button 
              className="bg-red-500 text-white border-2 border-red-500 px-8 py-2 rounded-3xl p-[2px] m-1"
              onClick={openSubscribeModal}
            >
              Subscribe to Newsletter
            </button>
          </div>

          <HamburgerIcon isOpen={isMenuOpen} toggle={toggleMenu} />
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-y-0 right-0 w-64  bg-[#3D1C67] transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 flex flex-col justify-start pt-20`}>
          <button 
            className="absolute top-4 right-4 text-white"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col items-center bg-[#3D1C67] pb-6">
            <ul className="text-center space-y-8 mb-8">
              <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/team" onClick={toggleMenu}>Our Team</Link></li>
              <li><Link to="/blog" onClick={toggleMenu}>About Us</Link></li>
              <li><Link to="/contact" onClick={toggleMenu}>Need AI Solution?</Link></li>
            </ul>
            <button 
              className="bg-red-500 text-white border-2 px-4 py-1 rounded-2xl"
              onClick={() => {
                toggleMenu();
                openSubscribeModal();
              }}
            >
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </nav>

      {/* Subscribe Modal */}
      <Modal
        open={isSubscribeModalOpen}
        onClose={closeSubscribeModal}
        aria-labelledby="subscribe-modal-title"
        aria-describedby="subscribe-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
          <div className="min-h-screen flex items-center justify-center text-white">
            <div className="bg-[#0b0314] backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md mt-32 border border-white">
            <button onClick={closeSubscribeModal} className="absolute top-2 right-2 text-white hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
              <h2 className="text-3xl font-bold mb-6 text-center">Subscribe</h2>
             
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                  <div>
                    <input
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters long",
                        },
                      })}
                      id="name"
                      placeholder="Enter your name"
                      className="w-full p-3 bg-[#0b0314] text-white border rounded-md outline-none relative z-10 placeholder-gray-500"
                    />
                    {errors.name && <span className="text-red-400 text-sm">{errors.name.message}</span>}
                  </div>

                  <div>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email address",
                        },
                      })}
                      id="email"
                      placeholder="Enter your email"
                      className="w-full p-3 bg-[#0b0314] text-white border rounded-md outline-none relative z-10 placeholder-gray-500"
                    />
                    {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}
                  </div>

                  <button
                    type="submit"
                    className="w-full p-3 bg-[#7203FF] text-white font-bold rounded hover:bg-[#7654a1] transition"
                  >
                    Subscribe
                  </button>
                </form>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;

