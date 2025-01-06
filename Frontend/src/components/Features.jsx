import lines from "../assets/Group12.svg";
import Glass from "./glass";

const Features = () => {
  return (
    <div className="mt-32">
      <h1 className="text-6xl font-medium text-center m-4 mb-20"> Our Features</h1>
    <div 
      className="relative h-64 w-full bg-no-repeat bg-cover bg-center mt-5"
      style={{ backgroundImage: `url(${lines})` }}
    >
     <div className="flex justify-center gap-20"> 
      <Glass head="Innovate" para="Work on real-world projects that make an impact" />
      <Glass head="Collarborate" para="Be a part of a team  of like minded students and profesional"  />
      <Glass head="Learn" para="Gain hands on expreience in the field of AI"  />
     </div>
    </div>
    </div>
  );
};

export default Features;