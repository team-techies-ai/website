import Features from "./components/Features"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Hero from "./Main/Hero"

function App() {
  return (
    <div className="bg-[#0b0314] text-white h-screen overflow-y-auto">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default App
