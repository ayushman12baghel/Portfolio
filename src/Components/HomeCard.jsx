import React from "react";
import myImg from "../assets/newprofile.jpeg";

const HomeCard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between items-center mb-20 lg:mb-36 pt-10">
      {/* Left Content - IDE Inspired */}
      <div data-aos="fade-up-right" className="flex flex-col lg:w-[60%] bg-[#1e1e1e] border border-gray-700/50 rounded-lg shadow-2xl relative overflow-hidden group">
        
        {/* Mac-like Window Controls */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-gray-700/50 relative z-10">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          <p className="ml-4 text-gray-400 text-xs font-mono">Ayushman.java</p>
        </div>

        <div className="p-6 md:p-8 font-mono text-sm md:text-[15px] overflow-x-auto">
          <div className="mb-6">
            <h1 className="text-xl md:text-3xl font-bold mb-2">
              <span className="text-[#569cd6]">public class</span> <span className="text-[#4ec9b0]">Ayushman</span> <span className="text-[#569cd6]">implements</span> <span className="text-[#4ec9b0]">Engineer</span> {'{'}
            </h1>
            <p className="text-gray-500 pl-4">
              // Initializing systems... OK
            </p>
          </div>

          <div className="space-y-4 text-[#d4d4d4] relative z-10 pl-4 md:pl-8">
            <p className="leading-relaxed">
              <span className="text-[#569cd6]">String</span> role = <span className="text-[#ce9178]">"Software Engineer & Problem Solver"</span>;
              <br/>
              <span className="text-[#569cd6]">String</span> expertise = <span className="text-[#ce9178]">"Data Structures, Algorithms & Microservices"</span>;
            </p>
            
            <div className="border hover:border-gray-500/50 transition-colors border-gray-700/50 bg-[#252526] p-4 rounded-md my-4">
              <div className="flex items-center gap-2 mb-2 text-[#dcdcaa]">
                <span>&gt; getAlgorithmStats()</span>
              </div>
              <ul className="grid grid-cols-2 gap-2 text-[13px]">
                <li><span className="text-[#9cdcfe]">rating</span>: <span className="text-[#ce9178]">"Knight (Top 5%)"</span></li>
                <li><span className="text-[#9cdcfe]">solved</span>: <span className="text-[#b5cea8]">1300</span></li>
                <li><span className="text-[#9cdcfe]">streak</span>: <span className="text-[#b5cea8]">500+</span></li>
                <li><span className="text-[#9cdcfe]">focus</span>: <span className="text-[#ce9178]">"DP & Graphs"</span></li>
              </ul>
            </div>

            <p className="leading-relaxed">
              <span className="text-[#569cd6]">public void</span> <span className="text-[#dcdcaa]">execute</span>() {'{'}
              <br/>
              <span className="pl-4 text-[#6a9955] block">// Specializes in architecting scalable, low-latency microservices</span>
              <span className="pl-4 text-[#6a9955] block">// and deploying AI-powered solutions.</span>
              <span className="pl-4 text-[#6a9955] block">// Thrives on writing highly optimized, production-grade code.</span>
              {'}'}
            </p>
          </div>
          <h1 className="text-xl md:text-3xl font-bold mt-4">{'}'}</h1>
        </div>
      </div>

      {/* Right Content - Visual & Image */}
      <div data-aos="fade-up-left" className="lg:w-[40%] flex justify-center items-center relative">
        <div className="relative group">
          
          <div className="relative p-2 rounded-2xl z-10 border-2 border-gray-700/50 bg-[#1e1e1e]">
            <div className="absolute top-0 right-0 p-2 transform translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
               <div className="bg-[#2d2d2d] border border-gray-600/50 py-1.5 px-3 rounded shadow-xl">
                 <p className="font-mono text-xs text-[#ce9178]">O(1) mindset</p>
               </div>
            </div>
            <img
              src={myImg}
              alt="Ayushman Baghel"
              className="rounded-xl w-[250px] h-[250px] lg:w-[380px] lg:h-[380px] object-cover scale-[0.98] group-hover:scale-100 transition-all duration-300 opacity-90 group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;