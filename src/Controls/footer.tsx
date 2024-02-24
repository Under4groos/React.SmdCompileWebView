import React from "react";
 
const Footer = () => {
  return (
    <>
     <footer className=" py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0 text-white">
                Copyright © UnderKo 2024
              </div>
            </div>
            <div className="col-auto">
              <div className="small m-0 text-white">
                SPYRAL - ALONE (slowed + reverb)
              </div>
            </div>
            <div className="col-auto">
              <a className="link-light small" href="#!">
                Privacy
              </a>
              <span className="text-white mx-1">·</span>
              <a className="link-light smal " href="#faq">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
