import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Hero from "./Main/Hero"

function App() {
  return (
    <div className="bg-[#0b0314] text-white h-screen overflow-y-auto">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default App
