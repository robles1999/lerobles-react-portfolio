import React from "react";
import image from "../../images/luis-gtr.jpg";

export default function AboutMe() {
  return (
    <div className="p-3 row">
      <div className="col-md-6">
        <div className="card border-0 mb-3">
          <img className="rounded-3 border-0" src={image} alt="luis-gtr"></img>
        </div>
      </div>
      <div className="col-md-6">
        <div>
          {/* ::::: About Me :::::: */}
          <p>
            As a passionate and results-oriented full-stack web developer with a
            web development certificate from the University of Central Florida,
            I have a proven track record of designing, building, and maintaining
            websites from conception to production. I thrive in fast-paced,
            diverse team environments, where I work collaboratively with others
            to develop innovative solutions that exceed expectations. With my
            strong technical expertise and a dedication to continuous learning,
            I am confident in my ability to make a valuable contribution to any
            development team.
          </p>
          {/* ::::: Skills :::::: */}
          <h3>Technical Skills</h3>
          <p>
            HTML, CSS, JavaScript, MySQL, NoSQL, MongoDB, Express, Node,
            EJS, Handlebars, JQuery, Bootstrap, React, GitHub.
          </p>
        </div>
        <div>
          {/* ::::: Additional Skills :::::: */}
          <h3>Additional Skills</h3>
          <ul>
            <li>Microsoft Office tools</li>
            <li>Proficient in both Mac and PC platforms</li>
            <li>
              Easytrieve Plus and Multiple Virtual Storage / Time sharing Option
              (MVS/TSO)
            </li>
            <li>Linux Command Line</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
