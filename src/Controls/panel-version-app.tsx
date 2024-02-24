import React from "react";
 
import ButtonItem from "./Buttons/buttons-item";
import Img3d from "./img-3d";
 
interface PanelVersionAppProp {
  Text: string;
  Title: string;
  Url:string ;
  CountDownloads:string ;
}

const PanelVersionApp = ({ Text, Title , Url , CountDownloads}: PanelVersionAppProp) => {
  return (
    <>
    <div className="container px-5 my-5">   
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
              <Img3d Url={Url}></Img3d>
              </div>
              <div className="col-lg-6">
                 
                <div className="badge bg-primary me-sm-1 mb-2">
                  Обновление
                </div>
                <div className="badge bg-primary me-sm-1 mb-2 ">
                  Программа
                </div>
                <h2 className="fw-bolder text-white-50">{Title}</h2>
                <p className="lead fw-normal text-white-50 mb-0">{Text}</p>
                <p className="lead fw-normal text-white-50 mb-0">Downloads: {CountDownloads}</p>
                <p className="lead fw-normal text-white-50 mb-0 ">
                  -----------------------------------------
                </p>
               
                <ButtonItem Url={"Купить"} Title={"Купить"} ></ButtonItem>
                <ButtonItem Url={"#"} Title={"Скачать"} ></ButtonItem>
                
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};
export default PanelVersionApp;
