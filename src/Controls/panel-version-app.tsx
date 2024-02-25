import React from "react";
import "../Resource/panel-version-app.scss";
import ButtonItem from "./Buttons/buttons-item";
import Img3d from "./img-3d";

interface PanelVersionAppProp {
  Text: string;
  Title: string;
  Url: string;
  CountDownloads: string;
  EvMouseDown: any;
  Vers: any;
}

const PanelVersionApp = ({
  Text,
  Title,
  Url,
  CountDownloads,
  EvMouseDown,
  Vers,
}: PanelVersionAppProp) => {
  return (
    <>
      <div className="container px-5 my-5">
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <Img3d Url={Url}></Img3d>
            </div>
            <div className="col-lg-6">
              <div className="badge   bg-primary  me-sm-2 mb-2">Обновление</div>
              <div className="badge bg-primary me-sm-2 mb-3 ">Программа</div>
              <div className="badge bg-primary me-sm-2 mb-2 ">{Vers}</div>
              <h2 className="fw-bolder text-white">{Title}</h2>
              <p className="lead fw-normal text-white-50 mb-0">{Text}</p>
              <p className="lead fw-normal text-white-50 mb-0">
                Downloads: {CountDownloads}
              </p>
              <p className="lead fw-normal text-white-50 mb-0 ">
                -----------------------------------------
              </p>

              <ButtonItem
                Url={"https://vk.com/underko"}
                Title={"Купить"}
              ></ButtonItem>
              {EvMouseDown != null ? (
                <button
                  onClick={EvMouseDown}
                  className="btn btn-hover btn-lg px-24 me-sm-1"
                >
                  Скачать
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PanelVersionApp;
