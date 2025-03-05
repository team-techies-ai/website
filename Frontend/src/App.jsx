import Features from "./components/Features"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Specialization from "./components/Specialization"
import StudentCollaboration from "./components/StudentCollaboration"
import Sunil from "./components/Sunil"
import Hero from "./Main/Hero"
import { Routes, Route } from "react-router-dom";
import Team from "./team/Team.jsx";
import Signin from "./Signin/Signin.jsx";
import Signup from "./Signup/Signup.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx"
import Join from "./JoinTeam/Join.jsx";
import Subscribe from "./subscribe.jsx/subcribe.jsx"
import About from "./About/About.jsx"
import Contact from "./contact/contact.jsx"
import Register from "./Auth/Register.jsx"
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy.jsx"
import BlogHome from "./Blogs/BlogHome.jsx"
import { AuthProvider } from './context/AuthContext';
import OurWork from "./OurWork/ClientProjects.jsx";


const App = () => {
  return (
          <AuthProvider>

    <div className="flex flex-col  bg-[#0b0314] text-white  min-h-screen App">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow container mx-auto py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blogs" element={<BlogHome />} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/subscribe" element={<Subscribe />}  />
          <Route path="/jointeam" element={<Join/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/our-work" element={<OurWork/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
          </AuthProvider>

  );
};
function Home() {
  return (
    <div className=" text-white  min-h-screen ">
      <Hero />
      <Specialization />
      <StudentCollaboration />
      <Features />

      <Sunil/>

      
    </div>
  )
}

export default App
