import React from "react";
import "./BurgerMapStyle.css";
import '../../../css/reset.css';
import '../../../css/utilities.css';
import BurgerControl from "../../Atom/BurgerControl/BurgerControl";
import salad from "../../../assests/img/BurgerIngredients/salad.jpg";
import Cheese from "../../../assests/img/BurgerIngredients/Cheese (2).png";
import bacon from "../../../assests/img/BurgerIngredients/bacon.jpg";

const controls = [
  {
    label: "Salad",
    type: "salad",
    ingredientprice: 3.0,
    img: salad,
    counter: 0,
  },
  {
    label: "Cheese",
    type: "cheese",
    ingredientprice: 10.0,
    img: Cheese,
    counter: 0,
  },
  {
    label: "Bacon",
    type: "bacon",
    ingredientprice: 10.0,
    img: bacon,
    counter: 0,
  },
];

const BurgerMap = (props) => (
  <div className="brg right">
    <h1 className="fs-34 border-bottom">Ingredients</h1>
    {controls.map((ctrl) => (
      <BurgerControl
        key={ctrl.label}
        Label={ctrl.label}
        img={ctrl.img}
        ingreprice={ctrl.ingredientprice}
        count={props.counter[ctrl.type]}
        price={props.price}
        small={() => props.burgerSmall(ctrl.size)}
        added={() => props.ingredientsAdded(ctrl.type)}
        remove={() => props.ingredientsRemove(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <div className="brg-child-right">
      <div>
      <label className="fs-20 fw-bold">Total Cost </label>
      <label className="fs-20 fw-bold">${props.price}</label>
    </div>
    <div>
    <button
      className="btn btn-yellow bg-yellow fs-16 fw-900"
      disabled={!props.purchase}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
    </div>
  </div>
  </div>
);
export default BurgerMap;
