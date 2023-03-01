import React, { useState } from "react";
import ProjectList from "./ProjectList";
import netflixIMG from "../images/portfolio_images/netflix.png";
import portfolioIMG from "../images/portfolio_images/portfolio.jpg";
import cityGuideIMG from "../images/portfolio_images/city-guide-app.png";
import taskManagerIMG from "../images/portfolio_images/task-manager.png";
import PopupBox from "./PopupBox";

// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  const [projectList, setProjectList] = useState("");

  // console.log(projectList);

  // const [NetflixIsOpen, setNetflixIsOpen] = useState(false);
  // const [CityGuideIsOpen, setCityGuideIsOpen] = useState(false);
  // const [PortfolioIsOpen, setPortfolioIsOpen] = useState(false);
  // const [TaskManagerIsOpen, setTaskManagerIsOpen] = useState(false);

  // // Projects
  // const netFlixPRJ = {
  //   id: "Netflix",
  //   title: "Netflix clone project",
  //   imageUrl: netflixIMG,
  //   imageAlt: "Netflix clone project...",
  //   article:
  //     "Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
  //   gitHubUrl: "https://github.com/DimitrisTagaroulias/Hotels",
  //   popupIsOpen() {
  //     return eval(`${this.id}IsOpen`);
  //   },

  //   setStateToFalse() {
  //     const setPRJstateIsOpen = `set${this.id}IsOpen`;
  //     eval(setPRJstateIsOpen)(false);
  //   },
  // };

  // const cityGuidePRJ = {
  //   id: "CityGuide",
  //   title: "City Guide Project",
  //   imageUrl: cityGuideIMG,
  //   imageAlt: "City Guide Project...",
  //   article:
  //     "Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
  //   gitHubUrl: "https://github.com/DimitrisTagaroulias/Hotels",
  //   popupIsOpen() {
  //     return eval(`${this.id}IsOpen`);
  //   },
  //   setStateToFalse() {
  //     const setPRJstateIsOpen = `set${this.id}IsOpen`;
  //     eval(setPRJstateIsOpen)(false);
  //   },
  // };

  // const portfolioPRJ = {
  //   id: "Portfolio",
  //   title: "Portfolio Project",
  //   imageUrl: portfolioIMG,
  //   imageAlt: "Portfolio Project...",
  //   article:
  //     "This is a project that showcases the user's portfolio. Tools: React, Bootstrap",
  //   gitHubUrl: "https://github.com/DimitrisTagaroulias/My-Portfolio",
  //   popupIsOpen() {
  //     return eval(`${this.id}IsOpen`);
  //   },
  //   setStateToFalse() {
  //     const setPRJstateIsOpen = `set${this.id}IsOpen`;
  //     eval(setPRJstateIsOpen)(false);
  //   },
  // };

  // const taskManagerPRJ = {
  //   id: "TaskManager",
  //   title: "Task Manager Project",
  //   imageUrl: taskManagerIMG,
  //   imageAlt: "Task Manager Project...",
  //   article:
  //     "Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
  //   gitHubUrl: "https://github.com/DimitrisTagaroulias/Hotels",
  //   popupIsOpen() {
  //     return eval(`${this.id}IsOpen`);
  //   },
  //   setStateToFalse() {
  //     const setPRJstateIsOpen = `set${this.id}IsOpen`;
  //     eval(setPRJstateIsOpen)(false);
  //   },
  // };

  // const projects = [netFlixPRJ, cityGuidePRJ, portfolioPRJ, taskManagerPRJ];

  /////////////////////////////////////////////////////////////////

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="projects-wrapper row justify-content-center">
          <ProjectList
            refreshProjectList={(projectList) => {
              setProjectList(projectList);
            }}
          />
        </div>
      </div>
      <PopupBox projects={projectList} />
    </div>
  );
};

export default Portfolio;
