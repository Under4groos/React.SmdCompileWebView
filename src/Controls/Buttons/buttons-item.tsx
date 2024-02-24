import React from "react";
import "../../Resource/ButtonItem.scss";
interface ButtonItemProp {
  Url: string;
  Title:string;
}

const ButtonItem = ({ Url , Title }: ButtonItemProp) => {
  return (
    <>
      <a className="btn btn-hover btn-lg px-24 me-sm-1" href={Url}>
        {Title}
      </a>
    </>
  );
};
export default ButtonItem;
