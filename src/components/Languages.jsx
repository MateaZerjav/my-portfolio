import React from "react";
import { Link } from "react-router-dom";
import "./Languages.css";

export default function Languages() {
  return (
    <div className="Languages">
      <Link to="/">English</Link>
      <Link to="/german">Deutsch</Link>
      <Link to="/croatian">Hrvatski</Link>
    </div>
  );
}
