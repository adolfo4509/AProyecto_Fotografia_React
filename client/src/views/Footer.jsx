import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  let copy = (/\u00A9/g, "©");
  return (
    <div className="copyright">
      <p>{copy}Todos los derechos reservados 2021</p>
      <aside>
        <div className="site-footer">
          <p id="contacto">Contáctanos</p>
          <Link to="https://api.whatsapp.com/send?phone=573114970253&text=Hola!%20Deseo%20obtener%20más%20información!%20sobre%20el%20trabajo">
            <span className=" fa fa-whatsapp"></span>
          </Link>
          <a href="https://m.facebook.com/alexandervasquezfotografia/">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://instagram.com/alexfotografopopayan?igshid=1c5zm0nw4x4zu">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://t.me/alexanderfotografo">
            <i className="fa fa-telegram"></i>
          </a>
        </div>
      </aside>
    </div>
  );
};

export default Footer;
