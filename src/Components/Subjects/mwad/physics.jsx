import React from "react";
import Pimg from "./052020_ts_scientific-words_feat-1028x579.jpg";
import physicsIMG from "./Physics.jpg";
import physicsIMG2 from "./5428546ee0575a445a44b997988de1f1.jpg";
import physicsIMG3 from "./Physics-WaLp-tw2011-840x560.png";
import physicsIMG4 from "./physics-chalkboard_cropped.jpg";
import "./details.css";
function physics(props) {
  return (
    <div className="details">
      <h1>Physics</h1>
      <h2>Teacher: Amani alkandery </h2>
      <div className="content">
        <div className="single">
          <a href="https://drive.google.com/file/d/1WLD7gWF2IrNlI16HxjJyuV2kZ4aKlZEj/view">
            <img className="P-img" src={Pimg}></img>
            <h5>Grade 11 - Second Term Notes</h5>
          </a>
        </div>
        <div className="single">
          <a href="https://drive.google.com/file/d/1Eh5t79uaWwtygqwqIzwrdE8LPEjkTZoF/view">
            <img className="P-img" src={physicsIMG}></img>
            <h5>Grade 11 - First Term Notes</h5>
          </a>
        </div>
        <div className="single">
          <a href="https://www.youtube.com/watch?v=9kLlIRYBWak">
            <img className="P-img" src={physicsIMG2}></img>
            <h5>Grade 11 - Heat video</h5>
          </a>
        </div>
        <div className="single">
          <a href="https://www.youtube.com/watch?v=wsTyDW4dEdo">
            <img className="P-img" src={physicsIMG3}></img>
            <h5>Grade 11 - Heat video 2</h5>
          </a>
        </div>
        <div className="single">
          <a href="https://www.youtube.com/watch?v=yGOsssBOz7Q">
            <img className="P-img" src={physicsIMG4}></img>
            <h5>Grade 11 - quantitties video </h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default physics;
