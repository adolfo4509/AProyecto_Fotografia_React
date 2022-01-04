import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/nav.css";
import Select from "react-select";

const Nav = () => {
  const history = useHistory();

  const options = [
    { value: "Eventos religiosos", label: "Eventos religiosos" },
    { value: "Tus mejores Recuerdos", label: "Tus mejores Recuerdos" },
    { value: "Qinceañeras", label: "Qinceañeras" },
    { value: "Graduaciones", label: "Graduaciones" },
    { value: "Gestantes", label: "Gestantes" },
  ];

  const handleChange = (e) => {
    if (e.value === "Eventos religiosos") {
      history.push("/Religiosos");
    } else if (e.value === "Tus mejores Recuerdos") {
      history.push("/Recuerdos");
    } else if (e.value === "Qinceañeras") {
      history.push("/Qinceaneras");
    } else if (e.value === "Graduaciones") {
      history.push("/Graduaciones");
    } else if (e.value === "Gestantes") {
      history.push("/Gestantes");
    }
  };
  return (
    <header className="header">
      <div className="contenedor-hero">
        <h1>
          Alexander vasquez Fotografo profesional
          <p>
            <i class="fas fa-map-marker-alt"></i> Popayán, Cauca, Colombia
          </p>
        </h1>
        <div class="barra">
          <nav className="navegacion-principal">
            <Link to="/">Inicio</Link>
            <Link to="/nosotros">Nosotros</Link>
            <div className="nav_servicios">
              <label className="nav_servicios_label">Nuestros Servicios</label>
              <Select
                onChange={handleChange}
                className="nav_servicios_select"
                placeholder="Selecciona un servicio"
                options={options}
              />
            </div>
            <Link to="/contactanos">Contáctanos</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Nav;
