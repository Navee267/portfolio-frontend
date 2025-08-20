import { faAdd, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Works = ({isLoggedIn}) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const [visible, setVisible] = useState(false);

  const [works, setWorks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/admin/allProjects")
      .then((res) => res.json())
      .then((data) => {
        if (data.allprojects) {
          setWorks(data.allprojects);
        } else {
          setWorks([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const categories = ["All", ...new Set(works.map((cat) => cat.category))];

  const groupedWorks = Object.values(
    works.reduce((acc, project) => {
      if (!acc[project.category]) {
        acc[project.category] = { category: project.category, projects: [] };
      }
      acc[project.category].projects.push({
        _id : project._id,
        name: project.name,
        description: project.description,
        link: project.link,
        image: project.file[0]
          ? `http://localhost:5000/${project.file[0].path.replace(/\\/g, "/")}`
          : null,
      });
      return acc;
    }, {})
  );

  const allProjects = groupedWorks.flatMap((cat) => cat.projects);

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : groupedWorks.find((cat) => cat.category === selectedCategory)
          ?.projects || [];

  const goto = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const popup = () => {
    setVisible(true);
  };

  const x = () => {
    setVisible(false);
  };

  const addProject = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("link", link);
    formData.append("description", description);
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:5000/admin/addProject", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      alert('project added successfully');
      setVisible(false);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteWorks = (id) => {
    if (!id) {
      alert("Project ID missing!");
      return;
    }
    const confirmed = window.confirm(
      "Are you sure you want to delete this Certificate?"
    );
    if (confirmed) {
      fetch(`http://localhost:5000/admin/deleteProject/${id}`, {
        method: "DELETE",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Project deleted successfully!");
          console.log(data);
        })
        .catch((err) => {
          console.error("Error deleting Project:", err);
          alert("Failed to delete Project");
        });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-fit px-6 relative">
      <h2 className="text-xl font-medium mt-10 font-body">Works & Projects</h2>
      <h1 className="text-md text-center mb-10 mt-3 max-w-4xl font-display">
        Check out some of my design projects, meticulously crafted with love and
        dedication, each one reflecting the passion and soul I poured into every
        detail.
      </h1>

      <h3
        className={`gap-2 mb-6  ${isLoggedIn ? 'flex' : 'hidden'} cursor-pointer text-slate-600 font-display border p-2 rounded-2xl border-slate-500`}
        onClick={popup}
      >
        Add Project
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
        <h2>Add New Project</h2>
        <form onSubmit={addProject} className="flex w-64 flex-col gap-6 mb-10">
          <input
            type="text"
            value={name}
            className="input"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name (Project Name)"
          />
          <input
            type="text"
            value={category}
            className="input"
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter Category (Ex : Mern-Stack ) "
          />
          <input
            type="text"
            value={link}
            placeholder="Enter Link (Ex : Github/Live)"
            className="input"
            onChange={(e) => setLink(e.target.value)}
          />
          <textarea
            type="text"
            value={description}
            placeholder="Enter Description"
            className="input"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button
            type="submit"
            className="bg-green-500 p-3 rounded-xl font-display text-lg hover:bg-green-400 "
          >
            Add
          </button>
        </form>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((item, idx) => (
          <button
            key={idx}
            className={`px-4 cursor-pointer py-2 border rounded transition-all duration-300 ${
              selectedCategory === item
                ? "bg-green-500 text-white scale-105"
                : "bg-white text-black hover:bg-green-100"
            }`}
            onClick={() => setSelectedCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 bg-white p-8 rounded-2xl md:grid-cols-3 gap-6 w-full max-w-6xl">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="border h-fit w-full relative cursor-pointer rounded-lg shadow-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105" data-aos={'fade-up'}
          >
            <span
              className={`absolute ${isLoggedIn ? 'flex' : 'hidden'} right-1 mb-4 top-1 border border-slate-600 p-1 rounded-full hover:bg-slate-400 hover:text-white duration-500 ease-in-out transform`}
              onClick={() => deleteWorks(project._id)}
            >
              {" "}
              <FontAwesomeIcon icon={faTrash} />
            </span>
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded"
                onClick={() => goto(project.link)}
              />
            )}
            <h2 className="text-md text-black font-bold mt-3 font-display">
              {project.name}
            </h2>
            <p className="text-gray-600 text-sm font-display">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
