import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// const mailIcon = <FontAwesomeIcon icon={faEnvelope} size="2xl" />
// const gitHub = <FontAwesomeIcon icon={faGithub} size="2xl" />
// const linkedIn = <FontAwesomeIcon icon={faLinkedin} size="2xl" />

export default function Footer() {
    return (
      <div className="fixed-bottom footer">
        <div>
          <ul className="nav justify-content-center">
            <li className="nav-item p-3">
              <a href="mailto: robles1999@gmail.com" target="_blank">
                {/* {mailIcon} */}
              </a>
            </li>
            <li className="nav-item p-3">
              <a href="https://github.com/robles1999" target="_blank">
                {/* {gitHub} */}
              </a>
            </li>
            <li className="nav-item p-3">
              <a
                href="https://www.linkedin.com/in/luis-enrique-robles/"
                target="_blank"
              >
                {/* {linkedIn} */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}