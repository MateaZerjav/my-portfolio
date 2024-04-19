import React from "react";
import "./ContactMe.css";

export default function ContactMe() {
  return (
    <div className="ContactMe">
      <div className="row">
        <div className="col ">
          <h2>Work Inquiry</h2>
          <p>Send your inquiry through e-mail</p>
        </div>
        <div className="col">
          <a href="mailto:matea.zerjav@gmail.com">Let’s talk here</a>
        </div>
      </div>
    </div>
  );
}
