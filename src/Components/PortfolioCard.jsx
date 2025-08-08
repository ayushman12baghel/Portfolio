import React from "react";

const PortfolioCard = () => {
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="px-6 lg:p-8 text-white w-[85vw] lg:w-[35vw] backdrop-blur-md border border-blue-400/30 select-none rounded-3xl my-20 lg:my-[200px] hover:scale-105 transition-all duration-500 hover:border-blue-300/50 shadow-2xl portfolio-card floating"
    >
      <div className="flex items-center gap-3 py-4 border-2 border-transparent border-b-blue-400/40">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <h3 className="text-3xl lg:text-5xl font-bold ml-4 code-font">
          ./portfolio
        </h3>
      </div>
      <h3 className="text-xl lg:text-2xl py-4 border-2 border-transparent border-b-blue-400/30 code-font text-blue-300">
        $ whoami
      </h3>
      <h3 className="text-2xl lg:text-3xl py-4 font-semibold gradient-text">Ayushman Baghel</h3>
      <h3 className="text-lg lg:text-xl py-2 text-blue-200 code-font">Full Stack Developer & Problem Solver</h3>
    </div>
  );
};

export default PortfolioCard;
