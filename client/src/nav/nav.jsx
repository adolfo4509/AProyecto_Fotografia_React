import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/styles.css'

const Nav = () => {
  return (
    <div className="header">
      <div className="contenedor-hero">
        <Link className="inicio" to="/">
          <h1>Alexander Vásquez Fotografo profesional Uni </h1>
        </Link>
        <p>
          <i className="fas fa-map-marker-alt"></i> Popayán, Cauca, Colombia{' '}
        </p>
        <div className="barra">
          <nav id="nav" className="navegacion-principal">
            <Link className="enlace-navegacion" to="/">
              Inicio
            </Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/EventosReligiosos">Eventos religiosos</Link>
            <Link to="/recuerdos">Tus mejores Recuerdos</Link>
            <Link to="/graduaciones">Graduaciones</Link>
            <Link to="/gestantes">Gestantes</Link>
            <Link to="/quinceañeras">Quinceañeras</Link>
            <Link to="/contactanos">Contáctanos</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Nav
