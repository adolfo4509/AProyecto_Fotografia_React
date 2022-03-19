import React from 'react'
import '../styles/styles.css'

const Footer = () => {
  return (
    <div>
      <div className="site-footer">
        <p id="contacto">Contáctanos</p>
        <a
          className="iconos-w"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=573114970253&text=Hola!%20Deseo%20obtener%20mas%20informacion!%20sobre%20el%20trabajo"
          rel="noreferrer"
        >
          <i className=" fab fa-whatsapp"></i>
        </a>
        <a
          className="iconos-f"
          target="_blank"
          href="https://m.facebook.com/alexandervasquezfotografia/"
          rel="noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          className="iconos-i"
          target="_blank"
          href="https://instagram.com/alexfotografopopayan?igshid=1c5zm0nw4x4zu"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          className="iconos-f"
          target="_blank"
          href="https://t.me/alexanderfotografo"
          rel="noreferrer"
        >
          <i className="fab fa-telegram"></i>
        </a>
      </div>
      <footer>
        <div className="copyright  ">
          <p>&copy; Todos los derechos Reservados 2020 </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
