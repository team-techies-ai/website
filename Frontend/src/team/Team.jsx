import Mainprofile from "../components/Mainprofile"
import Profile from "../components/Profile"

const Team = () => {
  return (
    <div className="bg-[#0b0314] h-screen  text-white mt-32">
      <h1 className="text-6xl font-medium text-center m-4"> Meet our Team</h1>
      <Mainprofile />
     <div className="flex">
     <Profile/>
      <Profile/>

     </div>
    </div>
  )
}

export default Team