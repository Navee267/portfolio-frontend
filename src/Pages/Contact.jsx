import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div className="w-full h-full flex flex-col items-center p-8 rounded-2xl bg-white">
      <h2 className="text-xl font-medium mt-10 font-body">Contact</h2>
      <h1 className="text-2xl font-medium text-center mb-10 mt-3 max-w-4xl font-display">
        Get in Touch with Me!
      </h1>
      <div
        className="w-full h-full flex gap-5 md:flex-row flex-col"
        data-aos="fade-right"
      >
        <div className="flex flex-col md:w-2/5 w-full h-fit border border-slate-400 p-8 rounded-2xl">
          <div className="contactdiv">
            <span className="text-green-500">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <h2 className="text-lg font-display">Address : </h2>
            <h3 className="font-light text-sm font-display">
              Tenkasi ,TamilNadu,India
            </h3>
          </div>
          <div className="contactdiv">
            <span className="text-green-500">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <h2 className="text-lg font-display">Contact Number : </h2>
            <h3 className="font-light text-sm font-display">+91 8098670681</h3>
          </div>
          <div className="contactdiv">
            <span className="text-green-500">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <h2 className="text-lg font-display">Email : </h2>
            <h3 className="font-light text-sm font-display">
              navinraja0681@gmail.com
            </h3>
          </div>
        </div>
        <div
          className="flex flex-col md:w-3/5 w-full h-fit justify-center border border-slate-400 p-8 rounded-2xl "
          data-aos="fade-left"
        >
          <form action="" className="flex flex-col gap-6 w-full h-fit">
            <div className="flex gap-3">
              <input type="text" placeholder="Name" className="input" />
              <input type="email" placeholder="Email" className="input" />
            </div>
            <input type="text" placeholder="Subject" className="input" />
            <textarea
              cols="30"
              rows="3"
              className="input"
              placeholder="Message"
            ></textarea>
            <button className="relative text-white w-fit cursor-pointer hover:transform ease-in-out duration-300 flex justify-center items-center px-10 py-2 bg-green-600 border-2 border-slate-300 hover:border-slate-400 hover:text-white font-semibold rounded-xl overflow-hidden group">
              <span className="relative z-10 font-display">Send </span>
              <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-green-100 to-transparent transform skew-x-[-20deg] group-hover:left-[100%] transition-all duration-700 ease-in-out"></span>
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
