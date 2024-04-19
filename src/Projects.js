import React from "react";
import "./Projects.css";

export default function Projects(props) {
  return (
    <div className="Project">
      <h2> {props.Header}</h2>
      <img className="img-fluid " src="" alt="Matea" />
      <p>{props.Title}</p>
    </div>
  );
}
