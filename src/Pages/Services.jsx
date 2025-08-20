import React from "react";
import webdev from "../assets/webdev.png";
import ServiceBox from "../Components/ServiceBox";
import canva from "../assets/canva.png";
import api from "../assets/api.webp";

const Services = () => {
  const services = [
    {
      img: webdev,
      title: "Fullstack Web Development",
      description:
        "Building dynamic, responsive, and scalable web applications using React, Node.js, Express, and MongoDB.",
    },
    {
      img: canva,
      title: "Poster & Social Media Design",
      description:
        "Creating visually appealing posters, banners, and social media content using Canva.",
    },
    {
      img: api,
      title: "Custom REST API Development",
      description:
        "Designing and implementing efficient backend APIs for seamless integration with frontend apps.",
    },
  ];

  return (
    <div className="bg-white flex flex-col w-full h-fit items-center rounded-2xl">
      <h2 className="text-xl font-medium mt-10 font-body">Services</h2>
      <h1 className="text-4xl mb-10 font-display">Quality Services</h1>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {services.map((item, idx) => (
          <div key={idx} className="flex">
            <ServiceBox
              img={item.img}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
