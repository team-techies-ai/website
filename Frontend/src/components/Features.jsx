// // import lines from "../assets/Group12.svg";
// // import Glass from "./glass";

// // const Features = () => {
// //   return (
// //     <div className="mt-8 hidden lg:block">
// //       <h1 className="text-6xl font-medium text-center m-4 mb-20">Our Features</h1>
// //       <div 
// //         className="relative h-64 w-full bg-no-repeat bg-cover bg-center mt-5"
// //         style={{ backgroundImage: `url(${lines})` }}
// //       >
// //         <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 p-4">
// //           <Glass head="Innovate" para="Work on real-world projects that make an impact" />
// //           <Glass head="Collaborate" para="Be a part of a team of like-minded students and professionals" />
// //           <Glass head="Learn" para="Gain hands-on experience in the field of AI" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Features;
// import { useState, useEffect } from 'react';
// import lines from "../assets/Group12.svg";
// import Glass from "./Glass";

// const Features = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const features = [
//     { head: "Learn", para: "Master the foundations of AI by working on projects that are in demand in the Industry" },
//     { head: "Innovate", para: "Be a part of bringing innovation in AI that enhances the human productivity" },
//     { head: "Colloborate", para: "Team up with the community of AI Innovators to build our client projects" }
//   ];

//   return (
//     <div className="mt-8 px-4 max-w-7xl mx-auto">
//       <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-center m-4 mb-10 lg:mb-20">Our Features</h1>
//       <div 
//         className={`relative w-full p-6 lg:p-10 ${
//           isMobile ? 'bg-none' : 'bg-no-repeat bg-cover bg-center'
//         }`}
//         style={isMobile ? {} : { backgroundImage: `url(${lines})` }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
//           {features.map((feature, index) => (
//             <Glass 
//               key={index}
//               head={feature.head}
//               para={feature.para}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;


// import { useState, useEffect, useRef } from 'react';
// import lines from "../assets/Group12.svg";
// import Glass from "./Glass";

// const Features = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [visibleCards, setVisibleCards] = useState(0);
//   const featuresRef = useRef(null);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     const handleScroll = () => {
//       if (featuresRef.current) {
//         const featuresTop = featuresRef.current.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;
        
//         if (featuresTop < windowHeight * 0.9) {
//           setVisibleCards(1);
//         }
//         if (featuresTop < windowHeight * 0.6) {
//           setVisibleCards(2);
//         }
//         if (featuresTop < windowHeight * 0.3) {
//           setVisibleCards(3);
//         }
//       }
//     };

//     handleResize();
//     handleScroll();

//     window.addEventListener('resize', handleResize);
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const features = [
//     { head: "Learn", para: "Master the foundations of AI by working on projects that are in demand in the Industry" },
//     { head: "Innovate", para: "Be a part of bringing innovation in AI that enhances the human productivity" },
//     { head: "Collaborate", para: "Team up with the community of AI Innovators to build our client projects" }
//   ];

//   return (
//     <div ref={featuresRef} className="mt-8 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
//       <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-center m-4 mb-10 lg:mb-20">We Believe in</h1>
//       <div 
//         className={`relative w-full p-6 lg:p-10 ${
//           isMobile ? 'bg-none' : 'bg-no-repeat bg-cover bg-center'
//         }`}
//         style={isMobile ? {} : { backgroundImage: `url(${lines})` }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
//           {features.slice(0, visibleCards).map((feature, index) => (
//             <Glass 
//               key={index}
//               head={feature.head}
//               para={feature.para}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;
// Features.jsx
import { useState, useEffect, useRef } from 'react';
import lines from "../assets/Group12.svg";
import Glass from "./Glass";

const Features = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (featuresRef.current) {
        const featuresTop = featuresRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (featuresTop < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    handleResize();
    handleScroll();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features = [
    { head: "Learn", para: "Master the foundation of AI by working on projects that are in demand in the industry. Gain practical skills that will help you stand out in your career." },
    { head: "Innovate", para: "Be a part of bringing innovations in AI, Contribute to research of Team Techies that enhances the human life easier and boost productivity.." },
    { head: "Collaborate", para: "Team up with a passionate community of AI and ML enthusiasts to build our client projects. And grow your Network by connecting with liked mindsets" }
  ];

  return (
    <div ref={featuresRef} className="px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center ">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium text-center m-4 mb-5 lg:mb-5">We Believe in</h1>
      <div 
        className={`relative w-full p-6 lg:p-10 ${
          isMobile ? 'bg-none' : 'bg-no-repeat bg-cover bg-center'
        }`}
        // style={isMobile ? {} : { backgroundImage: url(${lines}) }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ease-in-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Glass 
                head={feature.head}
                para={feature.para}
                isMobile={isMobile}
              />
            </div>
          ))}
        </div>
      </div>
      

    </div>
    
  );
};

export default Features;