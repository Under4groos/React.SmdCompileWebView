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
              <Navitem Data={"Home"}></Navitem>
              <Navitem Data={"Null"}></Navitem>
              <Navitem Data={"Updates"}></Navitem>
            </ul>
          </div>
        </div>
      </nav>

      <Headeritem Title={"SmdCompile"} DateText={Text}></Headeritem>
      <SectionLastUpdate
        Url="https://i.imgur.com/7xeBcoE.png"
        Text={"Не ну да но нет типо тут было это потом то и да "}
        Title={"SmdCompile 1.2.5"}
      ></SectionLastUpdate>

      <section className="py-5 selection-light" style={{ marginTop: "100px" }}>
        <div className="container px-5 my-5">
          <div className="row gx-5 ">
            <div className="col-lg-4 mb-5 mb-lg-0 my-5">
              <h2 className="fw-bolder text-white-50 mb-0">
                Достоинства программы{" "}
              </h2>
            </div>
            <div className="col-lg-8 my-5">
              <div className="row gx-5 row-cols-1 row-cols-md-2">
                <ButtonItemDignity
                  Title={"Удобный UI"}
                  Text={
                    "Все кнопки, фреймы, лейбы расположены так чтобы вам было удобно"
                  }
                ></ButtonItemDignity>
                <ButtonItemDignity
                  Title={"Множество настроек"}
                  Text={"Доступная настройка каждого угла программы"}
                ></ButtonItemDignity>
                <ButtonItemDignity
                  Title={"Тут текст"}
                  Text={"Я забыл что хотел написать..."}
                ></ButtonItemDignity>
                <ButtonItemDignity
                  Title={"Help me pls!"}
                  Text={"UnderKo .... Kill me"}
                ></ButtonItemDignity>
                <ButtonItemDignity
                  Title={"Множество настроек"}
                  Text={"Доступная настройка каждого угла программы"}
                ></ButtonItemDignity>
                <ButtonItemDignity
                  Title={"Тут текст"}
                  Text={"Я забыл что хотел написать..."}
                ></ButtonItemDignity>
                <ButtonItemDignity
                  Title={"Help me pls!"}
                  Text={"UnderKo .... Kill me"}
                ></ButtonItemDignity>
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
