import React, { Component } from "react";
import PropTypes from "prop-types";
import "./BurgerIngredientStyle.css";

class BurgerIngredients extends Component {
  render() {
    let ingredients = null;
    let classObject = "";
    switch (this.props.type) {
      case "bread-bottom":
        classObject = "BreadBottom";
        break;

      case "bread-top":
        classObject = "BreadTop";
        break;

      case "cheese":
        classObject = "Cheese";
        break;

      case "salad":
        classObject = "Salad";
        break;

      case "bacon":
        classObject = "Bacon";
        break;

      default:
        ingredients = null;
    }
    ingredients = <div className={classObject}></div>;
    return ingredients;
  }
}

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredients;
