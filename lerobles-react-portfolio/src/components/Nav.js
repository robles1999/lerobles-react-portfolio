import React from "react";
import "../../src/App.css";

// const linkSize = {
//     fontSize: "1.5rem"
// }

function Nav({ currentPage, handlePageChange }) {
  return (
    <div
      className="header row align-items-center p-3 bg-secondary hero nav--background"
      
    >
      {/* NAME HEADER */}
      <div className="col-5">
        <h1>Luis Robles</h1>
      </div>
      {/* NAV LINKS */}
      <div className="col">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a
              href="#aboutMe"
              onClick={() => handlePageChange("AboutMe")}
              className={
                currentPage === "AboutMe" ? "link active" : "link"
              }
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "link active" : "link"
              }
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "link active" : "link"
              }
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
