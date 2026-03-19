import React from "react";
import SkillsCard from "./SkillsCard";

const SkillsSection = () => {
  return (
    <div data-aos="fade-right" className="mb-20 lg:mb-36">
      <h1 className="text-5xl lg:text-7xl gradient-text mb-10">My Skills</h1>
      <div className="h-[300px] overflow-y-scroll select-none scroll-bar">
        {/* Core & Backend (Your strongest selling points) */}
        <SkillsCard title={"Data Structures & Algorithms"} value={95} />
        <SkillsCard title={"Java"} value={95} />
        <SkillsCard title={"Spring Boot"} value={85} />
        <SkillsCard title={"C++"} value={85} />
        
        {/* Full Stack & Web */}
        <SkillsCard title={"JavaScript"} value={80} />
        <SkillsCard title={"React.js"} value={80} />
        <SkillsCard title={"Node.js & Express.js"} value={80} />
        <SkillsCard title={"HTML / CSS"} value={85} />
        
        {/* Databases & Caching */}
        <SkillsCard title={"PostgreSQL & MySQL"} value={85} />
        <SkillsCard title={"MongoDB"} value={80} />
        <SkillsCard title={"Redis"} value={75} />
        
        {/* Python & Machine Learning */}
        <SkillsCard title={"Python"} value={85} />
        <SkillsCard title={"Scikit-learn & Machine Learning"} value={75} />
        
        {/* Tools & DevOps */}
        <SkillsCard title={"Git & GitHub"} value={85} />
        <SkillsCard title={"Docker & Postman"} value={75} />
      </div>
    </div>
  );
};

export default SkillsSection;