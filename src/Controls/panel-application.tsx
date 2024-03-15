import React from "react";
import "../Resource/panel-version-app.scss";
import ButtonItem from "./Buttons/buttons-item";
import Img3d from "./img-3d";

interface PanelApplicationProp {
  Text: string;
  Title: string;
  Url: string;
  UrlImage: string;
  YouTubeLink: string;

  Vers: any;
}

const PanelApplication = ({
  Text,
  Title,
  Url,
  UrlImage,
  YouTubeLink,
  Vers,
}: PanelApplicationProp) => {
  return (
    <>
      <div className="container px-5 my-5">
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <Img3d Url={UrlImage}></Img3d>
            </div>
            <div className="col-lg-6">
              <div className="badge bg-primary me-sm-2 mb-3 ">Архив</div>

              <div className="badge bg-primary me-sm-2 mb-2 ">{Vers}</div>
              <h2 className="fw-bolder text-white">{Title}</h2>
              <p className="lead fw-normal text-white-50 mb-0">{Text}</p>

              <p className="lead fw-normal text-white-50 mb-3 "></p>

              <ButtonItem Url={Url} Title={"Скачать"}></ButtonItem>
              {YouTubeLink == null ||
              YouTubeLink.length == 0 ? (
                <></>
              ) : (
                <ButtonItem Url={YouTubeLink} Title={"YouTube"}></ButtonItem>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PanelApplication;
