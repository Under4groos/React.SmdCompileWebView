import React from "react";
import "../Resource/img3d.scss";
import "../Resource/Headeritem.scss"


import Img3d from "../Controls/img-3d";
import ButtonItem from "./Buttons/buttons-item";




interface HeaderitemProp {
  Title: String;
  DateText: String;
}

const Headeritem = ({ Title, DateText }: HeaderitemProp) => {
  return (
    <>
      <header className="px-5  ">
        <div className="container pt-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder text-white mb-2">{Title}</h1>
                <p className="lead fw-normal text-white-50 mb-4">{DateText}</p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <ButtonItem Title="Demo" Url="asdasd"></ButtonItem>
                  <ButtonItem Title="Buy" Url="asdasd"></ButtonItem>
                  <ButtonItem Title="Подробнее" Url="asdasd"></ButtonItem>
                </div>
              </div>
            </div>
            {/* d-none  */}
            <div className="col-xl-5 col-xxl-6  d-xl-block text-center div-3d">
              <Img3d Url="https://i.imgur.com/yjcOnAp.png"></Img3d>
            </div>
          </div>
        </div>
        
      </header>
    </>
  );
};
export default Headeritem;
