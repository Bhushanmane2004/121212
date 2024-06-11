import React from "react";
import "./Patterns.css";
import { assets } from "../../assets/assets";

const Patterns = () => {
  return (
    <>
        <hr />
      <div className="paterns">
        <div className="paterns-left">
          Our Growing Collaboration and Partners
        </div>
        <div className="paterns-right">
          <img className="Doctor" src={assets.doc} />
          <img className="Insu" src={assets.Insuruance} />
          <img className="path" src={assets.path} />
        </div>
      </div>
    </>
  );
};

export default Patterns;
