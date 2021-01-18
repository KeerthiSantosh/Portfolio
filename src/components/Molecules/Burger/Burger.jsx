import React, { Component } from "react";
import "./BurgerStyle.css";
import "../../../css/reset.css";
import BurgerIngredients from "../../Atom/BurgerIngredients/BurgerIngredients";
const Burger = (props) => {
  let newingredients = Object.keys(props.ingredients)
    .map((igkey) => {
      return [...Array(props.ingredients[igkey])].map((_, i) => {
        return <BurgerIngredients key={igkey + i} type={igkey} />;
      });
    })

    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (newingredients.length === 0) {
    newingredients = (
      <p class="fs-16 fw-bold">Please start adding Ingredients ...</p>
    );
  }

  return (
      <div className="brg left text-center">
        <div className="brg-container">
          <BurgerIngredients type="bread-top" />
          {newingredients}
          <BurgerIngredients type="bread-bottom" />
        </div>
        <div className="brg-footer">
          <h1 className="fs-34 fw-bold fc-yellow">Burger</h1>
          <p class="fs-16 fw-bold fstyle-i">Delicious food is under process</p>
        </div>
      </div>
  );
};
export default Burger;
