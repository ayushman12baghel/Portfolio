import React from "react";
import CodingProfileCard from "./CodingProfileCard";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { useRef } from "react";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";

const CodingProfilesSection = () => {
  const scrollRef = useRef(null);

  const hScrollRight = () => {
    scrollRef.current.scrollLeft += 500;
  };

  const hScrollLeft = () => {
    scrollRef.current.scrollLeft -= 500;
  };

  // Coding profiles data
  const profiles = [
    {
      platform: "LeetCode",
      username: "Ayushman_Baghel",
      profileUrl: "https://leetcode.com/u/Ayushman_Baghel/",
      stats: "1000+ Problems Solved • 500+ Day Streak",
      icon: <SiLeetcode />,
      bgColor: "bg-gradient-to-br from-orange-500 to-yellow-600",
    },
    {
      platform: "Codeforces",
      username: "Ayushman_Baghel",
      profileUrl: "https://codeforces.com/profile/Ayushman_Baghel",
      stats: "Competitive Programming • Problem Solving",
      icon: <SiCodeforces />,
      bgColor: "bg-gradient-to-br from-blue-500 to-red-500",
    },
    {
      platform: "GeeksforGeeks",
      username: "ayushman12baghel",
      profileUrl: "https://www.geeksforgeeks.org/user/ayushman12baghel/",
      stats: "DSA Practice • Interview Preparation",
      icon: <SiGeeksforgeeks />,
      bgColor: "bg-gradient-to-br from-green-500 to-green-700",
    },
  ];

  return (
    <div data-aos="fade-down" className="mb-20 lg:mb-36">
      <h1 className="text-4xl lg:text-5xl font-mono text-[#4ec9b0] mb-10">// Coding Profiles</h1>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 lg:p-3 scroll-bar pb-6"
      >
        {profiles.map((profile, idx) => (
          <CodingProfileCard key={idx} {...profile} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-3 mt-4 select-none">
        <HiArrowSmLeft
          onClick={hScrollLeft}
          className="text-xl lg:text-2xl cursor-pointer text-[#e2aa53] hidden lg:block hover:scale-125 transition-transform"
        />
        <h2 className="text-[#6a9955] font-mono text-sm uppercase tracking-widest">
          /* Check my profiles */
        </h2>
        <HiArrowSmRight
          onClick={hScrollRight}
          className="text-xl lg:text-2xl cursor-pointer text-[#e2aa53] hidden lg:block hover:scale-125 transition-transform"
        />
      </div>
    </div>
  );
};

export default CodingProfilesSection;
