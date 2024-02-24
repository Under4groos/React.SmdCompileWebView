import React from "react";

interface NavitemProp{
    Data:String;
}

const Navitem = ({Data}:NavitemProp) => {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href="/">
        {Data}
        </a>
      </li>
    </>
  );
};
export default Navitem;
