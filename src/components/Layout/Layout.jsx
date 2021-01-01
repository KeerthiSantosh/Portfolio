import React from "react";
import Auxiliary from "../../HOC/Auxiliary";
import "./LayoutStyle.css";

const Layout = (props) => (
  <Auxiliary>
    <div className="Content">
      Burger
      <p>Delicious food is under process</p>
    </div>

    <main>{props.children}</main>
  </Auxiliary>
);

export default Layout;
