import React, { useState, useEffect } from "react";
import Project from "./Project";

import HotelsIMG from "../images/portfolio_images/hotels.jpg";
import PortfolioIMG from "../images/portfolio_images/portfolio.jpg";
import RegistrationCenterIMG from "../images/portfolio_images/registration_center_school_theme.jpg";
import taskManagerIMG from "../images/portfolio_images/task-manager.png";

const ProjectList = ({ refreshProjectList }) => {
  const [HotelsIsOpen, setHotelsIsOpen] = useState(false);
  const [RegistrationCenterIsOpen, setRegistrationCenterIsOpen] =
    useState(false);
  const [PortfolioIsOpen, setPortfolioIsOpen] = useState(false);
  const [TaskManagerIsOpen, setTaskManagerIsOpen] = useState(false);

  // setHotelsIsOpen, setRegistrationCenterIsOpen, setPortfolioIsOpen, setTaskManagerIsOpen are beeing used as `set${this.id}IsOpen`

  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------
  const HotelsPRJ = {
    id: "Hotels",
    title: "Hotels Project",
    imageUrl: HotelsIMG,
    imageAlt: "Hotels Project...",
    article:
      "This is a project that helps the user to find a hotel room and book it.",
    purpose: "Full-Stack Practice",
    technologies: "HTML, CSS, JavaScript, PHP, MySQL",
    liveUrl: "https://pagia.shop",
    gitHubUrl: "https://github.com/DimitrisTagaroulias/Hotels",
    popupIsOpen() {
      return eval(`${this.id}IsOpen`);
    },
    setProjectIsOpenTo(boolean) {
      const setPRJstateIsOpen = `set${this.id}IsOpen`;
      eval(setPRJstateIsOpen)(boolean);
    },
  };

  const PortfolioPRJ = {
    id: "Portfolio",
    title: "Portfolio Project",
    imageUrl: PortfolioIMG,
    imageAlt: "Portfolio Project...",
    article: "This is a project that showcases the user's Portfolio.",
    purpose: "Front-End Practice",
    technologies: "HTML, CSS, Bootstrap, JavaScript, React",
    liveUrl: "https:______________________.com",
    gitHubUrl: "https://github.com/DimitrisTagaroulias/My-Portfolio",
    popupIsOpen() {
      return eval(`${this.id}IsOpen`);
    },
    setProjectIsOpenTo(boolean) {
      const setPRJstateIsOpen = `set${this.id}IsOpen`;
      eval(setPRJstateIsOpen)(boolean);
    },
  };

  const RegistrationCenterPRJ = {
    id: "RegistrationCenter",
    title: "Registration Center Project",
    imageUrl: RegistrationCenterIMG,
    imageAlt: "Registration Center Project...",
    article:
      "This is a project that the user can register a student to a specific school on the Registration Center and the after the registration this school receives a relevant message.",
    purpose: "Back-End Practice",
    technologies:
      "HTML, CSS,JavaScript, NodeJS, ExpressJS, Socket.IO, MongoDB ",
    liveUrl: "https://registration-center.vercel.app",
    gitHubUrl:
      "https://github.com/DimitrisTagaroulias/registration_center_STAGING",
    popupIsOpen() {
      return eval(`${this.id}IsOpen`);
    },
    setProjectIsOpenTo(boolean) {
      const setPRJstateIsOpen = `set${this.id}IsOpen`;
      eval(setPRJstateIsOpen)(boolean);
    },
  };

  const taskManagerPRJ = {
    id: "TaskManager",
    title: "Task Manager Project",
    imageUrl: taskManagerIMG,
    imageAlt: "Task Manager Project...",
    article:
      "Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
    liveUrl: "",
    gitHubUrl: "https://github.com/DimitrisTagaroulias/Hotels",
    popupIsOpen() {
      return eval(`${this.id}IsOpen`);
    },
    setProjectIsOpenTo(boolean) {
      const setPRJstateIsOpen = `set${this.id}IsOpen`;
      eval(setPRJstateIsOpen)(boolean);
    },
  };

  // ----------------------

  const projects = [
    HotelsPRJ,
    PortfolioPRJ,
    RegistrationCenterPRJ,
    taskManagerPRJ,
  ];

  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------

  useEffect(() => {
    refreshProjectList(projects);
  }, [
    HotelsIsOpen,
    RegistrationCenterIsOpen,
    PortfolioIsOpen,
    TaskManagerIsOpen,
  ]);

  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------

  if (!projects) return;

  /////////////////////////////////////////////////////////////////

  return (
    <>
      {projects.map((project) => {
        return <Project key={project.id} {...project} />;
      })}
    </>
  );
};

export default ProjectList;
