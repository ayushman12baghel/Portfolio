import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { RiSignalTowerFill } from "react-icons/ri";
const ProjectCard = ({ title, description, github, live, image }) => {
  return (
    <div className="p-4 -m-4 group">
      <div className="h-fit w-[320px] md:w-[350px] bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-xl border border-blue-400/20 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 lg:hover:scale-105 transition-all duration-500 hover:border-blue-300/40">
        <div className="relative overflow-hidden">
          <a href={live || github} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt="project-img"
              className="lg:h-48 h-[200px] w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
        <div className="p-6 flex flex-col gap-4">
          <h2 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
            {title}
          </h2>
          <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
            {description}
          </p>
          <div className="flex items-center justify-between mt-2">
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-400/30 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <AiFillGithub className="text-blue-300 text-lg" />
              <span className="text-blue-300 text-sm font-medium">Code</span>
            </a>
            {live && (
              <a 
                href={live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-green-600/20 hover:bg-green-600/40 border border-green-400/30 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <RiSignalTowerFill className="text-green-300 text-lg" />
                <span className="text-green-300 text-sm font-medium">Live</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
