import { faBook, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const EducationBox = ({ date, ins, role, isLoggedIn, deleteone }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  const deleteEducation = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this education?"
    );
  const API_URL = "https://portfolio-backend-3e40.onrender.com";

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
    <div className="flex flex-row w-full relative" data-aos={'fade-up'}>
      <span className="w-12 mt-4 text-green-600">
        <FontAwesomeIcon icon={faBook} />
      </span>
      <div className="flex w-full flex-col">
        <h2 className="text-lg capitalize font-light font-display">{date}</h2>
        <h3 className="text-2xl font-medium text-slate-500 font-display">
          {ins}
        </h3>
        <h4 className="text-sm font-light font-body">{role}</h4>
      </div>
      <span
        className={`absolute right-1 top-1 border border-slate-600 p-1 rounded-full hover:bg-slate-400 hover:text-white duration-500 ease-in-out transform ${
          isLoggedIn ? "flex" : "hidden"
        }`}
        onClick={deleteone}
      >
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </div>
  );
};

export default EducationBox;
