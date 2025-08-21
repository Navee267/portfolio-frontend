import React, { useEffect, useState } from "react";
import EducationBox from "../Components/EducationBox";
import { faAdd, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Education = ({ isLoggedIn }) => {

  const [educations, setEducations] = useState([]);
  const [date, setDate] = useState("");
  const [ins, setIns] = useState("");
  const [role, setRole] = useState("");

  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL;
  console.log(API_URL);

  useEffect(() => {
    fetch(`${API_URL}/admin/allEducations`)
      .then((res) => res.json())
      .then((data) => {
        if (data.alleducations) {
          setEducations(data.alleducations);
        } else {
          setEducations([]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const popup = () => {
    setVisible(true);
  };

  const popup1 = () => {
    setVisible1(true);
  };

  const x = () => {
    setVisible(false);
  };
  const x1 = () => {
    setVisible1(false);
  };

  const addEducation = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("date", date);
    formData.append("ins", ins);
    formData.append("role", role);
    try {
      const res = await fetch(`${API_URL}/admin/addEducation`, {
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

  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/admin/allExperiences`)
      .then((res) => res.json())
      .then((data) => {
        if (data.allexperiences) {
          setExperiences(data.allexperiences);
        } else {
          setExperiences([]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const addExperience = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("date", date);
    formData.append("ins", ins);
    formData.append("role", role);
    try {
      const res = await fetch(`${API_URL}/admin/addExperience`, {
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

  const deleteEducation = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this education?"
    );
    if (confirmed) {
      fetch(`${API_URL}/admin/deleteEducation/${id}`, {
        method: "DELETE",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Education deleted successfully!");
          console.log(data);
        })
        .catch((err) => {
          console.error("Error deleting Education:", err);
          alert("Failed to delete Education");
        });
    }
  };

  const deleteExperience = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this Ecperience?"
    );
    if (confirmed) {
      fetch(`${API_URL}/admin/deleteExperience/${id}`, {
        method: "DELETE",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Experience deleted successfully!");
          console.log(data);
        })
        .catch((err) => {
          console.error("Error deleting Experience:", err);
          alert("Failed to delete Experience");
        });
    }
  };

  return (
    <div className="flex md:flex-row gap-5 flex-col w-full h-full">
      <div className="w-full h-fit rounded-2xl bg-white flex flex-col p-8">
        <h2 className="text-3xl mb-10 font-display">Internship</h2>
        <h3
          className={`flex ${
            isLoggedIn ? "flex" : "hidden"
          } gap-2 mb-6 cursor-pointer text-slate-600 w-fit font-display border p-2 rounded-2xl border-slate-500`}
          onClick={popup}
        >
          Add Experience
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
          <h2>Add New Experience</h2>
          <form onSubmit={addExperience} className="flex flex-col gap-6 mb-10">
            <input
              type="text"
              value={date}
              className="input"
              onChange={(e) => setDate(e.target.value)}
              placeholder="Enter Date "
            />
            <input
              type="text"
              value={ins}
              className="input"
              onChange={(e) => setIns(e.target.value)}
              placeholder="Enter Institution "
            />
            <input
              type="text"
              value={role}
              className="input"
              onChange={(e) => setRole(e.target.value)}
              placeholder="Enter Role "
            />
            <button
              type="submit"
              className="bg-green-500 p-3 rounded-xl font-display text-lg hover:bg-green-400 "
            >
              Add
            </button>
          </form>
        </div>
        <div className="flex flex-col w-full gap-3 h-full">
          {experiences.map((item, idx) => (
            <div key={idx} className="flex border-b-2 border-slate-300 p-2">
              <EducationBox
                date={item.date}
                ins={item.ins}
                role={item.role}
                isLoggedIn={isLoggedIn}
                deleteone={() => deleteExperience(item._id)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full min-h-96 flex rounded-2xl flex-col bg-white p-8">
        <h2 className="text-3xl mb-10 font-display">Education</h2>
        <h3
          className={`flex ${
            isLoggedIn ? "flex" : "hidden"
          } gap-2 mb-6 cursor-pointer w-fit text-slate-600 font-display border p-2 rounded-2xl border-slate-500`}
          onClick={popup1}
        >
          Add Education
          <span className="border border-slate-400 flex justify-center items-center rounded-full">
            <FontAwesomeIcon icon={faAdd} />
          </span>
        </h3>
        <div
          className={` flex-col ${
            visible1 ? "flex" : "hidden"
          } items-center gap-4 z-50 fixed top-20 bg-white p-10 border border-slate-400 rounded-sm `}
        >
          <span className=" w-full relative" onClick={x1}>
            <FontAwesomeIcon
              className="absolute right-1 bg-red-500 p-1 rounded-sm"
              icon={faXmark}
            />
          </span>
          <h2>Add New Education</h2>
          <form onSubmit={addEducation} className="flex flex-col gap-6 mb-10">
            <input
              type="text"
              value={date}
              className="input"
              onChange={(e) => setDate(e.target.value)}
              placeholder="Enter Date "
            />
            <input
              type="text"
              value={ins}
              className="input"
              onChange={(e) => setIns(e.target.value)}
              placeholder="Enter Institution "
            />
            <input
              type="text"
              value={role}
              className="input"
              onChange={(e) => setRole(e.target.value)}
              placeholder="Enter Role "
            />
            <button
              type="submit"
              className="bg-green-500 p-3 rounded-xl font-display text-lg hover:bg-green-400 "
            >
              Add
            </button>
          </form>
        </div>
        <div className="flex flex-col w-full gap-3 h-full">
          {educations.map((item, idx) => (
            <div
              key={idx}
              className="flex w-full border-b border-slate-300 p-2"
            >
              <EducationBox
                date={item.date}
                ins={item.ins}
                role={item.role}
                isLoggedIn={isLoggedIn}
                deleteone={() => deleteEducation(item._id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
