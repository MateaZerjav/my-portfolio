import React from "react";
import "./ContactMe.css";
import { Link } from "react-router-dom";

export default function ContactMe(props) {
  return (
    <div className="ContactMe ">
      <div className="row">
        <div className="col ">
          <h2>{props.inquiry}</h2>
          <p>{props.paragraph}</p>
        </div>
        <div className="col">
          <Link to={props.contact_form}> {props.button}</Link>
        </div>
      </div>
    </div>
  );
}
