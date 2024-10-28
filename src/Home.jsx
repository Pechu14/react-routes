import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';



  const Home = () => (
      <>
         <h1>Jesús Gil Santos</h1>
         <p>Bienvenidos a mi página personal.Aquí podéis ver todos mis proyectos y experiencia previa. </p>
         <p>Ir a mis proyectos: <Link to={`/projects`}>Proyectos</Link></p>
          <p>Ir a mis Curriculum:<Link to={`/resume`}>Curriculum</Link></p>
        </>
  )


  export default Home;