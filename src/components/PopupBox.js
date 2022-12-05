import React from "react";
import { createPortal } from "react-dom";

const PopupBox = (props) => {
  const { projects, onClose } = props;
  const [openedProject] = projects.filter((project) => {
    return project["popupIsOpen"] === true;
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
      gitHubUrl,
      setStateToFalse,
    } = openedProject;
    return createPortal(
      <>
        <div className="popup-surrounding" onClick={setStateToFalse}>
          <div
            id={id}
            className="popup-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="title-container d-flex justify-content-between">
              <h3 className="popup-title">{title}</h3>
              <div className="popup-close-btn " onClick={setStateToFalse}>
                &#x2715;
              </div>
            </div>
            <img
              className="portfolio-image-popupbox"
              src={imageUrl}
              alt={imageAlt}
            />
            <p>{article}</p>
            <div className="popup-footer">
              <b>Github:</b>
              <a
                className="hyper-link"
                onClick={() => window.open({ gitHubUrl })}
              >
                {gitHubUrl}
              </a>
            </div>
          </div>
        </div>
      </>,
      document.getElementById("popup-portal")
    );
  }
};

export default PopupBox;
