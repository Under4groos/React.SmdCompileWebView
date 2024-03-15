import React from "react";

import "./Resource/App.scss";
import "./Resource/colors.scss";
import "./Resource/navbar.scss";

import Navitem from "./Controls/nav-item";

import Headeritem from "./Controls/header-item";
import ButtonItemDignity from "./Controls/Buttons/button-item-dignity";
import SectionLastUpdate from "./Controls/Selectors/section-last_update";

import Git from "./Modules/GitHub";
import Footer from "./Controls/footer";
import SelectionAdvantagesofTheProgram from "./Controls/Selectors/selection-AdvantagesofTheProgram";
import PanelVersionApp from "./Controls/panel-version-app";
import SelectionListVerisons from "./Controls/Selectors/selection-lastversion";
import { render } from "react-dom";
import SelectorDevelopers from "./Controls/Selectors/selector-developer";
import SelectorPricing from "./Controls/Selectors/selector-pricing";
import SelectorApplications from "./Controls/Selectors/selector-applications";
import SelectionYoutubeFull from "./Controls/Selectors/selection-youtube-full";
let url_download = "";
let GitHub_Res = new Git(
  "https://api.github.com/repos/Under4groos/SmdCompile.View/releases"
  
);
GitHub_Res.Get((Data: any) => {
  let list_ = Data.Commits;
  let o = list_[0];

  let asset = o["assets"][0];
  let body = o["body"];
  let tag_name = o["tag_name"];

  url_download = asset["browser_download_url"];

  let name = asset["name"];

  let download_count = asset["download_count"];

  let component = (
    <PanelVersionApp
      Text={body}
      Title={name}
      EvMouseDown={() => {
        window.scrollBy(0, -1000);
      }}
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
  window.open(url_download, "_blank");
};
let ListElements = [
  document.getElementById("mainmenu"),
  document.getElementById("ListVerisons"),
  document.getElementById("ListApplications"),
];
let _hide_all = () => {
  ListElements = [
    document.getElementById("mainmenu"),
    document.getElementById("ListVerisons"),
    document.getElementById("ListApplications"),
  ];
  ListElements.forEach((element) => {
    if (element) element.style.display = "none";
  });
};
var show_list_applications_v = () => {
  _hide_all();
  if (ListElements[2]) ListElements[2].style.display = "block";
};
var show_list_v = () => {
  _hide_all();
  if (ListElements[1]) ListElements[1].style.display = "block";
};
let hide_list_v = () => {
  _hide_all();
  if (ListElements[0]) ListElements[0].style.display = "block";
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
              <Navitem EvMouseDown={hide_list_v} Data={"На главную"}></Navitem>
              <Navitem EvMouseDown={show_list_v} Data={"Версии"}></Navitem>
              <Navitem
                EvMouseDown={show_list_applications_v}
                Data={"Инструменты"}
              ></Navitem>
            </ul>
          </div>
        </div>
      </nav>

      <div id="mainmenu">
        <Headeritem
          Title={"SmdCompile"}
          EvDownload={download_last}
          DateText={Text}
        ></Headeritem>
        <section className="py-5" id="selectionlastver"></section>
        <SelectionYoutubeFull></SelectionYoutubeFull>
        <SelectionAdvantagesofTheProgram></SelectionAdvantagesofTheProgram>
        <SelectorPricing></SelectorPricing>
      </div>
      <div id="ListApplications" className="hide">
        <SelectorApplications></SelectorApplications>
      </div>
      <div id="ListVerisons" className="hide">
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
