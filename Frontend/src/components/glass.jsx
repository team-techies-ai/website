import PropTypes from 'prop-types';

const Glass = ({head, para}) => {
    return (
      <div className="group w-[274px] h-[222px] backdrop-blur-sm text-white bg-opacity-50 bg-[#0b0314] rounded-lg p-4 text-center items-center relative overflow-hidden border border-white border-opacity-20">
        <h1 className="text-4xl font-light group-hover:opacity-0 transition-opacity duration-300 justify-center mt-20 text-transparent bg-clip-text bg-gradient-to-r from-[#817e7e] via-white to-[#817e7e]">
          {head}
        </h1>
  
        <p className="absolute inset-0 flex items-center justify-center p-3 text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#817e7e] via-white to-[#817e7e] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {para}
        </p>
      </div>
    );
    }
  
  
  export default Glass;
  Glass.propTypes = {
    head: PropTypes.string.isRequired,
    para: PropTypes.string.isRequired,
  };
  