import React from "react";

import "./Resource/App.css";
import "./Resource/colors.scss";
import "./Resource/navbar.scss";

import Navitem from "./Controls/nav-item";

import Headeritem from "./Controls/header-item";
import ButtonItemDignity from "./Controls/Buttons/button-item-dignity";
import SectionLastUpdate from "./Controls/section-last_update";

import Git from "./Modules/GitHub";
import Footer from "./Controls/footer";
import SelectionAdvantagesofTheProgram from "./Controls/selection-AdvantagesofTheProgram";
import PanelVersionApp from "./Controls/panel-version-app";

let GitHub_Res = new Git(
  "https://api.github.com/repos/Under4groos/SmdCompile.View/releases"
);
GitHub_Res.Get((Data: any) => {
  // let v = document.getElementById("download");
  // if (v) {
  //   v.setAttribute("href", Test.URL);
  // }
  // let с = document.getElementById("count_download");
  // if (с) {
  //   с.innerHTML = "";
  //   с.appendChild(
  //     document.createTextNode(
  //       "Общее колличество скачиваний: " +Test.DownloadCount //  Test.VER + Test.DownloadCount
  //     )
  //   );
  // }
});

let Text: string =
  " SmdCompile - автоматизация некоторых действий связанных с созданием QC, VTF, VMT файлов, с простой системой конвертации изображений, моделей и прочего.  ";

var show_list_v = () => {
  let saotp = document.getElementById("mainmenu");
  let lv = document.getElementById("ListVerisons");

  if (saotp && lv) {
    saotp.style.display = "none";
    lv.style.display = "block";
  }
};

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-back">
        <div className="container px-5">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Navitem
                EvMouseDown={show_list_v}
                Data={"List updates"}
              ></Navitem>
              <Navitem EvMouseDown={null} Data={"Contacts"}></Navitem>
              <Navitem EvMouseDown={null} Data={"Oro!"}></Navitem>
            </ul>
          </div>
        </div>
      </nav>

      <div id="mainmenu">
        <Headeritem Title={"SmdCompile"} DateText={Text}></Headeritem>
        <section className="py-5" id="upd">
          <SectionLastUpdate
            Url="https://i.imgur.com/7xeBcoE.png"
            Text={"Не ну да но нет типо тут было это потом то и да "}
            Title={"SmdCompile 1.2.5"}
            CountDownloads="100"
          ></SectionLastUpdate>
          
        </section>

        <SelectionAdvantagesofTheProgram></SelectionAdvantagesofTheProgram>
      </div>
      <div id="ListVerisons" style={{ display: "none" }}>
        <section className="py-5  ">
          <PanelVersionApp Text={""} Title={"SmdCompile"} Url={"https://i.imgur.com/7xeBcoE.png"} CountDownloads={""}></PanelVersionApp>
          <PanelVersionApp Text={""} Title={"SmdCompile"} Url={"https://i.imgur.com/7xeBcoE.png"} CountDownloads={""}></PanelVersionApp>
          <PanelVersionApp Text={""} Title={"SmdCompile"} Url={"https://i.imgur.com/7xeBcoE.png"} CountDownloads={""}></PanelVersionApp>

        </section>

        
        <section className="py-5  ">
          <div className="container px-5 my-5">
            <h2 className="display-4 fw-bolder mb-4">
              Хотите вернуться на главную?
            </h2>
            <a className="btn btn-lg btn-primary" href="index.html">
              Главная
            </a>
          </div>
        </section>
      </div>

      <section className="py-5 ">
        <div className="container px-5 my-5">
          <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
            <div className="col mb-5 mb-5 mb-xl-0">
              <div className="text-center">
                <img
                  className="img-fluid rounded-circle mb-4 px-4"
                  src="https://avatars.githubusercontent.com/u/54286928?v=4"
                  alt="..."
                />
                <h5 className="fw-bold text-white-50">UnderKo</h5>
                <div className="  text-white-50 fw-medium">
                  Основной разработчик
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
