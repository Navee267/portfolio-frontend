import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LetsTalk = () => {
  return (
    <div className="w-full h-fit p-8 rounded-2xl bg-white flex flex-col items-center">
      <h1 className="font-bold mt-5 md:w-3/4 w-11/12 md:text-5xl text-3xl font-display mb-5 capitalize text-center">
        Are You Ready to<span className="outline-text"> kickstart</span> your{" "}
        <span className="outline-text">project </span> with a touch of magic?{" "}
      </h1>
      <h3 className="text-xl md:w-3/4 w-11/12 text-center mt-10 font-display">
        Reach out and let's make it happen ✨. I'm also available for full-time
        or Part-time opportunities to push the boundaries of design and deliver
        exceptional work.
      </h3>
      <a href="http://instagram.com/its_navee_n_34">
        <button className="relative mt-10 text-white w-fit cursor-pointer hover:transform ease-in-out duration-300 flex  justify-center items-center px-4 py-2 bg-green-600 border-2 border-slate-300 hover:border-slate-400 hover:text-white font-semibold rounded-xl overflow-hidden group">
          <span className="relative z-10 font-display">Let's Talk</span>
          <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-green-100 to-transparent transform skew-x-[-20deg] group-hover:left-[100%] transition-all duration-700 ease-in-out"></span>
          <FontAwesomeIcon icon={faDownload} />
        </button>
      </a>
    </div>
  );
};

export default LetsTalk;
