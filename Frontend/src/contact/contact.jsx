import React, { useState } from "react"
import teamImage from "..//assets/Contact.png" 
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    contactNumber: "",
    date: null,
    time: null,
    title: "",
    description: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Here you would typically send the data to your backend
  }


  const handleDateChange = (date) => {
    setFormData({ ...formData, date })
  }

  const handleTimeChange = (time) => {
    setFormData({ ...formData, time })
  }


  return (
    <>
    <div className="text-center pt-24">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-wide">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#035bff] via-white to-[#4c70b3] leading-tight">
            Looking for an AI Solution
          </span>
        </h1>
        <p className="text-lg sm:text-xl font-medium">
          Empowering the next generation of AI Innovators.
        </p>
      </div>
    <div className="relative p-4 md:p-6 rounded-xl w-full max-w-[1100px] mx-auto mt-28 lg:mt-16">
      <div
        className="absolute inset-0 rounded-xl p-[2px]"
        style={{
          background:
            "conic-gradient(from 0deg, #2D0C57 0deg, #2D0C57 10deg, #2D0C57 50deg, white 70deg, #2D0C57 80deg, #2D0C57 93deg, white 110deg, #2D0C57 130deg, #2D0C57 150deg, #2D0C57 170deg, #2D0C57 190deg, #2D0C57 230deg, white 240deg, #2D0C57 260deg, #2D0C57 280deg, white 300deg, #2D0C57 310deg, #2D0C57 360deg)",
        }}
      >
        <div className="h-full w-full bg-[#0b0314] rounded-xl"></div>
      </div>

      <div className="relative flex flex-col lg:flex-row items-start justify-between gap-8 pt-8 h-full">
        {/* Left Section: Team Techies Motto and Services */}
        <div className="flex flex-col items-center lg:items-center text-center lg:text-left w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl mb-4 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#817e7e] via-white to-[#817e7e]">
            Team Techies
          </h2>
          <hr className="bg-gradient-to-tr from-black via-white to-black h-[0.3px] w-3/4 md:w-full border-none shadow shadow-gray-400 mb-4" />
          
          <div className="w-full h-[400px] md:h-[500px] lg:h-[400px] overflow-hidden rounded-lg">
            <DotLottieReact
              src="https://lottie.host/4cd53e43-7035-4329-bc67-e6f242fd88c2/twcEnTIhuL.lottie"
              autoplay
              className="w-full h-full object-contain"
            />
          </div>
      
        </div>

        {/* Right Section: Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full lg:w-1/2">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-md p-[1px]"
              style={{
                background:
                  "conic-gradient(from 0deg, #2D0C57 0deg, #2D0C57 10deg, #2D0C57 50deg, white 70deg, #2D0C57 80deg, #2D0C57 93deg, white 110deg, #2D0C57 130deg, #2D0C57 150deg, #2D0C57 170deg, #2D0C57 190deg, #2D0C57 230deg, white 240deg, #2D0C57 260deg, #2D0C57 280deg, white 300deg, #2D0C57 310deg, #2D0C57 360deg)",
              }}
            ></div>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#0b0314] text-white border rounded-md outline-none relative  placeholder-gray-500"
            />
          </div>
          <div className="relative">
            <div
              className="absolute inset-0 rounded-md p-[1px]"
              style={{
                background:
                  "conic-gradient(from 0deg, #2D0C57 0deg, #2D0C57 10deg, #2D0C57 50deg, white 70deg, #2D0C57 80deg, #2D0C57 93deg, white 110deg, #2D0C57 130deg, #2D0C57 150deg, #2D0C57 170deg, #2D0C57 190deg, #2D0C57 230deg, white 240deg, #2D0C57 260deg, #2D0C57 280deg, white 300deg, #2D0C57 310deg, #2D0C57 360deg)",
              }}
            ></div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#0b0314] text-white border rounded-md outline-none relative  placeholder-gray-500"
            />
          </div>
          <div className="relative">
            <div
              className="absolute inset-0 rounded-md p-[1px]"
              style={{
                background:
                  "conic-gradient(from 0deg, #2D0C57 0deg, #2D0C57 10deg, #2D0C57 50deg, white 70deg, #2D0C57 80deg, #2D0C57 93deg, white 110deg, #2D0C57 130deg, #2D0C57 150deg, #2D0C57 170deg, #2D0C57 190deg, #2D0C57 230deg, white 240deg, #2D0C57 260deg, #2D0C57 280deg, white 300deg, #2D0C57 310deg, #2D0C57 360deg)",
              }}
            ></div>
            <input
              type="tel"
              name="contactNumber"
              placeholder="Contact Number"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#0b0314] text-white border rounded-md outline-none relative placeholder-gray-500"
            />
          </div>
          <div className="flex gap-4">
                  <div className="relative flex-1 w-full">
                    <div
                      className="absolute inset-0 rounded-md p-[1px]"
                     
                    ></div>
                    <DatePicker
                      selected={formData.date}
                      onChange={handleDateChange}
                      dateFormat="MMMM d, yyyy"
                      placeholderText="Select date"
                      className="w-full p-3 bg-[#0b0314] text-white border rounded-md outline-none relative z-10"
                    />
                  </div>
                  <div className="relative flex ">
                    <div
                      className="absolute inset-0 rounded-md p-[1px] "
                    ></div>
                    <DatePicker
                      selected={formData.time}
                      onChange={handleTimeChange}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                      placeholderText="Select time"
                      className="w-full p-3 bg-[#0b0314] text-white border rounded-md outline-none relative z-10"
                    />
                  </div>
          </div>
          <div className="relative">
            <div
              className="absolute inset-0 rounded-md p-[1px]"
              style={{
                background:
                  "conic-gradient(from 0deg, #2D0C57 0deg, #2D0C57 10deg, #2D0C57 50deg, white 70deg, #2D0C57 80deg, #2D0C57 93deg, white 110deg, #2D0C57 130deg, #2D0C57 150deg, #2D0C57 170deg, #2D0C57 190deg, #2D0C57 230deg, white 240deg, #2D0C57 260deg, #2D0C57 280deg, white 300deg, #2D0C57 310deg, #2D0C57 360deg)",
              }}
            ></div>
            <input
              type="text"
              name="title"
              placeholder="Problem Statement"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#0b0314] text-white border rounded-md outline-none relative  placeholder-gray-500"
            />
          </div>
          <div className="relative">
            <div
              className="  rounded-md "
              style={{
                background:
                  "conic-gradient(from 0deg, #2D0C57 0deg, #2D0C57 10deg, #2D0C57 50deg, white 70deg, #2D0C57 80deg, #2D0C57 93deg, white 110deg, #2D0C57 130deg, #2D0C57 150deg, #2D0C57 170deg, #2D0C57 190deg, #2D0C57 230deg, white 240deg, #2D0C57 260deg, #2D0C57 280deg, white 300deg, #2D0C57 310deg, #2D0C57 360deg)",
              }}
            ></div>
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-4 bg-[#0b0314] text-white border rounded-md outline-none relative  placeholder-gray-500 resize-vertical"
            />
          </div>
          <button
            type="submit"
            className="bg-[#2D0C57] text-white py-3 px-4 rounded-md transition-colors duration-300 hover:bg-[#3D1C67] focus:outline-none focus:ring-2 focus:ring-[#2D0C57] focus:ring-opacity-50"
          >
            Schedule a Call
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact

