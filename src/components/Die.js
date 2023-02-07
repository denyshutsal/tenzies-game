import React from "react";
import "./Die.scss";

export default function Die(props) {
  let className = "die";
  if (props.isHeld) {
    className += " die--selected";
  }

  return (
    <div className={className} onClick={props.holdDice}>
      <span className="die__text">{props.value}</span>
    </div>
  );
}
