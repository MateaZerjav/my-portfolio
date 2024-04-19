import React from "react";
import "./SocialMedia.css";

export default function SocialMedia() {
  return (
    <div className="SocialMedia">
      <h3>matea.zerjav@gmail.com</h3>
      <p className="codedBy">
        This website was created using React.js and developed by Matea Zerjav,
        and is
        <a
          className="linkToGitHub"
          href="https://github.com/MateaZerjav/my-portfolio"
        >
          {" "}
          open-sourced on GitHub{" "}
        </a>
      </p>
    </div>
  );
}
