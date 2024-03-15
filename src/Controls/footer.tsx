import React from "react";
import ButtonItem from "./Buttons/buttons-item";

const Footer = () => {
  return (
    <>
      <footer className=" py-4 mt-auto">
        <div className="container px-1">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0 text-white">
                Copyright © UnderKo 2024
              </div>
            </div>
            <div className="col-auto"></div>
            <div className="col-auto">
              <ButtonItem
                Url={
                  "https://youtu.be/WG8iyvSeA5Q?list=PL4y9vAArvtWOtU9xKh1hN8V2K6J3-AOWR"
                }
                Title={"Sound: WMond - Zero"}
              ></ButtonItem>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
