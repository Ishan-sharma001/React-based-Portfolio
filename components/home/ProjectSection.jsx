import { useState } from "react";
import "../home/style/ProjectSection.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built using React.js and CSS.",
    image: "/images/port.webp",
    category: "Web Development",
    link: "https://github.com/Ishan-sharma001/Portfolio",
  },
  {
    title: "E-Commerce Store",
    description: "A fully functional e-commerce store with product listings and cart features.",
    image: "/images/origin.webp",
    category: "Web Development",
    link: "#",
  },
  {
    title: "Calculator App",
    description: "A simple calculator built using JavaScript, HTML, and CSS.",
    image: "/images/calculator.webp",
    category: "JavaScript",
    link: "https://github.com/Ishan-sharma001/Calculator-js",
  },
  {
    title: "Explore Horizen",
    description: "A tour and travel website built using JavaScript.",
    image: "/images/travel.webp",
    category: "JavaScript",
    link: "https://explore-horizons-tan.vercel.app/",
  },
];


function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(projects.map((project) => project.category))];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="projects">
      <h2>My Projects</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {categories.map((category, index) => (
          <button
            key={index}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Display */}
      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href="#" className="btn" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}

      </div>


    </section>
  );
}

export default ProjectsSection;
