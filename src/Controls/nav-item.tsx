import React from "react";

interface NavitemProp{
    Data:String;
    EvMouseDown:any;
}

const Navitem = ({Data , EvMouseDown}:NavitemProp) => {
  return (
    <>
      <li className="nav-item">
        {/* <a className="nav-link" href="/">
        {Data}
        </a> */}
        <button onClick={EvMouseDown} className="nav-link">{Data}</button>
      </li>
    </>
  );
};
export default Navitem;
