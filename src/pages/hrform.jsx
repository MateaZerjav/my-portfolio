import React from "react";
import MyForm from "../components/MyForm";
import { Link } from "react-router-dom";

export default function HrForm() {
  return (
    <div>
      <Link to="/croatian">
        <h2 className="fst-italic text-light"> Natrag </h2>
      </Link>
      <MyForm
        header="Poslovni upit"
        enter_name="Ime"
        enter_email="Tvoj e-mail"
        enter_message="Tvoja poruka..."
        submit="Pošalji"
      />
    </div>
  );
}
