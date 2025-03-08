import { useState, useEffect, useRef } from 'react';
import lines from "../assets/Group12.svg";
import Glass from "./glass";

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
    <div ref={featuresRef} className=" max-w-6xl mx-auto mt-2 flex flex-col justify-center mt-0 ">
      <h3 className="text-2xl md:text-3xl lg:text-3xl font-medium text-center  ">We Believe in</h3>
      <div 
        className={`relative w-auto p-7 lg:p-7 ${
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
