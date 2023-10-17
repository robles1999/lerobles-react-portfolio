import React from "react";
import image from "../../images/luis-gtr.jpg";

export default function AboutMe() {
  return (
    <div className="p-3 mt-4 row">
      <div className="col-md-6">
        <div className="card border-0 mb-3">
          <img className="rounded-3 border-0" src={image} alt="luis-gtr"></img>
        </div>
      </div>
      <div className="col-md-6">
        <div>
          {/* ::::: About Me :::::: */}
          <p>
            Results-driven IT professional with hands-on experience in web development and technical troubleshooting. Earned a coding certificate from UCF, gaining proficiency in HTML, CSS, JavaScript, Node.js, and responsive web design. Developed strong analytical thinking and customer service skills by diagnosing technical issues and implementing effective solutions. Adept at explaining complex technical information clearly to a broad audience. Seeking a role as part of an energetic technology team where I can apply my technical expertise. Enthusiastic to take on challenges in web development, IT/Tech support and releated.
          </p>
          {/* ::::: Skills :::::: */}
          <h3>Technical Skills</h3>
          <p>
            HTML, CSS, JavaScript, MySQL, NoSQL, MongoDB, Express, Node, EJS,
            Handlebars, JQuery, Bootstrap, React.js, GitHub.
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
            <li>Fusion 360</li>
            <li>FreeCAD</li>
          </ul>
        </div>
      </div>
      <div className="footer-spacer"></div>
    </div>
  );
}
