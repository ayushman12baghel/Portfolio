import React from "react";
import myImg from "../assets/newprofile.jpeg";

const HomeCard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center mb-20 lg:mb-36">
      <div data-aos="fade-up-right" className="flex flex-col gap-5 lg:w-[50%]">
        <h1 className="text-5xl lg:text-7xl mb-10 gradient-text">Hey!</h1>
        <p className="text-gray-300 text-xl lg:text-2xl ">
          My name is Ayushman Baghel, and I am a Full Stack Developer currently pursuing B.Tech in Computer Science and Engineering at Lovely Professional University. I'm passionate about building scalable web applications and AI-powered solutions that solve real-world problems.
        </p>
        <p className="text-gray-300 text-xl lg:text-2xl ">
          With experience in technologies like React.js, Node.js, Python, and machine learning frameworks, I've developed projects ranging from video calling apps to AI-based traffic management systems. I maintain a consistent problem-solving streak on coding platforms and love contributing to the tech community.
        </p>
        <p className="text-gray-300 text-xl lg:text-2xl ">
          Currently pursuing internship opportunities and always eager to learn new technologies. Let's connect and build something amazing together!
        </p>
      </div>
      <div data-aos="fade-up-left">
        <img
          src={myImg}
          alt="profile"
          className="rounded-full w-[200px] h-[200px] lg:w-[450px] lg:h-[450px] mx-auto"
        />
      </div>
    </div>
  );
};

export default HomeCard;
