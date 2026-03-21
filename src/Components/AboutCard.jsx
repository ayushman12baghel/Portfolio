import React from "react";

const AboutCard = () => {
  return (
    <div
      data-aos="zoom-in-left"
      className="flex flex-col lg:flex-row justify-between lg:items-center mb-20 lg:mb-36"
    >
      <span className="uppercase text-3xl lg:text-2xl font-bold text-[#e2aa53] font-mono mb-8 lg:mb-0 rotate-0 lg:-rotate-90">
        // About
      </span>
      <p className="text-2xl lg:text-5xl text-[#d4d4d4] font-mono lg:w-[85%] leading-snug">
        <span className="text-[#569cd6]">import</span> {"{ "} Passion {"}"} <span className="text-[#569cd6]">from</span> <span className="text-[#ce9178]">"Engineering"</span>;
        <br/><br/>
        I am passionate about solving complex problems through modular code, algorithm optimization, and building architecture that scales.
      </p>
    </div>
  );
};

export default AboutCard;
