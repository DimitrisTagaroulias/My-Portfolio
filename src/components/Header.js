import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>web development</h1>
        <Typed
          className="typed-text"
          strings={["Web Development", "Web Design"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="index.html" className="btn-main-offer">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
