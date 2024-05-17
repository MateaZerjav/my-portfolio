import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

export default function Hero(props) {
  return (
    <div className="Hero">
      <h1>{props.header1}</h1>
      <h2>{props.header2}</h2>
      <p>{props.paragraph}</p>
      <p>This website is currently under construction</p>
      <a href={props.getstartedId} className="button">
        {props.getstarted}
      </a>
      <Link to="/#contact-matea-eng"></Link>
    </div>
  );
}
