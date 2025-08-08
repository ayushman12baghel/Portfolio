import React from "react";

const SkillsCard = ({ title, value }) => {
  return (
    <div className="group flex justify-between items-center mt-4 backdrop-blur-xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 hover:from-blue-800/30 hover:to-purple-800/30 shadow-lg hover:shadow-xl p-4 border border-blue-400/20 hover:border-blue-300/40 rounded-2xl mr-2 transition-all duration-300 hover:scale-[1.02]">
      <h3 className="font-semibold text-lg text-white group-hover:text-blue-300 transition-colors duration-300 code-font">
        {title}
      </h3>
      <div className="flex items-center gap-3">
        <div className="w-24 bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
          <div 
            className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
            style={{ width: `${value}%` }}
          ></div>
        </div>
        <span className="text-blue-300 font-medium text-sm min-w-[3rem] text-right code-font">
          {value}%
        </span>
      </div>
    </div>
  );
};

export default SkillsCard;
