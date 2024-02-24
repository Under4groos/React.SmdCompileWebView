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
      <header className="px-5" style={{marginTop:"100px"}}>
        <div className="container pt-5" >
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder text-white mb-2">{Title}</h1>
                <p className="lead fw-normal text-white-50 mb-4">{DateText}</p>
                <div className="d-grid gap-1 d-sm-flex justify-content-sm-center justify-content-xl-start mb-2">
                  <ButtonItem Title="Download Demo" Url="asdasd"></ButtonItem>
                  <ButtonItem Title="Buy  500₽" Url="https://vk.com/underko"></ButtonItem>
                  <ButtonItem Title="Telegram" Url="https://t.me/SmdCompile"></ButtonItem>
                   
                </div>
                <div className="d-grid gap-1 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <ButtonItem Title="YouTube" Url="https://www.youtube.com/channel/UCgkPCLfQU1wxlFo8E8EhjxQ"></ButtonItem>
                 
                  <ButtonItem Title="GitHub" Url="https://github.com/Under4groos"></ButtonItem>
                </div>
              </div>
            </div>
            {/* d-none  */}
            <div className="col-xl-5 col-xxl-6  d-xl-block text-center div-3d">
              <Img3d Url="https://i.imgur.com/OaXhpak.png"></Img3d>
            </div>
          </div>
        </div>
        
      </header>
    </>
  );
};
export default Headeritem;
