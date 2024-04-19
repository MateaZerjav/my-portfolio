import React from "react";
import "./Projects.css";

export default function Projects(props) {
  return (
    <div className="Project">
      <h2> {props.Header}</h2>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img className="img-fluid " src="" alt="Matea" />
      </a>
      <p>{props.Title}</p>
    </div>
  );
}
