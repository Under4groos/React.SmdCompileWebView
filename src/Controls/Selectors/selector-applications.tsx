import React from "react";
import PanelApplication from "../panel-application";
import { render } from "react-dom";
 
const SelectorApplications = () => {
  fetch(
    "https://raw.githubusercontent.com/Under4groos/React.SmdCompileWebView/master/src/applications.json"
  )
    .then((response) => response.json())
    .then((jsonobj) => {
      let component = (
        <>
          {jsonobj.map((answer: any, i: any) => {
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
        </>
      );
      render(component, document.getElementById("__applications"));
    });

  return (
    <>
      <section className="py-5" id="__applications">
        {/* 
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
        */}
      </section>
    </>
  );
};
export default SelectorApplications;
