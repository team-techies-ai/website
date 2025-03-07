"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { UserCircle, LogOut, Menu, User } from "lucide-react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useAuth } from '../context/AuthContext'
import logo from "../assets/Untitled design 1.svg"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    setIsProfileMenuOpen(false)
    toast.success("Logged out successfully!", {
      style: {
        background: "#7203FF",
        color: "white",
      },
      position: "bottom-right",
      autoClose: 3000,
    })
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full backdrop-filter backdrop-blur-lg bg-opacity-30 bg-[#0b0314] h-[100px] text-white z-50 border border-none rounded-3xl px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Link to="/">
              <img src={logo || "/placeholder.svg"} alt="logo" className="w-20" />
            </Link>
            <span className="text-2xl font-bold">
              <Link to="/">TEAM TECHIES</Link>
            </span>
          </div>

          <div className="hidden lg:block">
            <div className="border-2 border-white px-4 py-2 rounded-full">
              <ul className="flex gap-8 cursor-pointer">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/team">Our Team</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Need AI Solution?</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden lg:flex gap-4 mr-6">
            {user ? (
              <div className="relative">
                <button
                  onClick={toggleProfileMenu}
                  className="flex items-center space-x-2 text-white px-4 py-1 rounded-2xl hover:bg-white/10"
                >
                  <User className="h-5 w-5" />
                  <span>{user.name}</span>
                </button>
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link 
                      to="/profile" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <UserCircle className="mr-2" size={16} />
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <LogOut className="mr-2" size={16} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex justify-center">
                <Link
                  to="/register"
                  className="relative px-6 py-3 text-lg font-semibold text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-600 hover:shadow-indigo-500/50"
                >
                  <span className="relative inset-0 flex items-center justify-center">
                    Join Community
                  </span>
                </Link>
              </div>
            )}
          </div>

          <button className="lg:hidden" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-y-0 right-0 w-64 bg-[#3D1C67] transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 flex flex-col justify-start pt-10`}
        >
          <button className="absolute top-4 right-4 text-white" onClick={toggleMenu}>
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
          <div className="flex flex-col items-center bg-[#3D1C67] pb-6">
            <ul className="text-center space-y-8 mb-8">
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/team" onClick={toggleMenu}>
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMenu}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu}>
                  Need AI Solution?
                </Link>
              </li>
            </ul>
            {user ? (
              <>
                <Link to="/profile" onClick={toggleMenu} className="flex items-center gap-2 mb-4">
                  <User className="h-5 w-5" />
                  <button className="bg-red-500 text-white border-2 px-4 py-1 rounded-2xl">Profile</button>
                </Link>
                <button
                  onClick={() => {
                    handleLogout()
                    toggleMenu()
                  }}
                  className="bg-red-500 text-white border-2 px-4 py-1 rounded-2xl flex items-center gap-2"
                >
                  <LogOut className="h-5 w-5" />
                  Logout
                </button>
              </>
            ) : (
              <div className="flex justify-center">
                <Link
                  to="/register"
                  className="relative px-6 py-3 text-lg font-semibold text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-600 hover:shadow-indigo-500/50"
                  onClick={toggleMenu}
                >
                  <span className="relative inset-0 flex items-center justify-center">
                    Join Community
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
