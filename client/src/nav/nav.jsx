import React from "react";
import { Link ,useHistory} from "react-router-dom";

import "../styles/nav.css";
import Select from "react-select";

const Nav = () => {
 // const [optionService, setOptionService] = useState([]);
  const history = useHistory()
  const options = [
    { value: "Eventos religiosos", label: "Eventos religiosos" },
    { value: "Tus mejores Recuerdos", label: "Tus mejores Recuerdos" },
    { value: "Quinceañeras", label: "Quinceañeras" },
    { value: "Graduaciones", label: "Graduaciones" },
    { value: "Gestantes", label: "Gestantes" },
  ];
const Redirigir = (e) =>{
    
if(e.value === "Eventos religiosos") history.push("/EventosReligiosos")
if(e.value === "Tus mejores Recuerdos")  history.push("/recuerdos")
if(e.value === "Quinceañeras")  history.push("/quinceañeras")
if(e.value === "Graduaciones")  history.push("/graduaciones")
if(e.value === "Gestantes") history.push("/gestantes")
}

  return (
    <div>
      <nav className="nav_">
        <Link className="inicio" to="/">
          Inicio
        </Link>
        <Link to="/nosotros">Nosotros</Link>
        <Select onChange={Redirigir}
          placeholder="Nuestros Servicios"
         // value={optionService}
          options={options}
        />
        <Link to="/contactanos">Contáctanos</Link>
      </nav>
    </div>
  );
};

export default Nav;
