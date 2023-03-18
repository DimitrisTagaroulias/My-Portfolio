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
              Qualified, passionate and creative <b>Front-End Web Developer</b>.
              Highly skilled in communication, team player with an eye for
              detail and ambitious, eager to keep growing and evolving in my
              profession. Certified on <b>Front-End Web Development</b> from{" "}
              <b>National and Kapodistrian University of Athens (E.K.P.A)</b>{" "}
              and <b>Full-Stack Web Development</b> from <b>CollegeLink</b>. As
              a Front-End Web Developer, I have honed my skills in{" "}
              <b>HTML, CSS, JavaScript, jQuery and React</b> by building{" "}
              <b>my own projects</b>, which are showcased on my{" "}
              <b>portfolio website</b>.In addition to these front-end
              technologies, I have experience with back-end technologies such as{" "}
              <b>PHP, MySQL, and NodeJS</b>, as well as version control tools
              like <b>Git</b>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
