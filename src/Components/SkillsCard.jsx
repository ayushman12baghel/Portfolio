import React from "react";

const SkillsCard = ({ title, value }) => {
  return (
    <div className="group flex justify-between items-center mt-3 bg-[#1e1e1e] hover:bg-[#252526] shadow-md p-3 border border-gray-700/50 hover:border-gray-500/50 rounded lg:mr-2 transition-all duration-200">
      
      <div className="flex items-center gap-2 relative z-10 w-1/3">
        <span className="text-[#569cd6] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200 translate-x-[-5px] group-hover:translate-x-0">*</span>
        <h3 className="font-medium text-[14px] text-[#d4d4d4] group-hover:text-[#4ec9b0] transition-colors duration-200 font-mono code-font truncate">
          {title}
        </h3>
      </div>

      <div className="flex items-center gap-3 relative z-10 flex-grow justify-end max-w-[60%]">
        <div className="w-full max-w-[150px] bg-[#2d2d2d] rounded-sm h-1.5 overflow-hidden border border-gray-700/50">
          <div 
            className="h-full bg-[#ce9178] opacity-80 group-hover:opacity-100 transition-all duration-1000 ease-out"
            style={{ width: `${value}%` }}
          ></div>
        </div>
        <span className="text-[#b5cea8] font-medium text-xs min-w-[3rem] text-right font-mono tracking-wider">
          {value}%
        </span>
      </div>
    </div>
  );
};

export default SkillsCard;
