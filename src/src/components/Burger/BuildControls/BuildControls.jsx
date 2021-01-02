import React from "react";
import "../BuildControls/BuildControlsStyle.css";
import BuildControl from "./BuildControl/BuildControl";
import salad from "../../../assests/Frame 13703.png";
import Kaas from "../../../assests/Cheese (2).png";
import bacon from "../../../assests/image 12.png";

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
    img: Kaas,
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

const BuildControls = (props) => (
  <div className="BuildControls">
    <h2>Ingredients</h2>
    {/* <div className="sizeChart">
<h4>Size</h4> 
<button className="btn" onClick={props.BurgerSize}>Small</button>
<button className="btn" onClick={props.BurgerMediumIngredients}>Medium</button>
<button className="btn" onclick={props.BurgerLargeIngredients}>Large</button> 
</div> */}

    {controls.map((ctrl) => (
      <BuildControl
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
    <div className="burger-price">
      <div className="total-price">Total Cost </div>
      <div className="price">${props.price}</div>
    </div>
    <button
      className="order-btn"
      disabled={!props.purchase}
      onClick={props.ordered}
    >
      ORDER NOW
    </button>
  </div>
);
export default BuildControls;
