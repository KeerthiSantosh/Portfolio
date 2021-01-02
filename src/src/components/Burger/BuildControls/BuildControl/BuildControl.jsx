import React from "react";
import "../BuildControl/BuildControlStyle.css";

const BuildControl = (props) => (
  <div className="BuildControl">
    <img src={props.img} height="60px" width="60px" />
    <div>
      <div className="Label">{props.Label}</div>
      <div className="Price">$ {props.ingreprice}</div>
    </div>
    <div className="counter">{props.count}</div>
    <div className="buttons">
      <button className="Less" onClick={props.remove} disabled={props.disabled}>
        -
      </button>
      <button className="More" onClick={props.added}>
        +
      </button>
    </div>
  </div>
);

export default BuildControl;
