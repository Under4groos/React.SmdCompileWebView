import React from 'react';
 
import "../Resource/snow.scss"

interface snowProp{
    Count:number;
}
const Snow = ({Count}:snowProp) => {
    const components = []
    for(let i = 0; i < Count; i++) {
       
        components.push(<div className="snow"></div>)
      }
    return <div className='snow-main'>{components}</div>;
}
export default Snow;