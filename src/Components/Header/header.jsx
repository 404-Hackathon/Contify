import React from "react";
import "./header.css";
import Jewel from "./Jewel.png";
function header(props) {
  return (
    <div className="header-Container">
      <img className="Logo" src={Jewel} alt="" />
      <h1>Contify</h1>
    </div>
  );
}

export default header;
