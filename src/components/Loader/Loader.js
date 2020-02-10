import React from "react";
import "./Loader.scss";

function Loader(props){
    return <div class="loader">
    <ul class="hexagon-container">
      <li class="hexagon hex_1"></li>
      <li class="hexagon hex_2"></li>
      <li class="hexagon hex_3"></li>
      <li class="hexagon hex_4"></li>
      <li class="hexagon hex_5"></li>
      <li class="hexagon hex_6"></li>
      <li class="hexagon hex_7"></li>
    </ul>
  </div>;
}
export default Loader;