import lines from "../assets/Group12.svg";
import Glass from "./glass";

const Features = () => {
  return (
    <div className="mt-8 hidden lg:block">
      <h1 className="text-6xl font-medium text-center m-4 mb-20">Our Features</h1>
      <div 
        className="relative h-64 w-full bg-no-repeat bg-cover bg-center mt-5"
        style={{ backgroundImage: `url(${lines})` }}
      >
        <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 p-4">
          <Glass head="Innovate" para="Work on real-world projects that make an impact" />
          <Glass head="Collaborate" para="Be a part of a team of like-minded students and professionals" />
          <Glass head="Learn" para="Gain hands-on experience in the field of AI" />
        </div>
      </div>
    </div>
  );
};

export default Features;
