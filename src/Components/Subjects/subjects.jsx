import React from "react";
import { Link } from "react-router-dom";
import "./subjects.css";
function Subjects(props) {
  return (
    <div className="subjects-Container">
      <div className="section">
        <h1>Science:</h1>
        <div className="section-subject">
          <Link className="link" exact to="/biology">
            <div className="single-subject">Biology</div>
          </Link>
          <Link className="link" exact to="/physics">
            <div className="single-subject">Physics </div>
          </Link>
          <Link className="link" exact to="/chemistry">
            <div className="single-subject">Chemistry</div>
          </Link>
        </div>
      </div>
      <div className="section">
        <h1>Literary</h1>
        <div className="section-subject">
          <Link className="link" exact to="/history">
            <div className="single-subject">History</div>
          </Link>
          <Link className="link" exact to="/geography">
            <div className="single-subject">Geography</div>
          </Link>
          <Link className="link" exact to="/arabic">
            <div className="single-subject">Arabic</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Subjects;
