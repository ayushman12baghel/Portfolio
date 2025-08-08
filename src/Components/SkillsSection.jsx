import React from "react";
import SkillsCard from "./SkillsCard";


const SkillsSection = () => {
  return (
    <div data-aos="fade-right" className="mb-20 lg:mb-36">
      <h1 className="text-5xl lg:text-7xl gradient-text mb-10">My Skills</h1>
      <div className="h-[300px] overflow-y-scroll select-none scroll-bar">
        <SkillsCard title={"Java"} value={95} />
        <SkillsCard title={"Data Structures & Algorithms"} value={90} />
        <SkillsCard title={"Python"} value={80} />
        <SkillsCard title={"JavaScript"} value={75} />
        <SkillsCard title={"React.js"} value={70} />
        <SkillsCard title={"Node.js"} value={65} />
        <SkillsCard title={"Express.js"} value={60} />
        <SkillsCard title={"MongoDB"} value={65} />
        <SkillsCard title={"MySQL"} value={60} />
        <SkillsCard title={"TensorFlow"} value={55} />
        <SkillsCard title={"WebRTC"} value={60} />
        <SkillsCard title={"Socket.IO"} value={65} />
        <SkillsCard title={"Git"} value={70} />
        <SkillsCard title={"HTML/CSS"} value={75} />
        <SkillsCard title={"Bootstrap"} value={65} />
      </div>
    </div>
  );
};

export default SkillsSection;
