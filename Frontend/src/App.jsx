import Features from "./components/Features"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Specialization from "./components/Specialization"
import Sunil from "./components/Sunil"
import Hero from "./Main/Hero"
import { Routes, Route } from "react-router-dom";
import Blogs from "./Blogs/blogs.jsx";
import Team from "./team/Team.jsx";
import Signin from "./Signin/Signin.jsx";
import Signup from "./Signup/Signup.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx"
import Join from "./JoinTeam/Join.jsx";
import Subscribe from "./subscribe.jsx/subcribe.jsx"
import About from "./About/About.jsx"
import Contact from "./contact/contact.jsx"

const App = () => {
  return (
    <div className="flex flex-col  bg-[#0b0314] text-white  min-h-screen App">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow container mx-auto py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/subscribe" element={<Subscribe />}  />
          <Route path="/jointeam" element={<Join/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
function Home() {
  return (
    <div className=" text-white  min-h-screen ">
      <Hero />
      <Features />
      <Sunil/>
      <Specialization />
    </div>
  )
}

export default App
