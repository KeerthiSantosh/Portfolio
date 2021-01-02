import React, { Component } from "react";
import "./BurgerStyle.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
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
      <p class="text-primary">Please start adding Ingredients</p>
    );
  }

  return (
    <div className="overlay">
      <div className="Burger">
        <div className="burger-container">
          <BurgerIngredients type="bread-top" />
          {newingredients}
          <BurgerIngredients type="bread-bottom" />
        </div>
        <div className="burger-footer">
          <h1 class="primary-heading">Burger</h1>
          <p class="para">Delicious food is under process</p>
        </div>
      </div>
    </div>
  );
};
export default Burger;
