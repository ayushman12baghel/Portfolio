import React from "react";
import { AiOutlineLink } from "react-icons/ai";

const CodingProfileCard = ({ platform, username, profileUrl, stats, icon, bgColor }) => {
  return (
    <div className="p-4 -m-4 group">
      <div className={`h-fit w-[300px] md:w-[320px] backdrop-blur-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-400/20 hover:border-blue-300/40 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 lg:hover:scale-105 transition-all duration-500`}>
        <div className="p-8 flex flex-col items-center text-center gap-5">
          <div className="text-5xl text-blue-300 group-hover:text-blue-200 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
            {icon}
          </div>
          <h2 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
            {platform}
          </h2>
          <div className="px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full">
            <h3 className="text-lg text-blue-300 code-font">
              @{username}
            </h3>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            {stats}
          </p>
          <a 
            href={profileUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            <AiOutlineLink className="text-white" />
            <span className="text-white font-medium">View Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CodingProfileCard;
