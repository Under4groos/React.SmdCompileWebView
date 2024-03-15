import React from "react";
import "../Resource/img3d.scss";
import "../Resource/colors.scss";
interface img3dProp {
  Url: string;
}

const img3d = ({ Url }: img3dProp) => {
  return (
    <>
      <div className="img3d_div img-fluid rounded-3 my-5">
        <img
          style={{
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #22acf2",
          }}
          src={Url}
          alt=""
        />
      </div>
    </>
  );
};
export default img3d;
