import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Project Highlights</h2>
          <div className="section-underline"></div>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <Link to="/projects/1" className="project-image-link">
              <img src="/images/gda_icon.png" alt="GDA Icon" className="responsive-image" />
            </Link>
            <h3 className="project-title">GDA Icon</h3>
          </div>
          <div className="project-card">
            <Link to="/projects/2" className="project-image-link">
              <img src="/images/gda_icon.png" alt="Ghaly" className="responsive-image" />
            </Link>
            <h3 className="project-title">Project 2</h3>
          </div>
          <div className="project-card">
            <Link to="/projects/3" className="project-image-link">
              <img src="/images/gda_icon.png" alt="GDA Icon" className="responsive-image" />
            </Link>
            <h3 className="project-title">Project 3</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 