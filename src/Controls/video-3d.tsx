import React from "react";
import "../Resource/img3d.scss";

interface video3dProp {
  Url: string;
}

const video3d = ({ Url }: video3dProp) => {
  return (
    <>
      <div className="img3d_div img-fluid rounded-3 my-5">
        {/* <img style={{ width:"100%" }} src={Url} alt=""/> */}

        <iframe
          style={{ width: "100%", height: "315px" }}
          src="https://www.youtube.com/embed/tnfaZXuzXls?si=mHhcsIFlp9_sacGF"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};
export default video3d;
