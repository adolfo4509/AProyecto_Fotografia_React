import React from "react";
import Nav from "../nav/nav";
import "../styles/nosotros.css";

const Nosotros = () => {
  return (
    <div>
      <Nav />
      <div>
        <h1 className="nosotros_h1">Más Sobre nosotros</h1>
        <div className="nosotros_cuerpo">
          <img src="" alt="imag not found"></img>
          <p className="nosotros_cuerpo_izquierda">
            La creación de nuestra empresa Nació bajo la idea de un proyecto de
            grado, en el año 2001 cuando terminaba mis estudios de Técnico en
            Sistemas con Énfasis en Diseño Gráfico y Multimedia. Dicho sueño de
            grado fue crear una firma que ofreciera servicios fotográficos y
            video en alta resolución (HD). En el año 2004 empezaron mis primeros
            pinos cuando me dieron la oportunidad de laborar durante cinco años
            en un laboratorio fotográfico, donde me apasiono más la fotografía y
            el diseño, fue así como para el día 11 de marzo del año 2010 decidí
            hacer realidad este sueño y así darle vida y fundar Alexander
            Vasquez Fotografía y Video especializado en toda clase de eventos
            Sociales. Primero estuvimos ubicados en el barrio San Camilo de la
            ciudad Popayán, Cauca durante 10 años, y actualmente nos ubicamos en
            el Barrio villa del sol de la misma ciudad. Durante la trayectoria
            de la empresa hemos ofrecido a nuestros usuarios un trabajo de
            calidad y oportunidad dejando plasmados los mejores momentos de sus
            vidas, ya sea en video o fotografía.
          </p>
        </div>
      </div>
      <div>
        <h2 className="nosotros_h2">Nuestra Misión y Visión</h2>
        <div className="mision_vision">
          <div className="vision_">
            <h3 className="nosotros_h3">Nuestra Visión</h3>
            <div className="nosotros_cuerpo">
              <img src="" alt="imag not found"></img>
              <p className="nosotros_cuerpo_derecha">
                La misión de Alexander Vasquez Fotografía y Video es
                especializar en toda clase de eventos sociales, con una amplia
                experiencia en el sector, ofreciendo servicios de alta calidad y
                oportunidad dejando plasmados los mejores momentos de sus vidas,
                ya sea en video o fotografía.
              </p>
            </div>
          </div>
          <div className="vision_">
            <h3 className="nosotros_h3">Nuestra Visión</h3>
            <div className="nosotros_cuerpo">
              <img src="" alt="imag not found"></img>
              <p className="nosotros_cuerpo_derecha">
                Ser una empresa líder que está a la vanguardia en la toma de
                fotografía profesional, además ofrecer un amplio portafolio de
                servicios con cobertura a nivel Regional, manejando los mejores
                equipos tecnológicos, tener un acercamiento verdadero con los
                nuestros usuarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
