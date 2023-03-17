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
              I am a qualified, passionate and creative junior{" "}
              <b>Front-End Web Developer</b>. Highly skilled in communication,
              team player with an eye for detail and ambitious, eager to keep
              growing and evolving in my profession. I have recently completed
              an educational and training program on{" "}
              <b>Front-End Web Development</b> in{" "}
              <b>National and Kapodistrian University of Athens (E.K.P.A)</b>{" "}
              and been certified on <b>Full-Stack Web Development</b> in{" "}
              <b>CollegeLink</b>. Furthermore, I have studied a numerous online
              courses through Udemy and other similar platforms and{" "}
              <b>created my own projects</b> in order to practice and enrich my
              portfolio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
