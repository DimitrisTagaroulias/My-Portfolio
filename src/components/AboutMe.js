import React from "react";
import author from "../images/Me_400px.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="about-me-container">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
              <img className="profile-img" src={author} alt="author..."></img>
            </div>
          </div>
          <div className="about-me-container col-lg-6 col-xm-12">
            <h1 className="about-heading">about me</h1>
            <p>
              Hello! I am Dimitris.
              <br />
              ...blah blah blah...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
