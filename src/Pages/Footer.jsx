import React from "react";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col w-full h-14 md:justify-between items-center gap-2">
      <h2 className="font-display">
        {" "}
        Copyright @2024,{" "}
        <span className="cursor-pointer text-green-500 hover:border-b hover:border-slate-400">
          Naveen
        </span>{" "}
        All Rights Reserved.
      </h2>
      <h3 className="font-display">
        Made By ❤️{" "}
        <span className="cursor-pointer text-green-500 hover:border-b hover:border-slate-400">
          Naveen
        </span>{" "}
      </h3>
    </div>
  );
};

export default Footer;
