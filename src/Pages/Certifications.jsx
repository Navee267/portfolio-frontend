import React, { useEffect, useState } from "react";
// import certifications from "../json/Certifications.json";
import CertificationBox from "../Components/CertificationBox";
import { faAdd, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Certifications = ({isLoggedIn}) => {
  const [certifications, setCertifications] = useState([]);
  const [title, setTitle] = useState("");
  const [provider, setProvider] = useState("");
  const [link, setLink] = useState("");

  const [visible,setVisible] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/admin/allCertifications")
      .then((res) => res.json())
      .then((data) => {
        if (data.allcertifications) {
          setCertifications(data.allcertifications);
        } else {
          setCertifications([]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const popup = () => {
    setVisible(true)
  };

  const x = () => {
    setVisible(false)
  };

  const addCertification = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("provider", provider);
    formData.append("link", link);
    try {
      const res = await fetch("http://localhost:5000/admin/addCertification", {
        method: "POST",
        body: formData,
        credentials : 'include'
      });
      const data = await res.json();
      console.log(data);
      setVisible(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col items-center w-full h-fit px-6 relative">
      <h2 className="text-xl font-medium mt-10 font-body">Certifications </h2>
      <h1 className="text-md text-center mb-10 mt-3 max-w-4xl font-display">
        Recognized certifications showcasing my skills, expertise, and
        commitment to continuous growth in technology.
      </h1>
      <h3
        className={`flex  ${isLoggedIn ? 'flex' : 'hidden'} gap-2 mb-6 cursor-pointer text-slate-600 font-display border p-2 rounded-2xl border-slate-500`}
        onClick={popup}
      >
        Add Certification
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
        <h2>Add New Certification</h2>
        <form onSubmit={addCertification} className="flex w-64 flex-col gap-6 mb-10">
          <input
            type="text"
            value={title}
            className="input"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Title "
          />
          <input
            type="text"
            value={provider}
            className="input"
            onChange={(e) => setProvider(e.target.value)}
            placeholder="Enter Provider "
          />
          <input
            type="text"
            value={link}
            placeholder="Enter Link (Ex : Drive)"
            className="input"
            onChange={(e) => setLink(e.target.link)}
          />
          <button
            type="submit"
            className="bg-green-500 p-3 rounded-xl font-display text-lg hover:bg-green-400 "
          >
            Add
          </button>
        </form>
      </div>
      <div className="w-full h-fit grid md:grid-cols-2 p-8 rounded-2xl bg-white grid-cols-1">
        {certifications.map((item, idx) => (
          <div className=" flex-col flex" key={idx}>
            <CertificationBox
              id={item._id}
              title={item.title}
              provider={item.provider}
              link={item.link}
              isLoggedIn = {isLoggedIn}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
