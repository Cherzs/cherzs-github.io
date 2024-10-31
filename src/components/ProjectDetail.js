import React from 'react';

const ProjectDetail = () => {
  const projects = [
    {
      id: '1',
      title: 'GDA Icon',
      description: 'Details about GDA Icon project.',
      longDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/images/gda_icon.png'
    },
    {
      id: '2',
      title: 'Project 2',
      description: 'Details about Project 2.',
      longDescription: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: '/images/gda_icon.png'
    },
    {
      id: '3',
      title: 'Project 3',
      description: 'Details about Project 3.',
      longDescription: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      image: '/images/gda_icon.png'
    },
  ];

  return (
    <div className="container">
      <h2>All Projects</h2>
      {projects.map(project => (
        <div key={project.id} className="project-detail">
          <h3>{project.title}</h3>
          <img src={project.image} alt={project.title} className="project-image" />
          <p>{project.longDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetail; 