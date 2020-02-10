import React from "react";
import "./Menu.css";

//<div className="menu-tab-links"><img src={process.env.PUBLIC_URL + "/grid.png"} alt="menu"></img></div>
function Menu(props){
    let menuItems  = []
    if (parseInt(props.scrollPosition)>0){
        props.menuItems.forEach((item, index) =>{
            if(parseInt(props.scrollPosition)===parseInt(index + 1))menuItems.push(<p key={index} id="menu-selected">{item}</p>);
        })
    }

    return <div className="menu-main">
        <div className="menu-main-name">ankur<span>saikia</span></div>
        <div id="menu-tab-links">{menuItems}</div>
    </div>
}

export default Menu;