import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { RiSignalTowerFill } from "react-icons/ri";

const ProjectCard = ({ title, description, github, live, image }) => {
  return (
    <div className="p-4 flex group">
      <div className="flex flex-col h-[460px] w-[320px] md:w-[350px] bg-[#1e1e1e]/90 backdrop-blur-xl border border-gray-700/50 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-orange-500/10 lg:hover:-translate-y-1 transition-all duration-300 relative">
        
        {/* Top styling simulating IDE tab */}
        <div className="border-b border-gray-700/50 bg-[#252526] px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1.5 opacity-70">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <p className="text-[#e2aa53] text-[13px] code-font ml-3 truncate font-mono">
            {title.charAt(0).toUpperCase() + title.slice(1)}<span className="text-gray-400">.java</span>
          </p>
        </div>

        <div className="relative overflow-hidden h-[160px] shrink-0 border-b border-gray-700/50">
          <a href={live || github} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt="project-img"
              className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-transparent to-transparent opacity-80"></div>
          </a>
        </div>
        
        <div className="p-5 flex flex-col flex-grow gap-3 relative z-10 overflow-hidden">
          <div>
             <h2 className="text-lg font-bold text-[#d4d4d4] group-hover:text-[#e2aa53] transition-colors duration-200 font-mono tracking-tight">
               <span className="text-[#569cd6]">class</span> {title.charAt(0).toUpperCase() + title.slice(1)}
             </h2>
          </div>
          
          <div className="text-[13px] text-[#cccccc] leading-relaxed font-mono flex-grow overflow-y-auto scroll-bar pr-2">
            <p>
              <span className="text-[#c586c0]">public void</span> <span className="text-[#dcdcaa]">execute</span>() {'{'}
            </p>
            <p className="pl-4 mt-1 text-[#6a9955]">
              // {description}
            </p>
            <p className="mt-1">{'}'}</p>
          </div>
          
          <div className="flex items-center justify-between pt-3 border-t border-gray-700/50 mt-auto shrink-0">
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-[#2d2d2d] hover:bg-[#3d3d3d] border border-gray-600/50 rounded transition-all duration-200"
            >
              <AiFillGithub className="text-[#d4d4d4] text-lg" />
              <span className="text-[#d4d4d4] text-[11px] font-semibold uppercase tracking-wider font-mono">Source</span>
            </a>
            {live && (
              <a 
                href={live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-[#2d2d2d] hover:bg-[#3d3d3d] border border-gray-600/50 rounded transition-all duration-200"
              >
                <RiSignalTowerFill className="text-[#4ec9b0] text-lg" />
                <span className="text-[#4ec9b0] text-[11px] font-semibold uppercase tracking-wider font-mono">Deploy</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
