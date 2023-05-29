import React, { useState } from "react";

const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.target = "_blank";
    link.click();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="resume-heading mb-4">Resume</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          src="/resume.pdf"
          title="Resume"
          width="100%"
          height="600px"
        ></iframe>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          className="btn btn-outline-secondary mt-2"
          onClick={downloadResume}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Resume;
