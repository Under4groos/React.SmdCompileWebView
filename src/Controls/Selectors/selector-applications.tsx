import React from "react";
import PanelApplication from "../panel-application";

const arr__ = [
  [
    "VTFEdit ( ZIP )",
    "Инструмент для просмотра, редактирования и создания файлов VTF.",
    "https://drive.usercontent.google.com/u/0/uc?id=1hQ7FKtNEdzuHU3eKb17LfJbDHODru7Q5&export=download",
    "https://i.imgur.com/Yn597bF.png",
  ],
  [
    "Blender Source Tool ( ZIP )",
    "Позволяет Blender импортировать и экспортировать SMD и DMX.",
    "https://drive.usercontent.google.com/u/0/uc?id=1QLZGQ3ExhkR71UGGBB0-bKCmowfxAk4c&export=download",
    "https://i.imgur.com/bcSiOiz.png",
    "https://www.youtube.com/watch?v=yUbzzaRqWpo",
  ],
  [
    "SyntaxBox ( ZIP )",
    "Архив с конфигурацией для тектового редактора. Подсветка синтаксиса.",
    "https://drive.usercontent.google.com/u/0/uc?id=1nlh74AlAvmikpjJABX7R3tEkGcbEdvXT&export=download",
    "https://raw.githubusercontent.com/Under4groos/ReactLandingKQ/master/src/Images/SyntaxBox.png",
  ],
  [
    "QC commands ( ZIP )",
    'Архив с QC командами в фармате Json. Распаковать zip в "Data\\SyntaxBox"',
    "https://drive.usercontent.google.com/u/0/uc?id=1nlh74AlAvmikpjJABX7R3tEkGcbEdvXT&export=download",
    "https://raw.githubusercontent.com/Under4groos/ReactLandingKQ/master/src/Images/qccommands.png",
  ],
];
 
console.log(JSON.stringify(arr__));

const SelectorApplications = () => {
  return (
    <>
      <section className="py-5  ">
        {arr__.map((answer, i) => {
          let _name = String(answer[0]);
          let _text = String(answer[1]);
          let _url = String(answer[2]);
          let _urlimg = String(answer[3]);
          let _youtubelink = String(answer[4]);
          if (_youtubelink == "undefined") {
            _youtubelink = "";
          }

          return (
            <>
              <PanelApplication
                Title={_name}
                Text={_text}
                Url={_url}
                UrlImage={_urlimg}
                Vers={""}
                YouTubeLink={_youtubelink}
              ></PanelApplication>
            </>
          );
        })}
      </section>
    </>
  );
};
export default SelectorApplications;
