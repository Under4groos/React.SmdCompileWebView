import React from "react";
import "../img-3d";
import "../../Resource/Headeritem.scss";

const SelectionYoutubeFull = () => {
  return (
    <>
      <section>
        <div className="container px-5"  >
 

          <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center ratio ratio-21x9">
          
            <iframe      
                  src="https://www.youtube.com/embed/tnfaZXuzXls?si=GK77W8yLmsELbLOD"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
             
          </div>
        </div>
      </section>
    </>
  );
};
export default SelectionYoutubeFull;
