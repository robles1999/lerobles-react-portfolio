import React from "react";
import hero from "../images/02-hero-bg.jpg";

const style = {
        backgroundImage: `url(${hero})`,
        height: "150px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundSize: "100%",
        backgroundColor: "rgba(84, 150, 177, 0.493)",
        backgroundBlendMode: "multiply",
        marginBottom: "20px",
      }

function Nav({ currentPage, handlePageChange }) {
  return (
    <div
      className="header row align-items-center p-3 bg-secondary nav--background"
      style={style}
    >
      {/* NAME HEADER */}
      <div className="col-5">
        <h1 className="display-5 m-0 p-2 text-light">Luis Robles</h1>
      </div>
      {/* NAV LINKS */}
      <div className="col">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a
              href="#aboutMe"
              onClick={() => handlePageChange("AboutMe")}
              className={
                currentPage === "AboutMe" ? "nav-link active" : "nav-link"
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
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
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
                currentPage === "Resume" ? "nav-link active" : "nav-link"
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
