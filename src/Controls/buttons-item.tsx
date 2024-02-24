import React from "react";

interface ButtonItemProp {
  Url: string;
  Title:string;
}

const ButtonItem = ({ Url , Title }: ButtonItemProp) => {
  return (
    <>
      <a className="btn btn-primary btn-lg px-24 me-sm-1" href={Url}>
        {Title}
      </a>
    </>
  );
};
export default ButtonItem;
