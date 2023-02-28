import React, { useState } from "react";
import netflixIMG from "../images/portfolio_images/netflix.png";
import portfolioIMG from "../images/portfolio_images/portfolio.jpg";
import cityGuideIMG from "../images/portfolio_images/city-guide-app.png";
import taskManagerIMG from "../images/portfolio_images/task-manager.png";

// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [NetflixIsOpen, setNetflixIsOpen] = useState(false);
  const [cityGuideIsOpen, setCityGuideIsOpen] = useState(false);
  const [portfolioIsOpen, setPortfolioIsOpen] = useState(false);
  const [taskManagerIsOpen, setTaskManagerIsOpen] = useState(false);

  /////////////////////////////////////////////////////////////////

  // Projects
  const netFlixPRJ = {
    id: "Netflix",
    title: "Netflix clone project",
    imageUrl: netflixIMG,
    imageAlt: "Netflix clone project...",
    article:
      "Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
    gitHubUrl: "https://github.com/DimitrisTagaroulias/Hotels",
    popupIsOpen: NetflixIsOpen,

    setStateToFalse() {
      setNetflixIsOpen(false);
    },
  };

  const cityGuidePRJ = {
    id: "CityGuide",
    title: "City Guide Project",
    imageUrl: cityGuideIMG,
    imageAlt: "City Guide Project...",
    article:
      "Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
    gitHubUrl: "https://github.com/DimitrisTagaroulias/Hotels",
    popupIsOpen: cityGuideIsOpen,
    setStateToFalse() {
      setCityGuideIsOpen(false);
    },
  };

  const portfolioPRJ = {
    id: "Portfolio",
    title: "Portfolio Project",
    imageUrl: portfolioIMG,
    imageAlt: "Portfolio Project...",
    article:
      "This is a project that showcases the user's portfolio. Tools: javaScript, React, Bootstrap",
    gitHubUrl: "https://github.com/DimitrisTagaroulias/My-Portfolio",
    popupIsOpen: portfolioIsOpen,
    setStateToFalse() {
      setPortfolioIsOpen(false);
    },
  };

  const taskManagerPRJ = {
    id: "taskManager",
    title: "Task Manager Project",
    imageUrl: taskManagerIMG,
    imageAlt: "Task Manager Project...",
    article:
      "Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
    gitHubUrl: "https://github.com/DimitrisTagaroulias/Hotels",
    popupIsOpen: taskManagerIsOpen,
    setStateToFalse() {
      setTaskManagerIsOpen(false);
    },
  };

  const projects = [netFlixPRJ, cityGuidePRJ, portfolioPRJ, taskManagerPRJ];

  /////////////////////////////////////////////////////////////////

  return (
    <>
      {() => {
        let thisContent;
        projects.forEach((project) => {
          thisContent += `
          <div
            id=${project.id}
            className="portfolio-image-box d-flex justify-content-center col-md-5 col-sm-10"
            onClick={(e) => {
              return ${setNetflixIsOpen(true)};
            }}
          >
            <img
              className="portfolio-image col"
              src={netflixIMG}
              alt="Netflix Clone Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
      `;
          return thisContent;
        });
      }}
      <div
        id="netflix"
        className="portfolio-image-box d-flex justify-content-center col-md-5 col-sm-10"
        onClick={(e) => {
          return setNetflixIsOpen(true);
        }}
      >
        <img
          className="portfolio-image col"
          src={netflixIMG}
          alt="Netflix Clone Project..."
        />
        <div className="overflow"></div>
        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
      </div>

      {/*  */}

      <div
        id="cityGuide"
        className="portfolio-image-box d-flex justify-content-center col-md-5 col-sm-10"
        onClick={() => setCityGuideIsOpen(true)}
      >
        <img
          className="portfolio-image col"
          src={cityGuideIMG}
          alt="City Guide Project..."
        />
        <div className="overflow"></div>
        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
      </div>

      {/*   */}

      <div
        id="portfolio"
        className="portfolio-image-box d-flex justify-content-center col-md-5 col-sm-10"
        onClick={() => setPortfolioIsOpen(true)}
      >
        <img
          className="portfolio-image col"
          src={portfolioIMG}
          alt="Portfolio React and Material UI Project..."
        />
        <div className="overflow"></div>
        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        <div className="project-title">Portfolio Project</div>
      </div>

      {/*  */}

      <div
        id="taskManager"
        className="portfolio-image-box d-flex justify-content-center col-md-5 col-sm-10"
        onClick={() => setTaskManagerIsOpen(true)}
      >
        <img
          className="portfolio-image col"
          src={taskManagerIMG}
          alt="Task Manager React and Project..."
        />
        <div className="overflow"></div>
        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
      </div>
    </>
  );
};

export default Projects;