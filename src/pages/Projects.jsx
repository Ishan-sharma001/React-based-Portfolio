import React from "react";
import "./styles/Projects.css"
import ProjectsHero from "../components/project/ProjectsHero";
import ProjectSection from "../components/home/ProjectSection"
import Footer from "../components/default/Footer";

const Projects = () => {
  return (
    <div className="projects">
      <ProjectsHero />
      <ProjectSection/>
      <Footer />
    </div>
  );
};

export default Projects;
