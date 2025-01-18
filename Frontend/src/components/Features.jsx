// import lines from "../assets/Group12.svg";
// import Glass from "./glass";

// const Features = () => {
//   return (
//     <div className="mt-8 hidden lg:block">
//       <h1 className="text-6xl font-medium text-center m-4 mb-20">Our Features</h1>
//       <div 
//         className="relative h-64 w-full bg-no-repeat bg-cover bg-center mt-5"
//         style={{ backgroundImage: `url(${lines})` }}
//       >
//         <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 p-4">
//           <Glass head="Innovate" para="Work on real-world projects that make an impact" />
//           <Glass head="Collaborate" para="Be a part of a team of like-minded students and professionals" />
//           <Glass head="Learn" para="Gain hands-on experience in the field of AI" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;
import { useState, useEffect } from 'react';
import lines from "../assets/Group12.svg";
import Glass from "./Glass";

const Features = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const features = [
    { head: "Innovate", para: "Work on real-world projects that make an impact" },
    { head: "Collaborate", para: "Be a part of a team of like-minded students and professionals" },
    { head: "Learn", para: "Gain hands-on experience in the field of AI" }
  ];

  return (
    <div className="mt-8 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-center m-4 mb-10 lg:mb-20">Our Features</h1>
      <div 
        className={`relative w-full p-6 lg:p-10 ${
          isMobile ? 'bg-none' : 'bg-no-repeat bg-cover bg-center'
        }`}
        style={isMobile ? {} : { backgroundImage: `url(${lines})` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {features.map((feature, index) => (
            <Glass 
              key={index}
              head={feature.head}
              para={feature.para}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

