import React from "react";
import MyForm from "../components/MyForm";
import { Link } from "react-router-dom";

export default function DeuForm() {
  return (
    <div>
      <Link to="/german">
        <h2 className="fst-italic text-light">Zurück</h2>
      </Link>
      <MyForm
        header="Arbeitsanfrage"
        enter_name="Name"
        enter_email="Geben sie Ihre E-Mail ein"
        enter_message="Your message..."
        submit="Submit"
      />
    </div>
  );
}
