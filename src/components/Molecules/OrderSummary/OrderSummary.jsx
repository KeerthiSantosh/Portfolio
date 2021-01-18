import React from "react";
import "./OrderSummary.css";
import "../../../css/utilities.css";
const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <div className="brg-control order border-bottom" key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>
        <div className="brg-label count text-right">{props.ingredients[igKey]}</div>
      </div>
    );
  });
  return (
    <div className="order-info">
       <h1 className="fs-34">Your Order</h1>
        <p class="fs-16">A Delicious Burger with following ingredients</p>
        {ingredientSummary}
        <div className="brg-order">
          <label className="fs-20 fw-bold">Total Cost </label>
          <label className="fs-20 fw-bold">${props.price}</label>
      </div>
      <button className="btn btn-yellow bg-yellow fs-16 fw-900" onClick={props.ok}>
        OK
      </button>
    </div>
  );
};
export default orderSummary;
