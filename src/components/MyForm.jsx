import React from "react";
import "../components/myForm.css";

export default function MyForm(props) {
  return (
    <div className="MyForm">
      <style>{"body{background-color: rgba(7, 67, 10, 0.196);}"}</style>
      <div className="container form">
        <div className="form_container">
          <h1 className="">{props.header}</h1>
          <form method="POST" action="https://getform.io/f/lbkmzlyb">
            <div className="row">
              <div class="col ">
                <input
                  name="Name"
                  type="text"
                  placeholder={props.enter_name}
                  className="border border-0 mb-2 center"
                ></input>
                <input
                  name="Email"
                  type="email"
                  placeholder={props.enter_email}
                  className="border border-0"
                ></input>
              </div>
              <div class="col">
                <input
                  name="message"
                  type="text"
                  placeholder={props.enter_message}
                  className="border border-0  messege"
                ></input>
              </div>
              <div class="col">
                <button type="submit">{props.submit}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
