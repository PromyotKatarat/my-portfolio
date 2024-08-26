import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'Brief description of Project One.',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'Brief description of Project Two.',
    link: '#',
  },
];

const Projects = () => (
  <section id="projects" className="p-8">
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-500">View Project</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
