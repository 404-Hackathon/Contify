import React from "react";
import { Link } from "react-router-dom";
import "./subjects.css";
function Subjects(props) {
  return (
    <div className="subjects-Container">
      <div className="section">
        <h1>Science:</h1>
        <div className="section-subject">
          <Link exact to="/biology">
            <div className="single-subject">
              Biology
              <hr className="hr-1" />
              <hr className="hr-2" />
              <hr className="hr-3" />
            </div>
          </Link>
          <Link exact to="/physics">
            <div className="single-subject">
              Physics
              <hr className="hr-1" />
              <hr className="hr-2" />
              <hr className="hr-3" />
            </div>
          </Link>
          <Link exact to="/chemistry">
            <div className="single-subject">
              Chemistry
              <hr className="hr-1" />
              <hr className="hr-2" />
              <hr className="hr-3" />
            </div>
          </Link>
        </div>
      </div>
      <div className="section">
        <h1>Literary</h1>
        <div className="section-subject">
          <Link exact to="/history">
            <div className="single-subject">
              History
              <hr className="hr-1" />
              <hr className="hr-2" />
              <hr className="hr-3" />
            </div>
          </Link>
          <Link exact to="/geography">
            <div className="single-subject">
              Geography <hr className="hr-1" />
              <hr className="hr-2" />
              <hr className="hr-3" />
            </div>
          </Link>
          <Link exact to="/arabic">
            <div className="single-subject">
              Arabic
              <hr className="hr-1" />
              <hr className="hr-2" />
              <hr className="hr-3" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Subjects;
