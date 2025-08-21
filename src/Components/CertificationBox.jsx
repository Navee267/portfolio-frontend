import { faBook, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const CertificationBox = ({ id,title, provider, link ,isLoggedIn}) => {
  const handleClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const API_URL = "https://portfolio-backend-3e40.onrender.com";

  const deleteCertification = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this Certificate?"
    );
    if (confirmed) {
      fetch(`${API_URL}/admin/deleteCertification/${id}`, {
        method: "DELETE",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Certification deleted successfully!");
          console.log(data);
        })
        .catch((err) => {
          console.error("Error deleting Certification:", err);
          alert("Failed to delete Certification");
        });
    }
  };

  return (
    <div className="w-full h-fit flex p-3 gap-4 border-b border-b-slate-300 relative">
      <span
        className={`absolute right-1 ${isLoggedIn ? 'flex' : 'hidden'} top-1 border border-slate-600 p-1 rounded-full hover:bg-slate-400 hover:text-white duration-500 ease-in-out transform`}
        onClick={() => deleteCertification(id)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </span>

      <span className="text-green-500">
        <FontAwesomeIcon icon={faBook} />
      </span>
      <div className="flex-col flex items-start gap-3">
        <h2 className="text-xl font-body">{title}</h2>
        <h1 className="text-2xl font-display">{provider}</h1>
        <button
          onClick={() => handleClick(link)}
          className="text-sm font-display font-medium cursor-pointer hover:border-b border-b-slate-500 hover:transform ease-in-out duration-300"
        >
          View <FontAwesomeIcon icon={faEye} />
        </button>
      </div>
    </div>
  );
};

export default CertificationBox;
