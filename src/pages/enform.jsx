import React from "react";
import "./form.css";

export default function EnForm() {
  return (
    <div className="EnForm">
      <style>{"body{background-color: rgba(7, 67, 10, 0.196);}"}</style>
      <div className="container form">
        <h2>Work Inquiry</h2>
        <form method="POST" action="hhttps://getform.io/f/lbkmzlyb">
          <div className="row">
            <div class="col ">
              <input
                type="text"
                placeholder="Name"
                className="border border-0 mb-2 center"
              ></input>
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="border border-0"
              ></input>
            </div>
            <div class="col">
              <input
                type="text"
                placeholder="Enter your messege."
                className="border border-0  messege"
              ></input>
            </div>
            <div class="col">
              <input type="submit">Submit</input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
