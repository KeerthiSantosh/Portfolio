import React from "react";
import Auxiliary from "../../../HOC/Auxiliary";
import "./OrderSummary.css";
const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <div className="ingre-key" key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>
        <div className="key">{props.ingredients[igKey]}</div>
      </div>
    );
  });
  return (
    <Auxiliary>
      <div className="order">
        <div className="order-heading">
          <h2>Your Order</h2>
        </div>
        <div className="order-details">
          <p>
            <strong>A Delicious Burger with following ingredients</strong>
          </p>
          {ingredientSummary}
          <div className="final-price">
            <div className="ft-price">Total Cost </div>
            <div className="price">${props.price}</div>
          </div>
          <button className="ok-btn" onClick={props.ok}>
            OK
          </button>
        </div>
      </div>
    </Auxiliary>
  );
};
export default orderSummary;
