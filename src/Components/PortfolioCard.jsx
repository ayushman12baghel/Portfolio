import React from "react";

const PortfolioCard = () => {
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="px-6 lg:p-8 text-[#d4d4d4] w-[85vw] lg:w-[45vw] bg-[#1e1e1e] border border-gray-700/50 select-none rounded-lg my-20 lg:my-[150px] shadow-2xl relative"
    >
      <div className="flex items-center gap-2 py-3 border-b border-gray-700/50 mb-4 bg-[#2d2d2d] absolute top-0 left-0 right-0 rounded-t-lg px-6">
        <div className="w-3 h-3 bg-[#ff5f56] rounded-full"></div>
        <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
        <div className="w-3 h-3 bg-[#27c93f] rounded-full"></div>
        <h3 className="text-sm font-mono text-gray-400 ml-4">
          Terminal - java
        </h3>
      </div>
      
      <div className="mt-12 font-mono">
        <h3 className="text-lg lg:text-xl py-2 text-[#4ec9b0]">
          <span className="text-[#569cd6]">C:\Users\Ayushman&gt;</span> java -jar portfolio.jar
        </h3>
        <h3 className="text-xl lg:text-2xl py-2 font-semibold text-[#ce9178]">
          Executing System...
        </h3>
        <h3 className="text-lg lg:text-xl py-1 text-[#b5cea8]">
          [INFO] Name: Ayushman Baghel
        </h3>
        <h3 className="text-lg lg:text-xl py-1 text-[#b5cea8]">
          [INFO] Role: Software Engineer &amp; Problem Solver
        </h3>
        <h3 className="text-lg lg:text-xl py-1 text-[#b5cea8] animate-pulse">
          _
        </h3>
      </div>
    </div>
  );
};

export default PortfolioCard;
