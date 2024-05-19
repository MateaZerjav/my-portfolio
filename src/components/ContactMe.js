import React from "react";
import "./ContactMe.css";

export default function ContactMe(props) {
  return (
    <div className="ContactMe ">
      <div className="row">
        <div className="col ">
          <h2>{props.inquiry}</h2>
          <p>{props.paragraph}</p>
        </div>
        <div className="col">
          <a href="mailto:matea.zerjav@gmail.com">{props.button}</a>
        </div>
      </div>
    </div>
  );
}
