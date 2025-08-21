import React, { useEffect, useState } from "react";
import SkillBox from "../Components/SkillBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faXmark } from "@fortawesome/free-solid-svg-icons";


import AOS from 'aos';
import "aos/dist/aos.css";

const Skills = ({ isLoggedIn }) => {
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState("");
  const [file, setFile] = useState(null);

  const [visible, setVisible] = useState(false);

  const API_URL = "https://portfolio-backend-3e40.onrender.com";

  useEffect(() => {
    fetch(`${API_URL}/admin/allSkills`)
      .then((res) => res.json())
      .then((data) => {
        if (data.allskills) {
          setSkills(data.allskills);
        } else {
          setSkills([]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const popup = () => {
    setVisible(true);
  };

  const x = () => {
    setVisible(false);
  };

  const addSkill = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("skill", skill);
    formData.append("level", level);
    formData.append("file", file);
    try {
      const res = await fetch(`${API_URL}/admin/addSkill`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setVisible(false);
    } catch (err) {
      console.log(err);
    }
  };

 

  return (
    <div className="flex flex-col items-center w-full h-fit relative">
      <h2 className="text-xl font-medium mt-10 font-body">Pro Skills</h2>
      <h1 className="text-4xl mb-3 font-display">Let’s Explore My Skills</h1>
      <h3
        className={`flex ${isLoggedIn ? 'flex' : 'hidden'} gap-2 mb-6 cursor-pointer text-slate-600 font-display border p-2 rounded-2xl border-slate-500`}
        onClick={popup}
      >
        Add Skill
        <span className="border border-slate-400 flex justify-center items-center rounded-full">
          <FontAwesomeIcon icon={faAdd} />
        </span>
      </h3>
      <div
        className={` flex-col ${
          visible ? "flex" : "hidden"
        } items-center gap-4 z-50 fixed top-20 bg-white p-10 border border-slate-400 rounded-sm `}
      >
        <span className=" w-full relative" onClick={x}>
          <FontAwesomeIcon
            className="absolute right-1 bg-red-500 p-1 rounded-sm"
            icon={faXmark}
          />
        </span>
        <h2>Add New Skill</h2>
        <form onSubmit={addSkill} className="flex flex-col gap-6 mb-10">
          <input
            type="text"
            value={skill}
            className="input"
            onChange={(e) => setSkill(e.target.value)}
            placeholder="Enter Skill "
          />
          <input
            type="number"
            value={level}
            className="input"
            onChange={(e) => setLevel(e.target.value)}
            placeholder="Enter Level (Number/100)"
          />
          <input
            type="file"
            className=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button
            type="submit"
            className="bg-green-500 p-3 rounded-xl font-display text-lg hover:bg-green-400 "
          >
            Add
          </button>
        </form>
      </div>
      <div className="flex flex-wrap gap-5 md:justify-between justify-center">
        {skills.map((item, idx) => (
          <div
            key={idx}
            className="flex md:basis-1/5 basis-1/2 md-lg:basis-1/3 pr-5 pt-3 pb-3 pl-5 justify-center items-center border-2 cursor-pointer border-slate-300 hover:border-green-400 rounded-2xl"
          >
            <SkillBox
              id={item._id}
              img={item.file[0]}
              skill={item.skill}
              level={item.level}
              isLoggedIn={isLoggedIn}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
