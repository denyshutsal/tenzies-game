import React from "react";
import "./Die.scss";

export default function Die(props) {
  return (
    <div className="die">
      <span className="die__text">{props.value}</span>
    </div>
  );
}
