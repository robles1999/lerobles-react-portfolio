import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../../src/App.css";

// ::::: Set the Font Awesome icons :::::
// ::::: EMAIL
const mailIcon = (
  <FontAwesomeIcon icon={faEnvelope} size="2xl" style={{ color: "black" }} />
);

// ::::: GITHUB
const gitHub = (
  <FontAwesomeIcon icon={faGithub} size="2xl" style={{ color: "black" }} />
);

// ::::: LINKED-IN
const linkedIn = (
  <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{ color: "black" }} />
);

export default function Footer() {
  return (
    <div className="fixed-bottom footer bg-secondary">
      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item p-3">
            {/* SET EMAIL LINK */}
            <a href="mailto: robles1999@gmail.com" target="_blank">
              {mailIcon}
            </a>
          </li>
            {/* SET GITHUB LINK */}
          <li className="nav-item p-3">
            <a href="https://github.com/robles1999" target="_blank">
              {gitHub}
            </a>
          </li>
          <li className="nav-item p-3">
            {/* SET LINKED-IN LINK */}
            <a
              href="https://www.linkedin.com/in/luis-enrique-robles/"
              target="_blank"
            >
              {linkedIn}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
