import React from "react";
import "../Resource/img3d.scss";
import "../Resource/Headeritem.scss";

import Img3d from "../Controls/img-3d";
import Video3d from "../Controls/video-3d";
import ButtonItem from "./Buttons/buttons-item";

interface HeaderitemProp {
  Title: String;
  DateText: String;
  EvDownload: any;
}

const Headeritem = ({ Title, DateText, EvDownload }: HeaderitemProp) => {
  return (
    <>
      <header className="px-5" style={{ marginTop: "100px" }}>
        <div className="container pt-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder text-white mb-2">{Title}</h1>
                <p className="lead fw-normal text-white-50 mb-4">{DateText}</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center justify-content-xl-start mb-2">
                  {EvDownload != null ? (
                    <>
                      <button
                        onClick={EvDownload}
                        className="btn btn-hover btn-lg px-24 me-sm-1"
                      >
                        Скачать Demo
                      </button>
                    </>
                  ) : (
                    <></>
                  )}

                  <ButtonItem
                    Title="Купить  500₽"
                    Url="https://vk.com/underko"
                  ></ButtonItem>
                  <ButtonItem
                    Title="Telegram"
                    Url="https://t.me/SmdCompile"
                  ></ButtonItem>
                </div>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <ButtonItem
                    Title="YouTube"
                    Url="https://www.youtube.com/playlist?list=PL4y9vAArvtWMEKh-OfmGXsEsC5Jrqmplc"
                  ></ButtonItem>

                  <ButtonItem
                    Title="GitHub"
                    Url="https://github.com/Under4groos"
                  ></ButtonItem>
                </div>
              </div>
            </div>
         
            <div className="col-xl-5 col-xxl-6  d-xl-block text-center div-3d">
              <Img3d Url="https://i.imgur.com/7xeBcoE.png"></Img3d>

             
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Headeritem;
