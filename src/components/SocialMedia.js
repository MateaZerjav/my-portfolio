import React from "react";
import "./SocialMedia.css";

export default function SocialMedia(props) {
  return (
    <div className="SocialMedia">
      <h3>matea.zerjav@gmail.com</h3>

      <a
        className="icon"
        href="https://www.linkedin.com/in/matea-zerjav-482b93272/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a
        className="icon"
        href="https://github.com/MateaZerjav"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-square-github"></i>
      </a>
      <a
        className="icon"
        href="https://www.shecodes.io/graduates/54108-matea-zerjav"
        target="_blank"
        rel="noopener noreferrer"
      >
        SheCodes
      </a>

      <p>
        {props.paragraph}{" "}
        <a href={props.cv} target="_blank" rel="noopener noreferrer">
          {props.here}
        </a>
      </p>

      <p className="codedBy">
        {props.madeby}
        <a
          className="linkToGitHub"
          href="https://github.com/MateaZerjav/my-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          {props.github}{" "}
        </a>
      </p>
    </div>
  );
}
