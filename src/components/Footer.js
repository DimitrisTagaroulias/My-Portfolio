import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>city Athens 2020 office #223</p>
            </div>
            <div className="d-flex">
              <a id="phone-number" href="tel:694-164-7706">
                (+30)6941647706
              </a>
            </div>
            <div className="d-flex">
              <p>dimitristagaroulias.webdev@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <div>
                  <a className="footer-nav">Home</a>
                </div>
                <div>
                  <a className="footer-nav">About me</a>
                </div>
                <div>
                  <a className="footer-nav">Services</a>
                </div>
              </div>
              <div className="col">
                <div>
                  <a className="footer-nav">Experience</a>
                </div>
                <div>
                  <a className="footer-nav">Portfolio</a>
                </div>
                <div>
                  <a className="footer-nav">Contacts</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
