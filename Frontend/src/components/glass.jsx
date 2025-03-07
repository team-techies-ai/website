// import PropTypes from 'prop-types';

// const Glass = ({head, para}) => {
//     return (
//       <div className="group w-[274px] h-[222px] backdrop-blur-sm text-white bg-opacity-50 bg-[#0b0314] rounded-lg p-4 text-center items-center relative overflow-hidden border border-white border-opacity-20">
//         <h1 className="text-4xl font-light group-hover:opacity-0 transition-opacity duration-300 justify-center mt-20 text-transparent bg-clip-text bg-gradient-to-r from-[#817e7e] via-white to-[#817e7e]">
//           {head}
//         </h1>
  
//         <p className="absolute inset-0 flex items-center justify-center p-3 text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#817e7e] via-white to-[#817e7e] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         {para}
//         </p>
//       </div>
//     );
//     }
  
  
//   export default Glass;
//   Glass.propTypes = {
//     head: PropTypes.string.isRequired,
//     para: PropTypes.string.isRequired,
//   };// Glass.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';

const Glass = ({ head, para, isMobile }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100; // Maximum number of characters to show before "Read More"

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`group w-full backdrop-blur-sm text-white bg-opacity-50 bg-[#0b0314] rounded-lg p-4 text-center items-center relative overflow-hidden border border-white border-opacity-20 transition-all duration-300 ${
        isMobile ? (isExpanded ? 'h-auto' : 'h-[222px]') : 'h-auto'
      } flex flex-col justify-between`}  // Added flex and justify-between for uniform height
    >
      <h1 className="text-4xl md:text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-white to-[#d7d4d4]">
        {head}
      </h1>

      <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] via-white to-[#d7d4d4]">
        {isMobile && !isExpanded ? `${para.slice(0, maxLength)}${para.length > maxLength ? '...' : ''}` : para}
      </p>

      {isMobile && para.length > maxLength && (
        <button
          onClick={toggleExpand}
          className="mt-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default Glass;

Glass.propTypes = {
  head: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
};
