import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";

export default function Hero(props) {
  return (
    <div className="Hero">
      <h1>{props.header1}</h1>
      <h2>{props.header2}</h2>
      <p>{props.paragraph}</p>

      <Link
        activeClass="active"
        to={props.scroll}
        smooth={true}
        offset={50}
        duration={500}
      >
        <button>{props.button}</button>
      </Link>
    </div>
  );
}
