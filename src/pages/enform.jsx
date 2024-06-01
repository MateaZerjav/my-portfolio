import React from "react";
import MyForm from "../components/MyForm";
import { Link } from "react-router-dom";

export default function EnForm() {
  return (
    <div className="EnForm">
      <Link to="/">
        <h2 className="fst-italic text-light"> Back </h2>
      </Link>
      <MyForm
        header="Work Inquiry"
        enter_name="Name"
        enter_email="Enter your e-mail"
        enter_message="Your message..."
        submit="Submit"
      />
    </div>
  );
}
