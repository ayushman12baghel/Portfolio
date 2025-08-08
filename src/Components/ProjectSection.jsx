
import React from "react";
import ProjectCard from "./ProjectCard";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { useRef } from "react";
import connectifyImg from "../assets/front.png";
import trafficImg from "../assets/2.png";
import rentifyImg from "../assets/Rentify front.png";

const ProjectSection = () => {
  const scrollRef = useRef(null);

  const hScrollRight = () => {
    scrollRef.current.scrollLeft += 500;
  };

  const hScrollLeft = () => {
    scrollRef.current.scrollLeft -= 500;
  };
  // Project data from CV
  const projects = [
    {
      title: "Connectify",
      description:
        "Real-time video calling app with WebRTC, Socket.IO, and secure authentication. Achieved sub-second latency and 98% call reliability.",
      github: "https://github.com/ayushman12baghel/connectify",
      live: "https://connectify-opal-mu.vercel.app",
      image: connectifyImg,
    },
    {
      title: "Smart Traffic Management System",
      description:
        "AI-based multi-lane traffic control system using ResNet50 and Random Forest. Reduces congestion by 40% and prioritizes emergency vehicles.",
      github: "https://github.com/ayushman12baghel/smart-traffic-management-system",
      live: "",
      image: trafficImg,
    },
    {
      title: "Rentify",
      description:
        "Airbnb-inspired rental platform with dynamic listings, geolocation, and secure login. Improved usability and reduced load time by 30%.",
      github: "https://github.com/ayushman12baghel/rentify",
      live: "https://rentify-7bej.onrender.com/listings",
      image: rentifyImg,
    },
  ];

  return (
    <div data-aos="fade-down" className="mb-20 lg:mb-36">
      <h1 className="text-5xl lg:text-7xl gradient-text mb-10">My Projects</h1>
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll gap-8 lg:p-3 scroll-hide"
      >
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-3 mt-2 select-none">
        <HiArrowSmLeft
          onClick={hScrollLeft}
          className="text-xl lg:text-2xl cursor-pointer text-yellow-500 hidden lg:block"
        />
        <h2 className="gradient-text font-mono text-lg uppercase">
          Slide for more
        </h2>
        <HiArrowSmRight
          onClick={hScrollRight}
          className="text-xl lg:text-2xl cursor-pointer text-yellow-500 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default ProjectSection;
