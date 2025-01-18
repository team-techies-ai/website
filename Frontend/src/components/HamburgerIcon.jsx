import React from 'react';

const HamburgerIcon = ({ isOpen, toggle }) => {
  return (
    <button className="lg:hidden" onClick={toggle}>
      <div className="w-6 h-6 flex flex-col justify-between">
        <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
        <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
      </div>
    </button>
  );
};

export default HamburgerIcon;

