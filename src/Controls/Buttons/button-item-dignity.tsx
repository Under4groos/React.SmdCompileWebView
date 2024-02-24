import React from "react";
import "../../Resource/ButtonItem.scss";
interface ButtonItemDignityProp {
  Text: string;
  Title: string;
}

const ButtonItemDignity = ({ Text, Title }: ButtonItemDignityProp) => {
  return (
    <>
      <div className="col mb-5 h-100">
        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
          <i className="bi bi-collection"></i>
        </div>
        <h2 className="h5 text-white-50">{Title}</h2>
        <p className="mb-0 text-white-50">
          {Text}
        </p>
      </div>
    </>
  );
};
export default ButtonItemDignity;
