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
import SelectionListVerisons from "./Controls/selection-lastversion";
import { render } from 'react-dom';
import SelectorDevelopers from "./Controls/selector-developer";
let url_download = "";
let GitHub_Res = new Git(
  "https://api.github.com/repos/Under4groos/SmdCompile.View/releases"
);
GitHub_Res.Get((Data: any) => {
  let list_ = Data.Commits;
  let o = list_[0];
  console.log(o)
  let asset = o["assets"][0];

  url_download = asset["browser_download_url"]

  let name = asset["name"];
  let body = o["body"];
  let tag_name = o["tag_name"];
  let download_count = asset["download_count"];


  let component = (
    <PanelVersionApp
      Text={body}
      Title={name}
      EvMouseDown={null}
      Url={"https://i.imgur.com/7xeBcoE.png"}
      CountDownloads={download_count}
      Vers={tag_name}
    ></PanelVersionApp>
  );
 
  render(component, document.getElementById("selectionlastver"));
});

let Text: string =
  " SmdCompile - автоматизация некоторых действий связанных с созданием QC, VTF, VMT файлов, с простой системой конвертации изображений, моделей и прочего.  ";
var download_last = () => {
  window.open(url_download, '_blank') 
}
var show_list_v = () => {
  let saotp = document.getElementById("mainmenu");
  let lv = document.getElementById("ListVerisons");
  if (saotp && lv) {
    saotp.style.display = "none";
    lv.style.display = "block";
  }
};
let hide_list_v = () => {
  let saotp = document.getElementById("mainmenu");
  let lv = document.getElementById("ListVerisons");
  if (saotp && lv) {
    saotp.style.display = "block";
    lv.style.display = "none";
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
        <Headeritem Title={"SmdCompile"} EvDownload={download_last} DateText={Text}></Headeritem>

        <section className="py-5" id="selectionlastver"></section>

        <SelectionAdvantagesofTheProgram></SelectionAdvantagesofTheProgram>
      </div>
      <div id="ListVerisons" style={{ display: "none" }}>
        <SelectionListVerisons
          Data={""}
          EvMouseDown={hide_list_v}
        ></SelectionListVerisons>
      </div>

      <SelectorDevelopers></SelectorDevelopers>
      <Footer></Footer>
    </>
  );
}

export default App;
