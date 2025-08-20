import React from "react";
import myimage from "../assets/myimage.jpg";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faHandshake,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="md:w-4/12 w-full md-lg:w-full h-fit bg-white rounded-2xl">
        <div className="flex w-full h-2/5 rounded justify-center p-2 mt-5">
          <img
            src={myimage}
            alt="heroimage"
            className="w-80 h-80 p-2 border-2 border-dashed border-green-600 flex rounded-full"
          />
        </div>
        <div className=" flex w-full h-3/5 flex-col items-center">
          <h2 className="text-4xl font-normal pt-6 pb-6 font-display">
            Naveen
          </h2>
          <p className="text-slate-700 font-normal text-xl w-9/12 mb-7 font-display flex text-center">
            I am a Full-Stack Web Developer Based In India.
          </p>
          <div className="pt-3 pb-5">
            <a className="social" href="https://github.com/Navee267">
              {" "}
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="social" href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              className="social"
              href="www.linkedin.com/in/n-naveen-kumar-b6a74a299"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className="social"
              href="https://www.instagram.com/its_navee_n_34?igsh=aDM0dG85c2txYmRt"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-2/3 md-lg:w-full w-full h-fit rounded-2xl space-y-5">
        <div className="w-full h-3/4 bg-white rounded-2xl flex flex-col p-8">
          <h3 className="font-medium font-body text-md mb-4 text-slate-600">
            Hello There!
          </h3>
          <h1 className="font-bold md:text-6xl font-display text-4xl mb-5 capitalize">
            I'm <span className="outline-text">Naveen</span> ,creating impactful{" "}
            <span className="outline-text">Web Solutions</span> that drive{" "}
            <span className="outline-text">Business Success</span>.
          </h1>
          <h3 className="text-md font-normal font-display mb-6">
            {" "}
            <FontAwesomeIcon className="text-green-600" icon={faSmile} />{" "}
            Available for Freelancing
          </h3>
          <div className="flex gap-2">
            <button className="relative text-white w-fit cursor-pointer hover:transform ease-in-out duration-300 flex justify-center items-center px-4 py-2 bg-green-600 border-2 border-slate-300 hover:border-slate-400 hover:text-white font-semibold rounded-xl overflow-hidden group">
              <span
                className="relative z-10 font-display"
                onClick={handleResumeClick}
              >
                Open CV{" "}
              </span>
              <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-green-100 to-transparent transform skew-x-[-20deg] group-hover:left-[100%] transition-all duration-700 ease-in-out"></span>
              <FontAwesomeIcon icon={faFile} />
            </button>
            <a href="mailto:navinraja0681@gmail.com">
              <button className="relative font-display cursor-pointer hover:transform ease-in-out duration-300 flex w-fit justify-center items-center px-4 py-2 bg-slate-200 border-2 border-slate-300 hover:border-green-500 hover:text-green-600 font-semibold rounded-xl overflow-hidden group">
                <span className="relative z-10">Hire Me </span>
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-green-100 to-transparent transform skew-x-[-20deg] group-hover:left-[100%] transition-all duration-700 ease-in-out"></span>
                <FontAwesomeIcon icon={faHandshake} />
              </button>
            </a>
          </div>
        </div>
        <div className="w-full h-3/4 bg-white rounded-2xl flex flex-col p-8 mt-4">
          <div className="marquee">
            <div className="marquee-content font-display">
              <span>Web Developer</span> |<span>Fullstack Dev</span> |
              <span>Canva Designer</span> |<span>Freelancer</span> |
            </div>
            <div className="marquee-content font-display">
              <span>Web Developer</span> |<span>Fullstack Dev</span> |
              <span>Canva Designer</span> |<span>Freelancer</span> |
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
