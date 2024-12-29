import lines from "../assets/Group12.svg";

const Features = () => {
  return (
    <div 
      className="relative h-64 w-full bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${lines})` }}
    >
    </div>
  );
};

export default Features;