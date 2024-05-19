import React from "react";
import "./Tehnologies.css";

export default function Tehnologies(props) {
  return (
    <div className="Tehnologies">
      <h5>
        {" "}
        <strong>Favorite Tech:</strong> {props.header}
      </h5>
      <ul>
        <li>React.js</li>
        <li>Bootstrap</li>
        <li>Python</li>
      </ul>
    </div>
  );
}
