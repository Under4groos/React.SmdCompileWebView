import React from "react";
import PanelVersionApp from "./panel-version-app";
import Git from "../Modules/GitHub";
import { render } from "react-dom";

interface SelectionListVerisonsProp {
  Data: String;
  EvMouseDown: any;
}

const SelectionListVerisons = ({
  Data,
  EvMouseDown,
}: SelectionListVerisonsProp) => {
  let GitHub_Res = new Git(
    "https://api.github.com/repos/Under4groos/SmdCompile.View/releases"
  );
  let component;
  GitHub_Res.Get((Data: any) => {
    let list_ = Data.Commits;
    let count_ = 0;
    component = (
      <>
        {list_.map((o: any, e: any) => {
            
          let asset = o["assets"][0];
          let name = asset["name"];
          let tag_name = o["tag_name"];
          let body = o["body"];
          let download_count = asset["download_count"];
          count_ += download_count
          return (
            <PanelVersionApp
              Text={body}
              Title={name}
              EvMouseDown={EvMouseDown}
              Url={"https://i.imgur.com/7xeBcoE.png"}
              CountDownloads={download_count}
              Vers={tag_name}
            ></PanelVersionApp>
          );
        })}
      </>
    );
    render(component, document.getElementById("listversions"));
    render(<h2 className="fw-bolder text-white-50 py-5">Cкачиваний: {count_}</h2> , document.getElementById("count_download"));
     
  });

  return (
    <>
    <section>
        <div className="container px-5 py-5">
          <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
            <div className="col mb-5 mb-5 mb-xl-0">
              <div className="text-center">
                <button
                  onClick={EvMouseDown}
                  style={{ padding: "20px 100px 20px 100px" }}
                  className="btn btn-hover btn-lg px-24 me-sm-1"
                >
                  Hide
                </button>
                <div id="count_download">

                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="listversions" className="py-5  ">
        {component}
      </section>
      <section>
        <div className="container px-5">
          <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
            <div className="col mb-5 mb-5 mb-xl-0">
              <div className="text-center">
                <button
                  onClick={EvMouseDown}
                  style={{ padding: "20px 100px 20px 100px" }}
                  className="btn btn-hover btn-lg px-24 me-sm-1"
                >
                  Hide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SelectionListVerisons;
