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
      stats: "700+ Problems Solved • 365+ Day Streak",
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
      <h1 className="text-5xl lg:text-7xl gradient-text mb-10">Coding Profiles</h1>
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll gap-8 lg:p-3 scroll-hide"
      >
        {profiles.map((profile, idx) => (
          <CodingProfileCard key={idx} {...profile} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-3 mt-2 select-none">
        <HiArrowSmLeft
          onClick={hScrollLeft}
          className="text-xl lg:text-2xl cursor-pointer text-yellow-500 hidden lg:block"
        />
        <h2 className="gradient-text font-mono text-lg uppercase">
          Check my profiles
        </h2>
        <HiArrowSmRight
          onClick={hScrollRight}
          className="text-xl lg:text-2xl cursor-pointer text-yellow-500 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default CodingProfilesSection;
