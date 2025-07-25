import React from "react";

const Footer = () => {
  return (
    <div className="font-atkinson text-center  mt-12 mb-8 text-brand-purple ">
      <p className="text-xl md:text-2xl font-bold">Poorvi Bhatia</p>
      <div className="text-base md:text-lg mt-2">
        <p>Copyright © {new Date().getFullYear()}</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
