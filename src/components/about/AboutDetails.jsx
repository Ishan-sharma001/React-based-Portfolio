import React from "react";
import "./styles/AboutDetails.css";

const AboutDetails = () => {
    return (
      <div className="about-details">
        <h2>More About Me</h2>
  
        {/* Education Section */}
        <div className="about-box">
          <h3>🎓 Education</h3>
          <p>Bachelor's Degree in Computer Science - XYZ University (2018 - 2022)</p>
        </div>
  
        {/* Skills Section */}
        <div className="about-box">
          <h3>🛠️ Skills & Tools</h3>
          <p>HTML, CSS, JavaScript, React.js, Git, Node.js</p>
        </div>
  
        {/* Interests Section */}
        <div className="about-box">
          <h3>❤️ Interests</h3>
          <p>Coding, Tech Blogging, Gaming, Exploring New Technologies</p>
        </div>
      </div>
    );
  };

export default AboutDetails;
