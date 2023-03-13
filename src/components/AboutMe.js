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
              My name is <b>Dimitris Tagaroulias</b> and I'm 36 years old.
              <br></br>
              <br></br>
              Recently, I have completed an educational and training program on{" "}
              <b>Front-End Web Developer</b> field in{" "}
              <b>Ethnikon and Kapodistriakon Panepistimio Athinon (E.K.P.A)</b>{" "}
              and I have been certified by passing the exams. I have also got a
              certification on <b>Full-Stack Web Developer</b> field by
              attending courses, passing the exams and delivering a project to{" "}
              <b>CollegeLink</b>.<br></br>
              <br></br>
              Apart from the above training programs I have{" "}
              <b>studied a numerous online courses</b> through Udemy and other
              similar platforms and <b>created my own projects</b> in order to
              practice and enrich my portfolio. As I m fascinated by the
              Front-End Web Development field, I would like to have the
              opportunity to be part of a company, where I can improve my skills
              and have a long term cooperation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
