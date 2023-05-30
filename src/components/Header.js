import React, { useState } from "react";
import Nav from "./Nav";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* Passes the `currentPage` value and the setter function `handlePageChange`
       * to the Nav component. This sets the color of each link
       */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="container p-3">{renderPage()}</div>
    </div>
  );
}
