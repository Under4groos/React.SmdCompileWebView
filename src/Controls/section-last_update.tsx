import React from "react";
 
import ButtonItem from "./Buttons/buttons-item";
 
interface SectionLastUpdateProp {
  Text: string;
  Title: string;
  Url:string ;
}

const SectionLastUpdate = ({ Text, Title , Url }: SectionLastUpdateProp) => {
  return (
    <>
      <section className="py-5" id="upd">
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="text-center">
                <h2 className="fw-bolder text-white-50">Последнее обновление</h2>
                <p className="lead fw-normal text-muted mb-5"></p>
              </div>
            </div>
          </div>
          <div className="container px-5 my-5">
            <div className="row gx-5 align-items-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0 smooth-hover"
                  src={Url}
                  alt="..."
                />
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
                <p className="lead fw-normal text-white-50 mb-0">Downloads: 150</p>
                <p className="lead fw-normal text-white-50 mb-0 ">
                  -----------------------------------------
                </p>
               
                <ButtonItem Url={"Купить"} Title={"Купить"} ></ButtonItem>
                <ButtonItem Url={"#"} Title={"Скачать"} ></ButtonItem>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SectionLastUpdate;
