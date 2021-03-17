import React from "react";
import "../../styles/Component.css";
import CartSub from "../svgs/cart-sub.svg";

function button(props) {
  return (
    <>
      <button className="main-button" 
        onClick={props.handleClick}>
        <img src={CartSub} alt="cart" />
        {props.title}
      </button>
    </>
  );
}

export default button;
