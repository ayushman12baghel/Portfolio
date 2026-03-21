import React from "react";
import { AiOutlineLink } from "react-icons/ai";

const CodingProfileCard = ({ platform, username, profileUrl, stats, icon, bgColor }) => {
  return (
    <div className="p-4 flex group">
      <div className="flex flex-col h-[320px] w-[300px] md:w-[320px] bg-[#1e1e1e] border border-gray-700/50 hover:border-gray-500/50 rounded-lg overflow-hidden lg:hover:-translate-y-1 transition-all duration-300 relative shadow-xl hover:shadow-2xl">
        
        {/* Top header simulating IDE interface */}
        <div className="bg-[#2d2d2d] px-4 py-2 border-b border-gray-700/50 flex items-center justify-between">
            <span className="text-[#569cd6] text-xs font-mono">interface</span>
            <span className="text-[#4ec9b0] text-xs font-mono">{platform}</span>
        </div>

        <div className="p-8 flex flex-col flex-grow items-center text-center gap-4 relative z-10 overflow-hidden">
          <div className="text-4xl text-[#d4d4d4] group-hover:text-[#4ec9b0] transition-colors duration-300 group-hover:scale-110 transform shrink-0">
            {icon}
          </div>
          
          <div className="px-3 py-1 bg-[#252526] border border-gray-700/50 rounded shrink-0 w-full">
            <h3 className="text-sm md:text-sm text-[#ce9178] font-mono truncate">
              "{username}"
            </h3>
          </div>
          
          <div className="text-[13px] text-[#cccccc] leading-relaxed font-mono flex-grow pb-2 w-full mb-1 flex items-center justify-center border-t border-gray-700/50 mt-2 pt-4">
            <span className="text-[#6a9955]">// {stats}</span>
          </div>
          
          <a 
            href={profileUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#333333] hover:bg-[#444444] border border-gray-600/50 px-4 py-2 rounded transition-all duration-200 shrink-0 mt-auto"
          >
            <AiOutlineLink className="text-[#dcdcaa]" />
            <span className="text-[#dcdcaa] font-mono text-xs uppercase tracking-wide">connect()</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CodingProfileCard;
