import React from "react";
import "./Hexagon.css";


function Hexagon(props){
    return <div className="hexagon-main">
        <div className="hexagon-base"></div>
        <div className="hexagon-base1"></div>
        <div className="hexagon-base2"></div>
        <img src={process.env.PUBLIC_URL + "/" + props.image} alt="run"></img>
    </div>
}

export default Hexagon;