import React from "react";
import "../styles/footer.css";

const Footer = () => {
  let copy = (/\u00A9/g, "©");
  return (
    <div className="copyright">
      <p>Todos los derechos reservados 2021{copy}</p>
      <div className="site-footer1">
        <p>Contáctanos</p>
        <a
          rel="noreferrer "
          href="https://api.whatsapp.com/send?phone=573114970253&text=Hola!%20Deseo%20obtener%20más%20información!%20sobre%20el%20trabajo"
          target="_blank"
        >
          <span className=" fa fa-whatsapp"></span>
        </a>
        <a
          rel="noreferrer "
          href="https://m.facebook.com/alexandervasquezfotografia/"
          target="_blank"
        >
          <i className="fa fa-facebook"></i>
        </a>
        <a
          rel="noreferrer "
          href="https://instagram.com/alexfotografopopayan?igshid=1c5zm0nw4x4zu"
          target="_blank"
        >
          <i className="fa fa-instagram"></i>
        </a>
        <a
          rel="noreferrer "
          href="https://t.me/alexanderfotografo"
          target="_blank"
        >
          <i className="fa fa-telegram"></i>
        </a>
      </div>{" "}
    </div>
  );
};

export default Footer;
