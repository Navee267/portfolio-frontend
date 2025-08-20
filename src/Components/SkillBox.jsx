import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'

import AOS from 'aos';
import "aos/dist/aos.css";

const SkillBox = ({id,img,skill,level,isLoggedIn}) => {
  useEffect(() => {
    AOS.init({
      duration: 800,  
      once: true,  
    });
  }, []);
  const deleteSkill = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this skill?");
    if (confirmed) {
      fetch(`http://localhost:5000/admin/deleteSkill/${id}`, {
        method: 'DELETE',
        credentials: 'include'
      })
      .then(res => res.json())
      .then(data => {
        alert("Skill deleted successfully!");
        console.log(data);
      })
      .catch(err => {
        console.error("Error deleting skill:", err);
        alert("Failed to delete skill");
      });
    }
  };

  return (
    <div className='flex flex-col p-8 w-56 h-60 rounded-md justify-center items-center relative' data-aos={'fade-up'}>
      <span className={`absolute right-1 top-1 border border-slate-600 p-1 rounded-full hover:bg-slate-400 hover:text-white duration-500 ease-in-out transform ${isLoggedIn ? 'flex' : 'hidden'}`} onClick={()=>deleteSkill(id)}><FontAwesomeIcon icon={faTrash}/></span>
        <img src={`http://localhost:5000/${img.path}`} alt={skill}/>
        <h3 className=' font-display text-sm mb-3 mt-2'>{skill}</h3>
        <h2 className=' border-2 w-40 p-2 font-display flex rounded-md justify-center hover:text-white hover:bg-black bg-green-600 border-slate-300 text-slate-200 duration-300 ease-in-out transform '>{level}</h2>
    </div>
  )
}

export default SkillBox