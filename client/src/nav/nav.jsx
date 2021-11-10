import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";
import Select from "react-select";

const Nav = () => {
  const [optionService, setOptionService] = useState([]);
  const options = [
    { value: "Eventos religiosos", label: "Eventos religiosos" },
    { value: "Tus mejores Recuerdos", label: "Tus mejores Recuerdos" },
    { value: "Qinceañeras", label: "Qinceañeras" },
    { value: "Graduaciones", label: "Graduaciones" },
    { value: "Gestantes", label: "Gestantes" },
  ];

  return (
    <div>
      <nav className="nav_">
        <Link className="inicio" to="/">
          Inicio
        </Link>
        <Link to="/nosotros">Nosotros</Link>
        <Select
          placeholder="Nuestros Servicios"
          value={optionService}
          options={options}
        />
        <Link to="/nosotros">Contáctanos</Link>
      </nav>
    </div>
  );
};

export default Nav;
