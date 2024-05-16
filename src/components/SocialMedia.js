import React from "react";
import "./SocialMedia.css";

export default function SocialMedia() {
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
        To get my CV Resume click{" "}
        <a
          href="https://www.dropbox.com/scl/fi/0rq1rfhx502c37ie318oi/Matea-Zerjav-CV-Resume.pdf?rlkey=m1k1d10w4gxepvxai8jgq15c4&st=kaqqgrw7&dl=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
      </p>

      <p className="codedBy">
        This website was created using React.js and Bootstrap, developed by
        Matea Zerjav, and is
        <a
          className="linkToGitHub"
          href="https://github.com/MateaZerjav/my-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          open-sourced on GitHub{" "}
        </a>
      </p>
    </div>
  );
}