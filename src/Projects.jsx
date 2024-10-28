import React from 'react';
import projects from './data/projects';
import { Link } from 'react-router-dom';


const Projects = () => (
  <div>
    <h1>Proyectos</h1>
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <h2>{project.name}</h2>
          <img src={project.image} alt={project.name} />
          <p>{project.description}</p>
          <a href={project.url} target="_blank">Ver Proyecto</a>
        </li>
      ))}
    </ul>
    <p>Ir a mis home: <Link to={`/`}>Home</Link></p>
    <p>Ir a mis Curriculum:<Link to={`/resume`}>Curriculum</Link></p>
  </div>
);

export default Projects;
