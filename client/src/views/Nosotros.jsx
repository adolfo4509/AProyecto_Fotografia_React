import React from 'react'
import Footer from '../Footer/Footer'
import Nav from '../nav/nav'
import imagen1 from '../assets/header.jpg'
import imagen2 from '../assets/vision.jpeg'
import imagen3 from '../assets/mision.jpg'

const Nosotros = () => {
  return (
    <div>
      <Nav />
      <div>
        <h1 className="centrar-texto">Más Sobre nosotros</h1>
        <div className="grid">
          <div className="columnas-6">
            <img src={imagen1} alt="imag not found"></img>
          </div>
          <div className="columnas-6">
            <p>
              La creación de nuestra empresa Nació bajo la idea de un proyecto
              de grado, en el año 2001 cuando terminaba mis estudios de Técnico
              en Sistemas con Énfasis en Diseño Gráfico y Multimedia. Dicho
              sueño de grado fue crear una firma que ofreciera servicios
              fotográficos y video en alta resolución (HD). En el año 2004
              empezaron mis primeros pinos cuando me dieron la oportunidad de
              laborar durante cinco años en un laboratorio fotográfico, donde me
              apasiono más la fotografía y el diseño, fue así como para el día
              11 de marzo del año 2010 decidí hacer realidad este sueño y así
              darle vida y fundar Alexander Vasquez Fotografía y Video
              especializado en toda clase de eventos Sociales. Primero estuvimos
              ubicados en el barrio San Camilo de la ciudad Popayán, Cauca
              durante 10 años, y actualmente nos ubicamos en el Barrio villa del
              sol de la misma ciudad. Durante la trayectoria de la empresa hemos
              ofrecido a nuestros usuarios un trabajo de calidad y oportunidad
              dejando plasmados los mejores momentos de sus vidas, ya sea en
              video o fotografía.
            </p>
          </div>
        </div>
      </div>
      <div className="contenedor">
        <h2 className="centrar-texto">Nuestra Misión y Visión</h2>
        <div className="grid">
          <div className="columnas-6">
            <img src={imagen2} alt=" imag not found" />
            <h3 className="centrar-texto"> Visión</h3>

            <p className="nosotros_cuerpo_derecha">
              Ser una empresa líder que está a la vanguardia en la toma de
              fotografía profesional, además ofrecer un amplio portafolio de
              servicios con cobertura a nivel Regional, manejando los mejores
              equipos tecnológicos, tener un acercamiento verdadero con nuestros
              usuarios.
            </p>
          </div>
          <div className="columnas-6-1">
            <img src={imagen3} alt="imag not found " />
            <h3 className="fw-300 centrar-texto">Misión</h3>

            <p>
              Ofrecer a nuestros clientes un excelente portafolio de servicios
              para lograr que los mejores momentos de sus vidas, sean plasmados
              para la posteridad, ofrecer una atención personalizada y así
              lograr con nuestra experiencia satisfacer al máximo sus
              necesidades.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Nosotros
