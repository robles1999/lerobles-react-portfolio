import React from "react";
const RESUME = "/Luis_Robles_Resume.pdf"
const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    // link.href = RESUME;
    link.href = process.env.PUBLIC_URL + RESUME;
    link.download = "resume.pdf";
    link.target = "_blank";
    link.click();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="resume-heading mb-4">Resume</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          // src=RESUME
          src={process.env.PUBLIC_URL + RESUME}
          title="Resume"
          width="100%"
          height="800px"
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
      <div className="footer-spacer"></div>
    
    </div>
  );
};

export default Resume;
