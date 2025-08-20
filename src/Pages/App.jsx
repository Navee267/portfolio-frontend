import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import About from "./About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faLock, faXmark } from "@fortawesome/free-solid-svg-icons";
import Services from "./Services";
import Education from "./Education";
import Skills from "./Skills";
import Works from "./Works";
import Certifications from "./Certifications";
import Contact from "./Contact";
import LetsTalk from "./LetsTalk";
import Footer from "./Footer";
import axios from 'axios';


import AOS from 'aos';
import "aos/dist/aos.css";

const App = () => {
  const [menu, setMenu] = useState(false);
  const API_URL = process.env.REACT_APP_API_URL;

  const show = () => {
    setMenu(!menu);
  };

  const [navBg, setNavBg] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [visible, setVisible] = useState(false);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const popup = () => {
    setVisible(true);
  };

  const x = () => {
    setVisible(false);
  };

  const login = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const res = await fetch(`${API_URL}/login/`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);if (data.message === "LOGIN Successfull With Cookies") {
        setIsLoggedIn(true); 
        setVisible(false); 
        axios.get(`${API_URL}/admin/auth/checkAuth`, { withCredentials: true })
          .then(res => {
            if (res.data.loggedIn) {
              setUser(res.data.user);
            }
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/admin/auth/checkAuth`, { withCredentials: true })
      .then((res) => {
        if (res.data.loggedIn) {
          setIsLoggedIn(true);
          setUser(res.data.user);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch(() => setIsLoggedIn(false));
  }, []);

  console.log('isLogged' + isLoggedIn);

  useEffect(() => {
    AOS.init({
      duration: 800,  
      once: true,  
    });
  }, []);


  return (
    <div className=" w-full h-full flex justify-center bg-slate-200">
      <div className="md:w-4/5 w-11/12 md-lg:w-11/12 h-full flex flex-col items-center relative">
        <nav
          className={`w-full h-20 flex md:justify-around justify-between items-center border-b-2 fixed top-0 left-0 z-50 transition-colors duration-300 ${
            navBg
              ? "bg-white border-b-slate-300 shadow-md"
              : "bg-transparent border-b-transparent"
          }`}
        >
          <h2 className="text-3xl font-bold ml-7 font-body">Naveen</h2>
          <ul
            className={`${navBg ? "bg-white" : "bg-slate-400"} ${
              menu
                ? "flex flex-col absolute top-20 right-10 z-50 bg-slate-500 pr-20"
                : "hidden"
            } md:static md:bg-transparent md:flex-row md:flex`}
          >
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="link"
            >
              About
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-70}
              className="link"
            >
              Services
            </Link>
            <Link
              to="works"
              smooth={true}
              duration={500}
              offset={-70}
              className="link"
            >
              Works
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-70}
              className="link"
            >
              Skills
            </Link>
            <Link
              to="certifications"
              smooth={true}
              duration={500}
              offset={-70}
              className="link"
            >
              Certifications
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="link"
            >
              Contact
            </Link>
            <button className="relative md:hidden font-display cursor-pointer hover:transform ease-in-out duration-300 flex justify-center items-center px-2 py-1 bg-slate-400 border-1 border-slate-300 hover:border-green-500 hover:text-green-600 font-semibold rounded-lg m-2 overflow-hidden group">
              <span className="relative z-10" onClick={popup}>
                Admin{" "}
              </span>
              <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-green-100 to-transparent transform skew-x-[-20deg] group-hover:left-[100%] transition-all duration-700 ease-in-out"></span>
              <FontAwesomeIcon icon={faLock} />
            </button>
          </ul>

          <button className="relative top-0 md:flex hidden font-display cursor-pointer hover:transform ease-in-out duration-300 justify-center items-center px-4 py-2 bg-slate-200 border-2 border-slate-300 hover:border-green-500 hover:text-green-600 font-semibold rounded-xl overflow-hidden group">
            <span className="relative z-10" onClick={popup}>
              Admin{" "}
            </span>
            <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-green-100 to-transparent transform skew-x-[-20deg] group-hover:left-[100%] transition-all duration-700 ease-in-out"></span>
            <FontAwesomeIcon icon={faLock} />
          </button>
          <div
            className={` flex-col ${
              visible ? "flex" : "hidden"
            } items-center gap-4 z-50 fixed top-20 left-20 bg-white p-10 border border-slate-400 rounded-sm `}
          >
            <span className=" w-full relative" onClick={x}>
              <FontAwesomeIcon
                className="absolute right-1 bg-red-500 p-1 rounded-sm"
                icon={faXmark}
              />
            </span>
            <h2>Log In</h2>
            <form onSubmit={login} className="flex w-64 flex-col gap-6 mb-10">
              <input
                type="email"
                value={email}
                className="input"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                required
              />
              <input
                type="password"
                value={password}
                className="input"
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter password "
              />
              <button
                type="submit"
                className="bg-green-500 p-3 rounded-xl font-display text-lg hover:bg-green-400 "
              >
                Log In <FontAwesomeIcon icon={faKey} />
              </button>
            </form>
          </div>
          <span className=" md:hidden flex cursor-pointer mr-7" onClick={show}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
        </nav>
        <div
          className="w-full h-full flex md:flex-row md-lg:flex-col flex-col mt-24 gap-5"
          id="about"
        >
          <About isLoggedIn={isLoggedIn}/>
        </div>
        <div
          className="w-full h-full flex flex-col md-lg:flex-col mt-10"
          id="services" data-aos={'fade-up'}
        >
          <Services isLoggedIn={isLoggedIn}/>
        </div>

        <div
          className="w-full h-full flex md-lg:flex-col flex-col mt-10 "
          id="education" data-aos={'fade-up'}
        >
          <Education isLoggedIn={isLoggedIn}/>
        </div>
        <div
          className="w-full h-full flex md-lg:flex-col flex-col mt-10"
          id="skills" data-aos={'fade-up'}
        >
          <Skills isLoggedIn={isLoggedIn}/>
        </div>
        <div
          className="w-full h-full flex md-lg:flex-col flex-col mt-10"
          id="works" data-aos={'fade-up'}
        >
          <Works isLoggedIn={isLoggedIn}/>
        </div>
        <div
          className="w-full h-full flex md-lg:flex-col flex-col mt-10"
          id="certifications" data-aos={'fade-up'}
        >
          <Certifications isLoggedIn={isLoggedIn}/>
        </div>
        <div
          className="w-full h-full flex md-lg:flex-col flex-col mt-10"
          id="contact" data-aos={'fade-up'}
        >
          <Contact/>
        </div>
        <div
          className="w-full h-full flex md-lg:flex-col flex-col mt-10"
          id="letstalk" data-aos={'fade-up'}
        >
          <LetsTalk />
        </div>
        <div
          className="w-full h-full flex md-lg:flex-col flex-col mt-10"
          id="footer" data-aos={'fade-up'}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
