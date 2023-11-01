import React from "react";
import portfolioData from "../data/portfolioData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../App.css";

const gitHub = <FontAwesomeIcon icon={faGithub} size="lg" />;
const globe = <FontAwesomeIcon icon={faGlobe} size="lg" />;

export default function Portfolio() {
  return (
    <div className="p-0 flex-row justify-center">
      <h1 className="text-center mb-4 resume-heading">Portfolio</h1>
      <div className="row flex-row justify-space-between my-4">
        {portfolioData.map((project) => (
          <div key={project.id} className="col-12 col-xl-6">
            <div className="portfolio-item m-2 mb-4 shadow rounded-3 border border-secondary">
              <div className="portfolio-overlay"></div>
              <img
                src={project.image}
                height={300}
                className="card-img-top project-image rounded-top"
                alt={project.title}
              ></img>
              <div className="portfolio-content">
                <div className="row card-body bg-secondary portfolio--card-title m-0 rounded-bottom">
                  <div className="col-6">
                    <h5 className="card-title p-2 m-0">{project.title}</h5>
                  </div>
                  <div className="col-6 text-end m-0">
                    <a href={project.gitHub} className="btn" target="_blank">
                      GitHub {gitHub}
                    </a>
                    <a href={project.deployed} className="btn" target="_blank">
                      Web App {globe}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Add a spacer div after the last portfolio item */}
      <div className="spacer"></div>
    </div>
  );
}
