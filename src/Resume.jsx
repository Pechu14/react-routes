import React from 'react';
import { studies, experiences } from './data/resume';
import { Link } from 'react-router-dom';

const Resume = () => (
  <div>
    <h1>Currículum</h1>
      <h2>Experiencia Laboral</h2>
      <ul>
        {experiences.map((exp) => (
          <li key={exp.id}>
            <h3>{exp.title} - {exp.institution}</h3>
            <p>{exp.date}</p>
          </li>
        ))}
      </ul>
      <h2>Educación</h2>
      <ul>
        {studies.map((study) => (
          <li key={study.id}>
            <h3>{study.title} - {study.institution}</h3>
            <p>{study.date}</p>
          </li>
        ))}
      </ul>
      <p>Ir a mis proyectos: <Link to={`/projects`}>Proyectos</Link></p>
      <p>Ir a mis home: <Link to={`/`}>Home</Link></p>
  </div>
);

export default Resume;