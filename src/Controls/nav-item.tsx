import React from "react";

interface NavitemProp{
    Data:String;
    EvMouseDown:any;
}

const Navitem = ({Data , EvMouseDown}:NavitemProp) => {
  return (
    <>
      <li className="nav-item">
       
        <button onClick={EvMouseDown} className="nav-link text-select-forg">{Data}</button>
      </li>
    </>
  );
};
export default Navitem;
