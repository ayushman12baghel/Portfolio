import React from "react";
import myImg from "../assets/newprofile.jpeg";

const HomeCard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center mb-20 lg:mb-36">
      <div data-aos="fade-up-right" className="flex flex-col gap-5 lg:w-[50%]">
        <h1 className="text-5xl lg:text-7xl mb-10 gradient-text">Hey!</h1>
        
        <p className="text-gray-300 text-xl lg:text-2xl">
          My name is Ayushman Baghel, and I am a Backend & Full-Stack Engineer currently pursuing my B.Tech in Computer Science at Lovely Professional University. I specialize in building scalable, low-latency architectures and AI-powered solutions.
        </p>
        
        <p className="text-gray-300 text-xl lg:text-2xl">
          With expertise in Java, Spring Boot, Python, and React, my recent work includes engineering a zero-latency alert escalation engine and an AI-driven traffic optimization model. Beyond development, I am deeply passionate about algorithmic problem-solving—I am a <strong>LeetCode Knight</strong> (Top 5% globally) with a 450+ day streak and over 1,300 problems solved.
        </p>

        <p className="text-gray-300 text-xl lg:text-2xl">
          I thrive on writing highly optimized, production-ready code. I am currently seeking SDE internship opportunities where I can tackle complex engineering challenges. Let's connect and build something amazing together!
        </p>
      </div>

      <div data-aos="fade-up-left">
        <img
          src={myImg}
          alt="Ayushman Baghel"
          className="rounded-full w-[200px] h-[200px] lg:w-[450px] lg:h-[450px] mx-auto object-cover"
        />
      </div>
    </div>
  );
};

export default HomeCard;