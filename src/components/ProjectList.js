import React, { useState, useEffect } from "react";
import Project from "./Project";

import netflixIMG from "../images/portfolio_images/netflix.png";
import portfolioIMG from "../images/portfolio_images/portfolio.jpg";
import cityGuideIMG from "../images/portfolio_images/city-guide-app.png";
import taskManagerIMG from "../images/portfolio_images/task-manager.png";

const ProjectList = ({ refreshProjectList }) => {
  const [NetflixIsOpen, setNetflixIsOpen] = useState(false);
  const [CityGuideIsOpen, setCityGuideIsOpen] = useState(false);
  const [PortfolioIsOpen, setPortfolioIsOpen] = useState(false);
  const [TaskManagerIsOpen, setTaskManagerIsOpen] = useState(false);

  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------
  const netFlixPRJ = {
    id: "Netflix",
    title: "Netflix clone project",
    imageUrl: netflixIMG,
    imageAlt: "Netflix clone project...",
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

  const cityGuidePRJ = {
    id: "CityGuide",
    title: "City Guide Project",
    imageUrl: cityGuideIMG,
    imageAlt: "City Guide Project...",
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

  const portfolioPRJ = {
    id: "Portfolio",
    title: "Portfolio Project",
    imageUrl: portfolioIMG,
    imageAlt: "Portfolio Project...",
    article:
      "This is a project that showcases the user's portfolio. Tools: React, Bootstrap",
    liveUrl: "https:soula.com",
    gitHubUrl: "https://github.com/DimitrisTagaroulias/My-Portfolio",
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

  const projects = [netFlixPRJ, cityGuidePRJ, portfolioPRJ, taskManagerPRJ];

  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------
  // Projects ------------------------------------------------------

  useEffect(() => {
    refreshProjectList(projects);
  }, [NetflixIsOpen, CityGuideIsOpen, PortfolioIsOpen, TaskManagerIsOpen]);

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
