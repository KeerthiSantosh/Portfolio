import React from "react";
import '../../../css/reset.css';
import "./BurgerControlStyle.css";

const brgControl = (props) => (
  <div className="brg-control border-bottom">
    <img src={props.img}/>
    <div>
      <label className="brg-label fs-16 fw-900">{props.Label}</label>
      <label className="brg-label fs-16">$ {props.ingreprice}</label>
    </div>
    <label className="brg-label fs-16 fw-900 text-right">{props.count}</label>
    <div>
      <button className="btn btn-white fs-18 fw-bold" onClick={props.remove} disabled={props.disabled}>
        -
      </button>
      <button className="btn btn-white fs-18 fw-bold" onClick={props.added}>
        +
      </button>
    </div>
  </div>
);

export default brgControl;
