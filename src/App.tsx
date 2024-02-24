import React from "react";

import "./Resource/App.css";
import "./Resource/colors.scss";
import "./Resource/navbar.scss";

import Navitem from "./Controls/nav-item";

import Headeritem from "./Controls/header-item";

let Text:string = " SmdCompile - автоматизация некоторых действий связанных с созданием QC, VTF, VMT файлов, с простой системой конвертации изображений, моделей и прочего.  "


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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Navitem Data={"Home"}></Navitem>
              <Navitem Data={"Null"}></Navitem>
              <Navitem Data={"Updates"}></Navitem>
            </ul>
          </div>
        </div>
      </nav>

      <Headeritem Title={"SmdCompile"} DateText={Text}></Headeritem>

      
    </>
  );
}

export default App;
