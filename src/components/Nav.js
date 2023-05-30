import React from "react";
import "../../src/App.css";

function Nav({ currentPage, handlePageChange }) {
  return (
    <div className="header row align-items-center p-3 bg-secondary hero nav--background">
      {/* NAME HEADER */}
      <div className="col-12 col-md-5 text-md-left mb-2 mb-md-0 ml-md-auto">
        <h1 className="text-left text-center-sm">Luis Robles</h1>
      </div>
      {/* NAV LINKS */}
      <div className="col-12 col-md d-flex justify-content-center justify-content-md-end">
        <ul className="nav">
          <li className="nav-item">
            <a
              // handlePageChange is passed in as a prop.
              // Since we need the previous value of the current page
              // a function needs to be used on the onClick
              href="#aboutMe"
              onClick={ () => handlePageChange("AboutMe") }
              // If the client is viewing the About Me page set the
              // className attribute to active so that the link has
              // the active color the other links will have the default color
              className={currentPage === "AboutMe" ? "link active" : "link"}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={currentPage === "Portfolio" ? "link active" : "link"}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={currentPage === "Resume" ? "link active" : "link"}
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
