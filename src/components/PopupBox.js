import React from "react";
import { createPortal } from "react-dom";

const PopupBox = (props) => {
  const { projects } = props;
  if (!projects) return;
  const [openedProject] = projects.filter((project) => {
    return project.popupIsOpen() === true;
  });

  // All closed
  if (!openedProject) return null;

  // OPEN POPUP
  if (openedProject) {
    const {
      id,
      title,
      imageUrl,
      imageAlt,
      article,
      liveUrl,
      gitHubUrl,
      setProjectIsOpenTo,
    } = openedProject;

    return createPortal(
      <>
        <div
          className="popup-surrounding"
          onClick={() => {
            openedProject.setProjectIsOpenTo(false);
          }}
        >
          <div
            id={id}
            className="popup-container "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="title-container d-flex justify-content-between">
              <h3 className="popup-title">{title}</h3>
              <div
                className="popup-close-btn "
                onClick={() => {
                  openedProject.setProjectIsOpenTo(false);
                }}
              >
                &#x2715;
              </div>
            </div>
            <div className="pop-up-content-box">
              <div className="img-and-par-container">
                <div className="img-container">
                  <img
                    className="portfolio-image-popupbox"
                    src={imageUrl}
                    alt={imageAlt}
                  />
                </div>
                <p className="pop-up-article">{article}</p>
              </div>
              <div className="popup-footer">
                <div className="live-url">
                  <b>Live: </b>
                  <a
                    className="hyper-link"
                    onClick={() => window.open(gitHubUrl)}
                  >
                    {gitHubUrl}
                  </a>
                </div>
                <div className="github-url">
                  <b>Github: </b>
                  <a
                    className="hyper-link"
                    onClick={() => window.open(gitHubUrl)}
                  >
                    {gitHubUrl}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>,
      document.getElementById("popup-portal")
    );
  }
};

export default PopupBox;
